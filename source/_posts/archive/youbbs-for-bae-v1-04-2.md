---
title: YouBBS for BAE v1.04.2 发布
tags:
  - BAE
  - BCS
  - youBBS
  - 云平台
  - 百度
id: 149
categories:
  - 云平台
date: 2013-03-12 13:58:01
---

本版本主要是修复 bug，没有功能性的升级。

&nbsp;

Changelog:

1\. 升级  jquery

2\. 由于 jquery.lazyload 有时会加载不出来，导致图片变空白，所以去掉了

3\. 添加腾讯、新浪微博图片的识别

4\. 修复其他 bug，详见 [https://github.com/sinosky/youbbs/commits/v1.04.2](https://github.com/sinosky/youbbs/commits/v1.04.2)

&nbsp;

你要做的：

1\. 升级完成后进入 网站设置，把 其他设置 中的  调用jquery库地址 改为 /static/js/jquery-1.9.1.min.js

2\. 升级完成后帖子中的图片可能不会显示，重新保存下就好了（不用修改任何内容，重新保存下即可）

&nbsp;

下载地址：

[本地下载](http://bcs.duapp.com/sinosky-drive/2013/03/12/ff07687b6a09ebaa5fb0323eb5d084d7.zip) | [Github](https://github.com/sinosky/youbbs/archive/v1.04.2.zip)

&nbsp;

本来还想把伪静态改成 node-1-1.html  topic-1-1.html member-1.html 等的形式，**可能**对搜索引擎更友好些，但由于太麻烦了就懒得改了……

如果你需要此功能，请在下面留言，我会在下个版本加入；如果没人需要那我就不改了，本人很懒的……