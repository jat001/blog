---
title: IP、端口与协议
tags:
  - OSI 模型
  - TCP/IP
  - 互联网
  - 信息技术
  - 网络
  - 网络传输协议
  - 计算机网络
id: 716
categories:
  - 互联网
date: 2013-12-12 20:07:57
---

本文旨在对计算机网络进行科普，只讨论软件范围内的计算机网络，不讨论硬件，也不讨论复杂的如 OSI 模型等。

本文仅列举了部分网络传输协议，如想了解更多，请看下面的相关阅读。

本文部分内容来自[中文维基百科](https://zh.wikipedia.org)。

笔者非科班出身，错误与纰漏在所难免，欢迎批评指正。

&nbsp;

IP、端口与协议可谓是网络上两台计算机间进行可靠的数据传输所必需的三要素，三者相辅相成，缺一不可。

&nbsp;

IP（Internet Protocol），网际协议，或称互联网协议，是用于报文交换网络的一种面向数据的协议。

其实 IP 也是一种协议（protocol），为什么把它与其他协议区分开呢？

举个例子吧，如果把计算机比做人，那么 IP 就是人名，如果你在人群中喊：“那个谁，过来一下”，恐怕没人知道你喊的谁。

有了 IP 地址（IP Address，Internet Protocol Address的缩写，互联网协议地址，又译网际协议地址），就相当于知道了人名，也就能找到这台计算机了。

IP 是在 TCP/IP 协议中网络层的主要协议，任务是仅仅根据源主机和目的主机的地址传送数据。为此目的，IP 定义了寻址方法和数据报的封装结构。

IP 地址在当前网络具有唯一性。

有知道 MAC（Media Access Control，介质访问控制）的同学可能会问了，MAC 地址（MAC Address，Media Access Control Address的缩写，媒体访问控制地址，或称硬件地址）也具有唯一性，为什么不能用 MAC 地址替代 IP 地址呢？

其实认真了解下 IP 地址和 MAC 地址就能很容易找出差别了。

不过还是举个简单的例子吧，把 MAC 地址比做身份证号，IP 地址比做手机号，两者都可以找到这个人，MAC 地址还能找到这个人什么时候出生和在哪出生等信息，但却不能找到这个人现在在哪，而 IP 地址则能找到这个人现在在哪。

当然，这个比喻不太恰当，因为你可以带着手机号漫游全国，但不可能带着 IP 地址这样做，因为 IP 地址是按地域和运营商事先分配好的。

&nbsp;

本文所指的端口（port，台译“埠”）是协议端口（protocol port），关于协议，我们在下面再说。

我们还是把计算机比做人，知道与喊的哪个人了，但那个人用什么来听声音呢？总不能用眼睛听、用鼻子看、用耳朵闻吧，没错，端口就相当于眼、耳、口、鼻、手，分别被不同的程序绑定，用于看、听、说、闻、写。

不同于人的五官，一个 IP 地址可以有 65536（即 2^16）个端口。

端口是通过端口号来标记的，端口号（port numbers）只有整数，范围是从0 到65535（2^16-1）。

一个进程可以绑定多个端口，但一个端口只能被一个进程绑定。

一些端口已经被预先分配了，比如常见的 80 端口分配给了 http 协议、443 端口分配给了 https 协议，在 [IANA](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) 网站上可以找到完整的列表。

你也可以让别的进程来绑定这些端口，但通常这都是不推荐的。

大部分浏览器在使用 http 协议访问 80 端口、https 协议访问 443 端口时不会显示端口号，Google Chrome 和 Mozilla Firefox 在使用 http 协议时也不会显示 http://，这当然不是因为它们不是使用 http、https 协议或访问的不是 80、443 端口，只是为了方便用户而隐藏了。

&nbsp;

本文所指的协议（protocol），是网络传输协议或简称传送协议（Communications Protocol），是指计算机通信或网络设备的共同语言。

共同语言，什么意思？

我们再举例说明，比如，你对着聋哑人演讲、给盲人写信；对美国人说阿拉伯语，对法国人说俄语，对中国人说意大利语，结果就是，没人明白你想表达什么。

只有采用双方都能理解的、事先约定的协议传输数据，对方才能知道你想表达什么。

现在最普及的计算机通信为网络通信，所以“传送协议”一般都指计算机通信的传送协议，如：TCP/IP、NetBEUI、DHCP、FTP等。

然而，传送协议也存在于计算机的其他形式通信，例如：面向对象编程里面对象之间的通信；操作系统内不同程序之间的消息，都需要有一个传送协议，以确保传信双方能够沟通无间。

常见的协议有 HTTP（HyperText Transfer Protocol，超文本传输协议）、HTTPS（Hypertext Transfer Protocol Secure，超文本传输安全协议）和 DNS（域名系统，Domain Name System）等。

&nbsp;

**相关阅读**：

*   [互联网](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91)
*   [TCP/IP协议](https://zh.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE)
*   [网络传输协议](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)
*   [OSI模型](https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B)