---
title: Linux 下 Sublime Text 2/3 破解
tags:
  - Code Editor
  - Sublime Text
  - 破解
  - 编辑器
id: 99
categories:
  - 应用软件
date: 2013-02-27 12:37:53
---

> 怎么总有人说没用？Sublime Text 3 我自己也在用，而且是经常更新的 dev 版，每次的更新我都跟进，从来没遇到过不能用的情况。**请先自己找原因！**

[

![SublimeText2-1](http://bcs.duapp.com/sinosky-blog/2013/02/26/SublimeText2-1.png)](http://bcs.duapp.com/sinosky-blog/2013/02/26/SublimeText2-1.png "Linux 下 Sublime Text 2/3 破解")

Sublime Text —— 一个记事本类似物，俗称代码神器的东西。

Sublime Text 2/3 已经对 Linux、Windows、Mac OS  提供了版本支持。界面美观大方，用户习惯良好。只是——授权有点贵$50 而已。其实它的未注册版本就可以无限期免费使用全部功能（Sublime Text 3 只提供给付费用户，且价格涨到了$70），但是标题栏上的 Unregisited 不好看，另外还会偶尔弹出来注册提示，因此对其改造和破解就要开始了。

&nbsp;

注意：此方法仅适用于 3056 及以下版本，3057 及以上版本暂未找到破解方法。

嫌更新提示烦的，请在配置文件中加入 `"update_check": false`。

&nbsp;

1\. 首先去[官网](http://www.sublimetext.com/)下载 Sublime Text 2/3 最新版并安装。

2\. 用 vim 打开 /opt/sublime_text/sublime_text。

<pre class="lang:shell " >
sudo vim /opt/sublime_text/sublime_text
</pre>

3\. 将文件转成十六进制形式。在 vim 中输入：

<pre class="lang:shell " >
:%!xxd
</pre>

4\. 查找数字串 “4333 3342 3032”。

<pre class="lang:shell " >
/4333 3342 3032
</pre>

[![2](http://bcs.duapp.com/sinosky-blog/2013/02/26/22.png)](http://bcs.duapp.com/sinosky-blog/2013/02/26/22.png "2")

将其中的 3342 改为 3242。

5\. 将文件转换回去。

<pre class="lang:shell " >
:%!xxd -r
</pre>

6\. 保存文件，退出。

<pre class="lang:shell " >
:wq
</pre>

7\. 运行程序，输入算出的 Licence，大功告成。

[![1](http://bcs.duapp.com/sinosky-blog/2013/02/26/11.png)](http://bcs.duapp.com/sinosky-blog/2013/02/26/11.png "1")

&nbsp;

&nbsp;

附：算好的 Licence

<pre crayon="false" style="text-align:center;">
—–BEGIN LICENSE—–
Jat
Unlimited User License
EA7E-4656
D6B5CE42CFFD356FD6F782BE4D8D6E9A
F2DD8A265E67DD14C9B6627E9103E290
16FEB67F9DBE65D8434A31D2352A9C80
D7DDCC7BCCCA381D521F5DF49B0F7E5C
5A1B8F4ADE30EF20BEF4020B4D899AE4
60FE1355D8A8B71FE7350B52B4D88969
F42E6248426E64B6BB85A1217AFB7F04
51432FBA46AA531550D638910BAD6FE3
—–END LICENSE—–

—–BEGIN LICENSE—–
SinoSky
Unlimited User License
EA7E-17525
C14974DF6829CA02CA9C0D9D53ED6D17
0B753302A37BA6997616AC6A88FF69C8
E62B834C8250634C2A7E5E5D0BE3A284
756FD4E2B4FEAC1775868B78E8ACC70C
F7AA16FF7894A0E3F6B1DBCA940D20A6
3C86FC4CB4EFE4B55FC65846AB8C129F
EF9EBEA0476ECAD25CDE43FB6EB3F211
497120783280FAE7DFA8CEAB405EFECD
—–END LICENSE—–
</pre>