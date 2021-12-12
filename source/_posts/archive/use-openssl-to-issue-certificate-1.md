---
title: 使用 OpenSSL 颁发企业级证书（一）
tags:
  - OpenSSL
  - 证书
id: 958
categories:
  - 教程
date: 2014-04-28 16:32:10
---

先来解释下这里的“企业级”，正规的证书颁发机构所签发的证书往往具有多级 [CA](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E8%AF%81%E4%B9%A6%E8%AE%A4%E8%AF%81%E6%9C%BA%E6%9E%84)（Certificate Authority，数字证书认证机构），根 CA 的私钥离线保存，而二级 CA 严格限制了证书的用途，加上 [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol)（Online Certificate Status Protocol，在线证书状态协议）和 [CRL](https://zh.wikipedia.org/wiki/%E8%AF%81%E4%B9%A6%E5%90%8A%E9%94%80%E5%88%97%E8%A1%A8)（Certificate Revocation List，证书吊销列表），这样就保证了所签发证书的安全性和用途的唯一性。

当然，这些企业不会直接使用 OpenSSL 签发证书，一般都是自己开发的系统，目前开源的解决方案有 [OpenCA](https://pki.openca.org) 和 [r509](http://r509.org) 等，但真正算企业级的只有 PrimeKey 的 [EJBCA](http://www.ejbca.org) 和 [SignServer](http://www.signserver.org)。EJBCA 是一套全能的 CA 系统软件，可以在浏览器中完成证书的签发与吊销，非常适合企业内部使用；SignServer 是一个用于其他程序进行加密操作的应用程序框架，提供时间戳（符合 [Time-Stamp Protocol](https://en.wikipedia.org/wiki/Time_stamp_protocol) (TSP) (RFC 3161)，最常见的用途是在 Windows 下，对 exe 文件进行数字签名时所需要的时间戳 URL。虽然很多大型的证书颁发机构也提供免费的时间戳服务，但对于追求安全与保密、但又不愿自己开发系统的企业来说，使用开源软件无疑是首选。）等功能。不过这两个程序都是基于 Java 的，我这小破服务器实在跑不动，所以也就没有实际测试。

&nbsp;

虽然对一个合格的证书并没有统一的定义，但参考了一些正规的证书颁发机构所签发的证书后，我认为一个合格的证书应具备以下几点：

1\. 多级证书结构。即使是某一中间 CA 的私钥泄漏，只要马上吊销它，客户端就能通过 OCSP 和 CRL 了解到这个 CA 已被吊销，从而不再信任该 CA 所签发的证书。

2\. OCSP 和 CRL。只有通过 OCSP 和 CRL，客户端才能知道某一证书已被吊销，从而不再信任它。

3\. 严格限制证书用途。如果不限制证书用途，那么原本用于 SSL 服务端签名的证书可能会被用于代码签名，一般签发用于 SSL 服务端验证的证书只需要验证域名就可以了，而签发用于代码签名的证书则需要公司的证明文件。

4\. 使用安全的加密算法。像 RSA 1024位 算法就已经被破解，虽然普通电脑要破解它需要很长时间，但还是可行的。

&nbsp;

下面简单介绍下本站所使用的证书结构，也是最常见的三级证书结构，这些证书都可以从[这里](http://cert.sinosky.org/certs/)找到。

[![certs](/uploads/2014/04/certs.png)](/uploads/2014/04/certs.png)

一级为根 CA，包含多种证书用途，建议离线保存私钥并妥善保管，一般签发好二级 CA 后就不再使用。二级 CA 应该严格限制证书用途，但应包含 OCSP Signing（OCSP 签名）用途以签发 OCSP 证书。三级是签发给用户的证书，一般只有一项证书用途，且不能签发其他证书。

OCSP 响应签名（OCSP Response Signing）必须由该级 CA 所签发的 OCSP 证书来做，也就是说根 CA 签发的 OCSP 证书不能对二级 CA 的 OCSP 响应签名，反之亦然。CA 本身也可以用来做 OCSP 响应签名，但这就要求把 CA 的私钥也存储在服务器上，这显然是不安全的。

证书链（Certificate Chains）则应该反过来，即证书 -> 二级 CA 证书 -> 根 CA 证书。

&nbsp;

关于实际操作部分，我还没有想好怎么写，因为 OpenSSL 的配置文件和相关命令比较复杂，坑也比较多，一一解释需要很大篇幅，而不解释的话，估计写出来以后，没接触过 OpenSSL 的人根本看不懂。本站的 OCSP 服务器是采用 [r509-ocsp-responder](https://github.com/r509/r509-ocsp-responder) 搭建的，我计划在第三篇文章中介绍它。