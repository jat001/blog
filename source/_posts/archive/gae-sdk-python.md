---
title: 开始Google App Engine之前——GAE SDK教学之Python篇
tags:
  - GAE
  - Google App Engine
  - Python
  - 教程
id: 233
categories:
  - 云平台
date: 2012-07-18 19:12:35
---

<span>虽然Google已经尽可能使GAE的安装和运行变得简单，但是仍有很多人不会使用，而网络上的教程也早已过时，所以我在这里简单介绍一下GAE SDK的使用方法。本文以Windows为例，我想会用Linux和Mac OS的人也不用看我的教程。</span>

Google App Engine 只支持Python、Java和Go，这篇教程我要介绍的是Google App Engine SDK for Python的使用方法。

&nbsp;

1\.  首先，先从Python官网下载[Windows版本](http://www.python.org/getit/) （[x86](http://www.python.org/ftp/python/2.7.3/python-2.7.3.msi) [x64](http://www.python.org/ftp/python/2.7.3/python-2.7.3.amd64.msi)），关于Python2与3的区别，详见[http://wiki.python.org/moin/Python2orPython3](http://wiki.python.org/moin/Python2orPython3)，如果你是在GAE是运行Python程序，请使用Python2。安装过程很简单，一路next就行，安装完后进入cmd，输入 python ，应该会出现如下图的提示。

[![cmd python](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:%2FJ1lJIwjVGdI7x4YVheWpo4u3Ws%3D)](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:%2FJ1lJIwjVGdI7x4YVheWpo4u3Ws%3D)

    2\.  如果python命令提示无效命令，那么有可能是系统无法找到相关文件，你可以将Python的安装路径加入到系统的path中，注意多个值之间用英文的分号隔开。（右键计算机-属性-高级系统设置-环境变量）

[![path](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%281%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:J4ckBfRf3VduRBfP%2FaBKwwPxOd0%3D)](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%281%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:J4ckBfRf3VduRBfP%2FaBKwwPxOd0%3D)

    3\.  下载[Google App Engine SDK for Python](https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python)并安装，依旧是一路next，如果安装程序没有自动把安装路径加入到path中，请手动加入。

4\.  Google App Engine Launcher的功能很简单，如图所示

[![gae-launcher](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%282%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:3f%2BXqxF0YUdnhXudTR2QbHXcwX4%3D)](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%282%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:3f%2BXqxF0YUdnhXudTR2QbHXcwX4%3D)

    5\.  设置Google App Engine Launcher（Edit-Preferences），在 Python Path 中填入python的安装路径，在 Editor 中填入文本编辑器的安装路径（可以是系统自带的记事本）。

[![preferences](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%283%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:yVW51sMhoS%2BDjviSebX5lT0%2FjTI%3D)](http://bcs.duapp.com/sinosky-blog/%E4%B8%8B%E8%BD%BD%20%283%29.png?sign=MBO:6211E45FB2cecd920861f9301f75360b:yVW51sMhoS%2BDjviSebX5lT0%2FjTI%3D)

    6\.  添加应用 （File-Add Existing Application）并运行测试

&nbsp;

Google App Engine SDK for Python 的教程就告一段落了，如果你想在GAE上运行Java程序，那么一定不要错过Google App Engine SDK for Java的教程： [开始Google App Engine之前——GAE SDK教学之Java篇](http://www.sinosky.tk/gae-sdk-java.html) 。

&nbsp;