---
title: 设置 sysctl 和 iptables 防攻击
tags:
  - DDoS
  - iptables
  - sysctl
  - 防火墙
id: 882
categories:
  - Linux
date: 2014-02-25 02:03:02
---

sysctl 可以显示和修改内核参数，包含一些 TCP/IP 堆栈和虚拟内存系统的高级选项，合理设置可以显著提高系统性能。iptables 是 Linux 下最常用的防火墙软件，也是很多 Linux 发行版自带的默认防火墙软件。通过设置 sysctl 和 iptables，可以有效防范中小程度的攻击。

&nbsp;

**注意**：

1.  文中的规则只适用于小网站，请根据服务器实际情况调整相关数值。
2.  阅读本文之前，你需要对一些基本概念有个大致了解，比如 [TCP](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE) 协议的三次“握手”、四次“挥手”等。
3.  本文只对文中涉及到的相关的命令或参数做简单介绍，详细说明请参考给出的链接。
4.  [Iptables 指南 1.1.19](http://man.chinaunix.net/network/iptables-tutorial-cn-1.1.19.html) 是目前比较全的 iptables 中文文档（下面简称“中文文档”），但是内容较老，新的 netfilter matches 也未涉及，英语好的话还是建议看[官方文档](http://www.netfilter.org/documentation/index.html)，iptables extensions 部分在 ipset 的[官方文档](http://ipset.netfilter.org/iptables-extensions.man.html)里。

&nbsp;

## sysctl 设置

下面的所有选项都可以在 [Linux Kernel 官方文档](https://www.kernel.org/doc/)（英文）中找到。`net.ipv4.*` 部分在[这里](https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt)，`net.netfilter.*` 部分在[这里](https://www.kernel.org/doc/Documentation/networking/nf_conntrack-sysctl.txt)。

请直接修改 `/etc/sysctl.conf`，然后使用 `sysctl -p` 命令载入设置。

所有名字中带“tcp”的选项，都是指的 TCP 连接，下面不再特别说明。

<pre class="lang:default highlight:0 line-height:25" >
# 同时保持 time-wait 状态的 socket 数量，超过此数目的 time-wait 状态的 socket 会被关闭并打印出错误信息。
# 请根据服务端并发连接数和内存大小适当增加这个值。
net.ipv4.tcp_max_tw_buckets = 2000

# 关闭快速回收 time-wait 状态的 socket
net.ipv4.tcp_tw_recycle = 0
# 开启复用 time-wait 状态的 socket
net.ipv4.tcp_tw_reuse = 1

# 开启此选项可以防范一般的 SYN flood 攻击。
# 注意：syncookies 严重违反了 TCP 协议，可能会对 SMTP 转发等服务造成严重影响。
net.ipv4.tcp_syncookies = 1

# 记录未收到客户端确认的连接请求的最大值。
# 请根据服务器大小和内存大小适当增加这个值。
net.ipv4.tcp_max_syn_backlog = 2048

# 对于一个新建连接，重复发送多少个 SYN 仍未收到响应后放弃连接。
net.ipv4.tcp_syn_retries = 2
# 对于客户端发来的新建连接请求（SYN），重复发送多少个 SYN/ACK 仍未收到响应后放弃此连接。
net.ipv4.tcp_synack_retries = 2
# 请根据网络环境适当调整这两个值，比如：如果服务器在国外，而用户只主要为国内访客，请增加这两个值。
# 如果服务器和用户都在内网中，可以把这两个值都设为 0。

# 当 keepalive 打开的情况下，多长时间发送一次 keepalive。
# 当攻击者建立大量连接后，不发送或回应任何请求，直到 keepalive 时间过后，服务端通过发送 keepalive 才能确认连接已关闭。
# 减少这个值可以降低服务器资源浪费，但当正常的长连接过多时，会造成增加服务器负载。
net.ipv4.tcp_keepalive_time = 600
# 发送 keepalive 的次数，当发送多少个 keepalive 仍未收到响应后，认为放弃连接。
net.ipv4.tcp_keepalive_probes = 5
# 发送 keepalive 的频率，tcp_keepalive_intvl x tcp_keepalive_probes = 自第一次发送 keepalive 到放弃连接。
# 比如每次发送间隔 10 秒，共发送 5 次，如果期间没有收到任何响应，则 50 秒后放弃连接。
net.ipv4.tcp_keepalive_intvl = 10

# 已被进程断开的连接（此连接不再属于任何进程），如果客户端没有正常响应，以关闭连接，那么在服务端，此连接会一直处于 FIN_WAIT_2 状态。
# 此选项设置当多长时间后，放弃此连接。
net.ipv4.tcp_fin_timeout = 20

# 忽略 ICMP ECHO 请求，也就是禁止 ping。
net.ipv4.icmp_echo_ignore_all = 1

# 已建立连接的超时时间。减少这个值可以更快速地释放已不用的连接。
net.netfilter.nf_conntrack_tcp_timeout_established = 3600
</pre>

注意**不要开启** `net.ipv4.tcp_tw_recycle`，原因见[这篇文章](http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html)。

<p>如果需要允许 `ping`，请删除上面的 `net.ipv4.icmp_echo_ignore_all = 1`，并去掉 iptables 规则中的注释。

&nbsp;

## iptables 规则

请使用 `iptables-restore` 命令载入下面的规则，不要直接使用 `iptables` 命令。

规则中的 `eth0` 为可信的内网，`eth1` 为外网。

<pre class="lang:default highlight:0 line-height:25">
*filter

-P INPUT DROP
-P FORWARD DROP
-P OUTPUT ACCEPT

-N bad_tcp_packets
-N limit_packets
-N allowed_tcp_packets
-N tcp_packets
-N udp_packets
#-N icmp_packets

-A bad_tcp_packets -p TCP --tcp-flags SYN,ACK SYN,ACK -m state --state NEW -j REJECT --reject-with tcp-reset
-A bad_tcp_packets -p TCP ! --syn -m state --state NEW -j DROP

-A limit_packets -m hashlimit --hashlimit-name flows --hashlimit-above 50kb/s --hashlimit-burst 100kb --hashlimit-mode srcip --hashlimit-srcmask 24 -j DROP
-A limit_packets -m state --state ESTABLISHED,RELATED -j ACCEPT
-A limit_packets -m recent --name connections --update --seconds 600 --hitcount 300 --mask 24 -j DROP
-A limit_packets -m recent --name connections --set --mask 24
-A limit_packets -m connlimit --connlimit-above 10 --connlimit-mask 24 -j DROP

-A allowed_tcp_packets -p TCP --syn -j ACCEPT

-A tcp_packets -p TCP --dport 52 -j allowed_tcp_packets
-A tcp_packets -p TCP --dport 55 -j allowed_tcp_packets
-A tcp_packets -p TCP --dport 80 -j allowed_tcp_packets
-A tcp_packets -p TCP --dport 443 -j allowed_tcp_packets
-A tcp_packets -p TCP --dport 8090 -j allowed_tcp_packets

-A udp_packets -p UDP --dport 8090 -j ACCEPT

#-A icmp_packets -p ICMP --icmp-type 8 -j ACCEPT
#-A icmp_packets -p ICMP --icmp-type 11 -j ACCEPT

-A INPUT -p TCP -j bad_tcp_packets
-A INPUT -i lo -j ACCEPT
-A INPUT -i eth0 -j ACCEPT
-A INPUT -i eth1 -j limit_packets
-A INPUT -i eth1 -p TCP -j tcp_packets
-A INPUT -i eth1 -p UDP -j udp_packets
#-A INPUT -i eth1 -p ICMP -j icmp_packets

-A FORWARD -p TCP -j bad_tcp_packets
-A FORWARD -i lo -j ACCEPT
-A FORWARD -i eth0 -j ACCEPT
-A FORWARD -i eth1 -m state --state ESTABLISHED,RELATED -j ACCEPT

-A OUTPUT -p TCP -j bad_tcp_packets

COMMIT

</pre>

上面的大部分选项在中文文档中已有详细说明，只做简要介绍，详细说下里面没有的。

&nbsp;

`-P` 为内建的链设置 target，这个默认的 target 称为“策略”，如果一个包没有被任何规则匹配到，就使用策略。常用的 target 有 ACCEPT：接受包，允许通过；DROP：直接丢弃包，不返回任何信息；REJECT：拒绝包并返回信息，可以使用 `--reject-with` 设置返回的信息。

INPUT 是入站包，即发往本地的包；OUTPUT 是出站包，即从本地发出的包；FORWARD 是转发包，即不是本地发出且目的地不是本地的包。

`-N` 设置自定义链，不能与已有的 target 或链重名。

`-A` 在所选择的链末添加规则。

`-p` 匹配协议，可用的值有 TCP、UDP、ICMP 或 ALL，也可以是多个值，以半角逗号分隔。

&nbsp;

`-m` 加载 match，比如 `-m state`。

state match 匹配状态，共有 4 种，NEW：建立连接的第一个包；ESTABLISHED：已建立连接的包；RELATED：与已建立的（ESTABLISHED）连接有关的包；INVALID：无法识别状态的包，一般直接丢弃。

`--tcp-flags` 匹配指定的 TCP 标记，有两个参数，都为列表，列表内部用半角逗号分隔，这两个列表之间用空格分隔。第一个参数指定要检查的标记，第二个参数指定在第一个列表中出现过且被设为 1 的标记（第一个列表中其他的标记需为 0）。

`--syn` 与 `--tcp-flags SYN,RST,ACK SYN` 等价，检查 SYN、RST 和 ACK，SYN 需为 1，RST 和 ACK 需为 0。

`-j` 执行具体的操作（ACCEPT、DROP 或 REJECT）或跳转到其他链中

关于 bad_tcp_packets 两条规则的详细介绍，请看中文文档的附录 B.2\. 未设置 SYN 的 NEW 状态包 和附录 B.3\. NEW 状态的 SYN/ACK 包。

&nbsp;

hashlimit match 与 limit match 差不多，都能用来限制每段时间中通过的包数，但 hashlimit 还可以用来限制流量，它也提供了更多匹配模式。

`--hashlimit-name` 设置这个匹配的名字，记录文件以此为名保存在 /proc/net/ipt_hashlimit/ 下。

`--hashlimit-upto` 匹配小于这个数的包，`--hashlimit-above` 匹配大于这个数的包，也可以加上 kb、mb 或 gb 等来匹配流量，时间可以是每秒 /s(econd)、每分钟 /m(inute)、每小时 /h(our) 或每天 /d(ay)。

当包数或流量超过 `--hashlimit-burst` 的值后，`--hashlimit-upto` 或 `--hashlimit-above` 才开始生效。如果在上个时间段中，没有足够的包或流量通过，upto 或 above 是可以累加的，但最多不会超过 burst 的值，burst 的值也不能比 upto 或 above 的值小。

`--hashlimit-burst` 与 （`--hashlimit-upto` 或 `--hashlimit-above`） 是必需的。

`--hashlimit-mode` 的值可以是 srcip（来源 IP）、srcport（来源端口）、dstip（目标 IP）或 dstport（目标端口）中的一个或多个。

`--hashlimit-srcmask` 设置掩码，值为 0 到 32，比如：如果值为 24，则匹配 C 类网段（像 192.168.1.1 ~ 192.168.1.254）。

`--hashlimit-htable-expire` 设置 hash 的过期时间，单位毫秒。

注意：limit match 中的 `--limit` 不能取反，中文文档中的相关说明是错误的。

&nbsp;

<pre class="lang:default highlight:0 line-height:25">
-m state --state ESTABLISHED,RELATED -j ACCEPT
</pre>

这条规则放行已有的连接和与其有关的连接，也就是说只有新的连接会继续在表中匹配，同链中后面的规则都是针对状态为 NEW 的包。

&nbsp;

recent 也是用来匹配每段时间内通过的包数的，但它可以更自由地设置单位时间。

`--name` 设置这个匹配的名字，如果没有设置，则使用 `DEFAULT`。

`--set` 记录 IP 到列表中，如果已有这个 IP，则更新列表。

`--remove` 检查 IP 是否在列表中，如果有则从列表中移除并返回 true，如果没有则返回 false。

`--set`、`--rcheck`、`--update` 和 `--remove` 不能同时设置。

`--rsource` 匹配或保存来源 IP 到列表中（默认设置），`--rdest` 匹配或保存目标 IP 到列表中。

`--mask` 在列表中加入掩码。

`--seconds` 设置单位时间（秒）。

`--hitcount` 在设置时间中，来自或发往一个 IP 的包数等于或大于这个值则匹配。它的最大值为 xt_recent 内核模块中 `ip_pkt_list_tot` 的值，默认是 20。

要修改 `ip_pkt_list_tot` 的值，请在 `/etc/modprobe.d/` 下新建一个文件，文件名随意，加入：

<pre class="lang:default highlight:0 line-height:25">
options xt_recent ip_list_tot=1000 ip_pkt_list_tot=200 ip_list_hash_size=0
</pre>

`ip_list_tot` 是记录每个表通过的包数；`ip_pkt_list_tot` 是记录每个地址通过的包数；`ip_list_hash_size` 是 hash 表的大小，其值为 0 则根据 `ip_list_tot` 来计算。

CentOS 等发行版的用户只需关闭 iptables，然后使用命令 `modprobe -r xt_recent` 卸载 xt_recent 模块，然后再开启 iptables 就会重新加载 xt_recent 模块了，其他发行版的用户只能重启系统了。

&nbsp;

connlimit match 用来限制并发连接数。

`--connlimit-upto` 匹配小于这个连接数的连接，`--connlimit-above` 匹配大于这个连接数的连接。

`--connlimit-mask` 设置掩码，值为 0 到 32（IPv4）或 0 到 128（IPv6）。如果未设置，则使用协议所允许的最大值：32（IPv4）或 128（IPv6）。

`--connlimit-saddr` 限制来源 IP（如果 daddr 未设置则为默认），`--connlimit-daddr` 限制目标 IP。

&nbsp;

`limit_packets` 链通过 hashlimit match 来限制流量，通过 recent match 来限制一定时间内新建连接的数量，通过 connlimit match 来限制同时新建连接的数量。你也可以通过对协议、端口或 IP 等的过滤，来分别控制不同应用的连接数或流量。

&nbsp;

`--sport` 匹配来源端口，`--dport` 匹配目的端口。

`--icmp-type` 匹配 ICMP 类型，你可以在中文文档的附录 C. ICMP 类型中找到所有的 ICMP 类型。你可能还需要做相应的频率限制以防攻击，请参考上面的规则。

`-i` 匹配网络接口。