---
title: SSL & SPDY 已全面部署
tags:
  - HTTP
  - HTTPS
  - Nginx
  - OpenSSL
  - SPDY
  - SSL
  - TCP
  - 传输控制协议
id: 295
categories:
  - Linux
date: 2013-09-09 02:34:16
---

正如你所看到的，现在博客和离线下载已经全面强制启用 HTTPS 协议，不过还有一个你看不到的——SPDY 协议。

SPDY 是 Google 开发的基于传输控制协议（TCP）的应用层协议，开发组正在推动 SPDY 成为正式标准（现为互联网草案）。SPDY 协议类似于 HTTP，但旨在缩短网页的加载时间和提高安全性，通过压缩、多路复用和优先级来缩短加载时间。

SPDY 并不是首字母缩略字，而仅仅是“speedy”的缩写，意为“更快”，现为 Google 的商标。

Google Chrome 用户打开 `chrome://net-internals/#spdy` 就会发现你已经在使用 SPDY 协议了。

&nbsp;

**Nginx 的配置方法**：

Redhat 系自带的 OpenSSL 版本过低，不支持 SPDY，直接使用会报错以下错误（Debian 系、ArchLinux 等源里软件更新较快的用户可以忽略）：

<pre class="lang:default highlight:0 wrap:1 " >
nginx: [warn] nginx was built without OpenSSL NPN support, SPDY is not enabled for 0.0.0.0:443 in ...
</pre>

