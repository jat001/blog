---
title: 开始Google App Engine之前——GAE SDK教学之Java篇
tags:
  - GAE
  - Google App Engine
  - Java
  - 教程
id: 231
categories:
  - 云平台
date: 2012-07-18 19:11:34
---

虽然Google已经尽可能使GAE的安装和运行变得简单，但是仍有很多人不会使用，而网络上的教程也早已过时，所以我在这里简单介绍一下GAE SDK的使用方法。本文以Windows为例，我想会用Linux和Mac OS的人也不用看我的教程。

Google App Engine 只支持Python、Java和Go，这篇教程我要介绍的是Google App Engine SDK for Java的使用方法。

1\.  首先，从oracle官网下载[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) （[x86](http://download.oracle.com/otn-pub/java/jdk/7u5-b05/jdk-7u5-windows-i586.exe) [x64](http://download.oracle.com/otn-pub/java/jdk/7u5-b05/jdk-7u5-windows-x64.exe)）并安装

2\.  下载[Google App Engine SDK for Java](https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Java)，解压到任意位置，注意路径中不要有空格

3\.  本地测试，Google App Engine SDK for Java没有图形界面，只能使用命令提示符。在cmd中进入Google App Engine SDK for Java的bin目录，运行： dev_appserver.cmd 应用目录 ，注意路径不能有空格，待启动完毕后在浏览器中访问 [http://localhost:8080/](http://localhost:8080/)

4\.  部署，在cmd中进入Google App Engine SDK for Java的bin目录，运行： appcfg.cmd update 应用目录

Google App Engine SDK for Java 的教程就告一段落了，如果你想在GAE上运行Python程序，那么一定不要错过Google App Engine SDK for Python的教程： [开始Google App Engine之前——GAE SDK教学之Python篇](http://www.sinosky.tk/gae-sdk-python.html) 。