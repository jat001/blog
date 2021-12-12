---
title: InPrivate 神马弱爆了，浏览器要用 TruePrivate
tags:
  - IE
  - InPrivate
  - Windows
  - 内存
  - 自动化
id: 96
categories:
  - 信息安全
date: 2012-12-19 07:56:05
---

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        首先声明 TruePrivate（绝对隐私）在这里是一个形容词，不要去百度、Google 搜索“TruePrivate 绿色版下载”之类的关键词，它不是一个软件。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        下面切入正题。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        我们知道 InPrivate 浏览，这是 Internet Explorer 一个非常好的功能，可以不留痕迹的上网……你懂的。但是 InPrivate 也有很多不便之处，比如它直接禁用了 Cookie、临时文件储存功能和全部扩展、加载项，对于某些必须保存 Cookie 数据和需要加载项的网站来说，InPrivate 就有些鸡肋了。那么，如何实现全功能不留痕迹浏览呢？下面来介绍一种方式，既保证 TruePrivate，又不失网络体验。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        TruePrivate 实现的思路是这样的：由于不可能改变 InPrivate 的规则，而加载项和扩展都是正常运行的，要实现隐私浏览就必须从 Cookie 和临时文件入手。这好办了，用内存啊。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        需要用到一个软件，是大名鼎鼎的“魔方”优化工具的一个组件，（您可以访问 [软媒产品主页](http://mofang.ithome.com/) 来下载“魔方 3”，也可以访问 [Google 云端硬盘](https://docs.google.com/open?id=0B4p68HOOaC12WmE4dU5rdkdSM2s) 单独下载所需软件）目的是将部分内存虚拟为硬盘驱动器。内存的原理不必多说，关机即清的特点非常适合用作 TruePrivate 浏览中 Cookie 等数据的储存介质。操作过程图文如下。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        第一步，解压（或安装）名为 RAMDisk.exe 的程序。（不再上图）</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;">        第二步，创建一个新的内存盘，路径和盘符可以随意设置，大小建议为 250 MB，使用 NTFS 文件系统。打开自动加载，但关闭自动保存。<span style="color: #ff0000;">注意：这里的文件路径只做紧急情况保存重要数据使用，通常情况下此文件内容为空。</span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small;"><span style="color: #ff0000;">[![内存盘的创建界面](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_Create.PNG)](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_Create.PNG "内存盘的创建界面")</span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;">        第三步，在资源管理器中确认内存盘已经加载，并尝试在其中新建任意文件测试是否正常使用。</span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;">        第四步，更改 Internet Explorer 中 Cookie 和临时文件的保存位置，临时文件的最大可用空间需小于虚拟内存盘总大小。<span style="color: #ff0000;">注意：Internet Explorer 10 修改此设置需要注销并重新登录当前用户，无论在 Windows 7 还是 Windows 8 中都需如此操作。</span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;">[![进入 IE 临时文件设置窗口](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_IE.PNG)](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_IE.PNG "进入 IE 临时文件设置窗口")</span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;">[![移动 IE 临时文件目录](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_Migrate.PNG)](//www.sinosky.org/uploads/Created%20by%20D.Y./TruePrivate_Migrate.PNG "移动 IE 临时文件目录")</span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;">        <span style="color: #000000;">最后，大功告成。直接打开 Internet Explorer 看看是不是所有功能全部正常，再也不用担心隐私浏览没有扩展程序和加载项了。而如果希望完全删除浏览数据，只要简单重启一下计算机或者刷新内存即可。这才是 TruePrivate！</span></span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;"><span style="color: #000000;"> </span></span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;"><span style="color: #000000;">        后记：</span></span></span>

<span style="font-family: arial, helvetica, sans-serif; font-size: small; color: #000000;"><span style="color: #ff0000;"><span style="color: #000000;">        灵活使用内存盘可以帮助我们完成很多平时操作起来非常繁琐的清理工作，例如应用程序临时文件和各种缓存目录。如果你的计算机安装有 Google Chrome 等第三方浏览器，则可以配合 Internet Explorer 使用，做到随时可以在正常浏览与 TruePrivate 之间切换。但此方法对 Google Chrome 并不适用，似乎 Chrome 将部分重要的网页本地数据保存在了除浏览器缓存目录外的其它路径，即使修改临时文件路径也不能做到无痕浏览。</span></span></span>