所以你要先下载最新的 OpenSSL，目前是 1.0.1e，[这里](http://www.openssl.org/source/)是下载列表，红色标注的就是最新版了。

只下载、解压即可：

<pre class="lang:shell" >
cd /tmp
wget http://www.openssl.org/source/openssl-1.0.1e.tar.gz
tar zxvpf openssl-1.0.1e.tar.gz
</pre>

然后下载最新的 [Nginx](http://nginx.org/en/download.html)，解压、编译、安装：

<pre class="lang:shell" >
cd /tmp
wget http://nginx.org/download/nginx-1.5.4.tar.gz
tar zxvpf nginx-1.5.4.tar.gz
cd nginx-1.5.4
./configure --with-http_ssl_module --with-http_spdy_module --with-openssl=/tmp/openssl-1.0.1e
make
make install
</pre>

<span style="color: red">注意</span>：这里的配置只是启用 SSL 和 SPDY 所需的最小参数，生产环境中可能需要更多参数，比如我的，

<pre class="lang:shell" >
./configure\
 --prefix=/usr/local/nginx --conf-path=/home/www/etc/nginx/nginx.conf --error-log-path=/home/www/log/nginx/error.log --http-log-path=/home/www/log/nginx/access.log --pid-path=/var/run/nginx.pid\
 --lock-path=/tmp/nginx.lock --user=www --group=www --with-ipv6 --with-http_ssl_module --with-http_spdy_module --with-http_gzip_static_module --with-http_stub_status_module --with-http_flv_module\
 --with-http_mp4_module --add-module=/tmp/nginx-accesskey-2.0.3 --http-client-body-temp-path=/var/tmp/nginx/client_body --http-proxy-temp-path=/var/tmp/nginx/proxy\
 --http-fastcgi-temp-path=/var/tmp/nginx/fastcgi --http-uwsgi-temp-path=/var/tmp/nginx/uwsgi --http-scgi-temp-path=/var/tmp/nginx/scgi --with-openssl=/tmp/openssl-1.0.1e
</pre>

如果是升级的话，编译完成后不要再执行 `make install`，不然会把原有的配置文件覆盖，正确的方法是直接删除旧的，把新的复制过去后执行 `make upgrade`：

<pre class="lang:shell" >
rm -f /usr/local/nginx/sbin/nginx
cp objs/nginx /usr/local/nginx/sbin/nginx
make upgrade
</pre>

&nbsp;

**Nginx 配置文件示例**（有删减，不要直接使用）：

<pre class="lang:default highlight:0" >
server
{
    # 合并 http/https 主机
    listen       80;
    # 开启 ssl & spdy
    listen       443 ssl spdy;
    # 主机名
    server_name  www.sinosky.org;

    # 为这个虚拟主机指定 PEM 格式的证书文件，这个文件可以包含其他的证书和服务器私钥，同样，密钥也必须是PEM格式
    ssl_certificate     /home/www/etc/ssl/certs/main.crt;
    # 为这个虚拟主机指定 PEM 格式的私钥
    ssl_certificate_key /home/www/etc/ssl/private/main.key;
    # 指出为建立安全连接，服务器所允许的密码格式列表，密码指定为 OpenSSL 支持的格式
    # http://www.openssl.org/docs/apps/ciphers.html
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-RC4-SHA:ECDHE-RSA-AES128-SHA:AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!CAMELLIA:!PSK:!SRP;
    # 指定要开启的 SSL 协议
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    # 优化 SSL 的访问速度和资源消耗
    # 依赖 SSLv3 和 TLSv1 协议的服务器密码将优先于客户端密码
    ssl_prefer_server_ciphers   on;
    # 设置储存 SSL 会话的缓存类型和大小
    ssl_session_cache    shared:SSL:10m;
    # 设置客户端能够反复使用储存在缓存中的会话参数时间
    ssl_session_timeout  10m;
    # 不设置以下两项，Firefox 会报 sec_error_ocsp_unknown_cert 错误
    # 启用 OCSP 响应验证服务器
    ssl_stapling on;
    # CA 证书，可以与服务器证书放在一个文件里
    ssl_trusted_certificate /home/www/etc/ssl/certs/main.crt;
    # 以上设置在官方文档都有详细说明 http://nginx.org/en/docs/http/ngx_http_ssl_module.html

    # 强制使用 https（http 跳转到 https），$ssl_protocol 为所用的 SSL 协议，如果为空就一定是 http 了
    # 除此外的检测方法还有 $server_port = 80、$scheme = http、error_page 497 等，下面会详细说明
    if ($ssl_protocol = "") {
        return 301 https://$server_name$request_uri;
    }

    # HTTP Strict Transport Security，简称 HSTS
    # 当用户在浏览器输入不带协议的网址的时候，自动识别协议为 https，而不是 http
    # 如果你的子域没有全部部署 https，请去掉 includeSubDomains
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
}
</pre>

关于强制使用 https（http 跳转到 https），最常见的是配置两个主机，一个监听 80，一个监听 443，监听 80 的那个直接转发到 443。

不常见的方法还有：合并 http/https 主机，检测 `$server_port = 80`、`$scheme = http` 或发送 `error code 497` 等。

`$server_port` 是浏览器请求到达的服务器端口号；`$scheme` 是所用的协议，有 http 和 https，不过使用 `$ssl_protocol` 和这两种检测方法对于 `http://www.sinosky.org:443` 无效，最典型的例子就是 phpMyAdmin 在登录时会请求 `http://www.sinosky.org:443`。

497 是 nginx 的状态码，意思是 `The plain HTTP request was sent to HTTPS port`，虽然也能起到跳转的作用，但返回到客户端是 302 而不是 301，不过对于 `http://www.sinosky.org:443` 有效，建议配合前面 3 种方法一块使用。

下面是 3 种方法的示例：

<pre class="lang:default highlight:0" >
if ($server_port = 80) {
    return 301 https://$server_name$request_uri;
}

if ($scheme = http) {
    return 301 https://$server_name$request_uri;
}

error_page 497 https://$server_name$request_uri;
</pre>

&nbsp;

再提示一点，证书文件一定要含有签发证书的 CA 和 根 CA 的证书，并配置 `ssl_trusted_certificate`（nginx）或 `SSLCertificateChainFile`（apache），否则浏览器可能无法识别证书链。服务器的证书在最上面，二级 CA 在中间，最后是根 CA，顺序不能错。

比如 StartSSL 的证书（来自官方的[说明](https://www.startssl.com/?app=42)），先获取 CA 的证书然后合并：

<pre class="lang:shell" >
wget http://www.startssl.com/certs/ca.pem
wget http://www.startssl.com/certs/sub.class1.server.ca.pem
cat ssl.crt sub.class1.server.ca.pem ca.pem >> /home/www/etc/ssl/certs/main.crt
</pre>

&nbsp;

配置完成后，执行 `/etc/init.d/nginx reload` 或 `/usr/local/nginx/sbin/nginx -s reload` 重载 Nginx 配置文件即可正常访问了。

&nbsp;

强制使用 HTTPS 以后，博客垃圾评论大量减少了；开启 SPDY 后，载入速度有显著提升。