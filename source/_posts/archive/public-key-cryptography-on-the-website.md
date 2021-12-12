---
title: 非对称加密在网站中的应用
tags:
  - OpenSSL
  - RSA
  - SSL/TLS
  - 公开密钥加密
  - 加密算法
  - 非对称加密
id: 694
categories:
  - 信息安全
date: 2013-12-12 12:17:33
---

接[上文](/fuck-china-unicom.html)，联通的工程师提醒我最近不要使用亚马逊购物，虽然我非常感谢提醒，不过大可不必担心，涉及隐私信息的部分，亚马逊已经做了加密。下面还是普及下非对称加密的知识吧。

&nbsp;

_以下内容引自[维基百科](https://zh.wikipedia.org/wiki/%E5%85%AC%E5%BC%80%E5%AF%86%E9%92%A5%E5%8A%A0%E5%AF%86)。_

公开密钥加密（英语：Public-key cryptography，也称为非对称(密钥)加密），以单向函数与单向暗门函数为基础，为发讯与收讯的两方创建密钥。

非对称密钥，是指一对加密密钥与解密密钥，这两个密钥是数学相关，用某用户密钥加密后所得的信息，只能用该用户的解密密钥才能解密。如果知道了其中一个，并不能计算出另外一个。因此如果公开了一对密钥中的一个，并不会危害到另外一个的秘密性质。称公开的密钥为公钥；不公开的密钥为私钥。

如果加密密钥是公开的，这用于客户给私钥所有者上传加密的数据，这被称作为公开密钥加密(狭义)。例如，网络银行的客户发给银行网站的账户操作的加密数据。

如果解密密钥是公开的，用私钥加密的信息，可以用公钥对其解密，用于客户验证持有私钥一方发布的数据或文件是完整准确的，接收者由此可知这条信息确实来自于拥有私钥的某人，这被称作数字签名，公钥的形式就是数字证书。例如，从网上下载的安装程序，一般都带有程序制作者的数字签名，可以证明该程序的确是该作者（公司）发布的而不是第三方伪造的且未被篡改过(身份认证/验证)。

常见的公钥加密算法有: RSA、ElGamal、背包算法、Rabin（RSA的特例）、迪菲－赫尔曼密钥交换协议中的公钥加密算法、椭圆曲线加密算法（英语：Elliptic Curve Cryptography,ECC）。使用最广泛的是RSA算法（由发明者Rivest、Shmir和Adleman姓氏首字母缩写而来）是著名的公开金钥加密算法，ElGamal是另一种常用的非对称加密算法。

&nbsp;

_以下内容同样引自[维基百科](https://zh.wikipedia.org/wiki/RSA%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95)。_

RSA加密算法是一种非对称加密算法。在公开密钥加密和电子商业中RSA被广泛使用。对极大整数做因数分解的难度决定了RSA算法的可靠性。换言之，对一极大整数做因数分解愈困难，RSA算法愈可靠。

针对RSA最流行的攻击一般是基于大数因数分解。1999年，RSA-155（512 bits）被成功分解，花了五个月时间（约8000 MIPS 年）和224 CPU hours 在一台有3.2G中央内存的Cray C916计算机上完成 。

2002年，RSA-158也被成功因数分解。

2009年12月12日，编号为 RSA-768 （768 bits, 232 digits）数也被成功分解。这一事件威胁了现通行的1024-bit密钥的安全性，普遍认为用户应尽快升级到2048-bit或以上。

&nbsp;

我们网站所使用的证书就是采用 RSA 加密的，目前大部分网站的证书都采用 RSA 2048-bit 加密，这是一种比较安全的加密方式，而证书的颁发者，大都是受信任的第三方证书颁发机构，一般内置在操作系统或浏览器中。

可能有人可能会问了，怎么保证证书颁发机构的安全呢？举个简单的例子，我们都知道奥巴马是谁，长啥样。就算是一个黑人穿着西装，从空军一号上下来，说我是奥巴马，恐怕也没人信。而如果一个骗子，穿着军装，说我是某某军队的政委，恐怕还真有人信。如果奥巴马指着一个人说他是下任美国国防部部长，估计没有人会质疑。同样的道理，一个大家都知道的权威证书颁发机构颁发给一个网站的证书，可以证明发送给客户端的数据确实来自于这个网站，而不是其他人。

&nbsp;

服务器与客户端之间的通讯，一般采用 SSL/TLS 协议加密，下面简要介绍下它的工作方式（引自[维基百科](https://zh.wikipedia.org/wiki/%E5%AE%89%E5%85%A8%E5%A5%97%E6%8E%A5%E5%B1%82)）。客户端要收发几个握手信号：

1.  发送一个 `ClientHello` 消息，说明它支持的密码算法列表、压缩方法及最高协议版本，也发送稍后将被使用的随机数。
2.  然后收到一个 `ServerHello` 消息，包含服务器选择的连接参数，源自客户端初期所提供的 `ClientHello`。
3.  当双方知道了连接参数，客户端与服务器交换证书（依靠被选择的公钥系统）。这些证书通常基于X.509，不过已有草案支持以OpenPGP为基础的证书。
4.  服务器请求客户端公钥。客户端有证书即双向身份认证，没证书时随机生成公钥。
5.  客户端与服务器通过公钥保密协商共同的主私钥（双方随机协商），这通过精心谨慎设计的伪随机数功能实现。结果可能使用 Diffie-Hellman 交换，或简化的公钥加密，双方各自用私钥解密。所有其他关键数据的加密均使用这个“主密钥”。

目前，大部分 web 服务器（如 nginx、apache 等）都使用 OpenSSL 作为加密模块，在[这里](https://www.openssl.org/docs/apps/ciphers.html)可以找到 OpenSSL 所支持的加密方法，在[这里](http://www.techstacks.com/howto/j2se5_ssl_cipher_strength.html)找到部分加密方法的安全性对比。

&nbsp;

具体到亚马逊这个网站，可以看到，无论是提交订单还是账户管理，都使用 https 协议，也就是说是加密的。亚马逊的证书采用 RSA 2048-bit 加密，连接采用 SSL_RSA_WITH_RC4_128_SHA 加密，都是比较安全的加密方式。

<div style="overflow: hidden; width: 656px; margin: 0 auto;">
[![amazon_chrome](http://bcs.duapp.com/sinosky-blog/2013/12/12/amazon_chrome.png)](http://bcs.duapp.com/sinosky-blog/2013/12/12/amazon_chrome.png) [![amazon_firefox](http://bcs.duapp.com/sinosky-blog/2013/12/12/amazon_firefox.png)](http://bcs.duapp.com/sinosky-blog/2013/12/12/amazon_firefox.png)
</div>

本站则首选更为安全的 TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 加密方法，但有部分浏览器不支持这种加密方法，如 Firefox 只支持 TLS_ECDHE_RSA_WITH_RC4_128_SHA 加密方法。

<div style="overflow: hidden; width: 656px; margin: 0 auto;">
[![sinosky_chrome](http://bcs.duapp.com/sinosky-blog/2013/12/12/sinosky_chrome.png)](http://bcs.duapp.com/sinosky-blog/2013/12/12/sinosky_chrome.png)  [![sinosky_firefox](http://bcs.duapp.com/sinosky-blog/2013/12/12/sinosky_firefox.png)](http://bcs.duapp.com/sinosky-blog/2013/12/12/sinosky_firefox.png)
</div>

&nbsp;

综上所述，只要保管好自己的密码等私密信息，网站也使用安全的加密方法传输数据，同时网站做好数据库的防护，防范好拖库等泄漏事件，那么网购过程就是安全、可靠的。

&nbsp;

相关阅读：[密码学](https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A0%81%E5%AD%A6)