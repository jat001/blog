---
title: 多平台上的密码安全管理
tags:
  - 安全
  - 密码
  - 软件
id: 217
categories:
  - 应用软件
date: 2012-12-19 18:50:10
---

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">帐号安全一直是互联网上经久不衰的话 题。似乎恶意用户（并不总是黑客）总是可以想方设法盗走我们的密码和其它安全认证信息，从之前的CSDN数据库泄露 事件，到上个月看到的黑客利用社会工程学盗用并清空《连线》杂志知名记者手机与电脑数据的新闻，总之各种意想不到的 方法都已经被用来窃取个人账号信息。如果你在所有设备上、所有网站上都设置了不同的密码，却为如何管理它们绞尽脑汁，不妨读读这篇文章，多多少少都是有些帮助的。</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">首先推荐的软件是 KeePass Password Safe（Windows 平台的名称），这款软件提供主流全平台支持，甚至包括比较冷门的 Palm OS 和 Spoon 系统（我没有听说过），并且在绝大多数平台上功能都很全面（不像某些软件，在部分平台上只有查看功能）。话说 KeePass 是我最喜欢的一款密码管理软件，一个主要原因就是它开源、免费。你可以在 KeePass 中分类管理帐号密码，且可以于特定窗口中按下快捷键进行自动输入。KeePass 有独创的“双通道混要输入”技术，通过半模拟按键半复制粘贴的乱序键入方式，使得任何恶意程序都无法获取到完整正确的密码组合（某些情况下，基于软件或网 页限制，此项技术并不可用，但仍然可以使用全模拟按键方式自动键入密码）。KeePass 最多允许使用一个主密码、一个随机密钥文件和当前 Windows 用户账户信息保护和加密数据库。</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">![](//www.sinosky.org/uploads/2012/KeePass Password Safe.png)

</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">下一个要谈谈 1Password（Mac 平台的名称），很多人也许听说过，曾经是 Mac OS 上老牌的密码管理软件。软件功能很强，但只提供 Windows 和 Mac OS 版本，还有只能查看数据库的 Android 版（实在是可有可无）。1Password 仅使用一个主密码加密数据库，且需要配合浏览器插件实现网页帐号密码自动输入，不支持应用程序中的帐号密码。但值得一提的是，1Password 输入方式很有特点。KeePass 是模拟手动输入，需要鼠标首先定位到用户名框，在输完用户名后发送一个伪 TAB 命令再输入密码，最后是 ENTER 命令。1Password 则是识别输入框标记，“用户名”字段可以保证永远输入在“用户名”框中，密码则是密码框，无论你将鼠标定位在哪里，都能实现准确输入。这一点上来 说，1Password 较比 KeePass 有很大优势。</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">![](//www.sinosky.org/uploads/2012/1Password.png)

</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">其它密码管理软件我也用过不少，功能与安全性上各有优劣。今天暂时不提，后续我还会更新这篇文章，帮助大家选取最 实用、最适合的密码管理软件。当然，最好的保险箱还是自己的大脑，前提是确保它能存住足够多的东西……相信我，密码总是 会越来越多的！</span>