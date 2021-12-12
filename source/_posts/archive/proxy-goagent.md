---
title: 科学上网的利器——GoAgent
tags:
  - GAE
  - GoAgent
  - 代理
  - 科学上网
id: 263
categories:
  - 应用软件
date: 2012-05-18 19:31:03
---

因为GFW的原因很多国内的用户都不能正常访问Google Twitter Facebook等国外网站，而要想访问这些网站，我们不得不借用自由门 vpn等代理访问，而GoAgent则是一个基于Google App Engine的完全免费 开源的代理程序。

&nbsp;

**简易教程：**

如何部署和使用goagent，以Windows为例：

1.申请Google Appengine并创建appid，地址：[http://appengine.google.com/](http://appengine.google.com/)

2.下载goagent最新版 [http://goo.gl/pTt0W](http://goo.gl/pTt0W)

3.修改local\proxy.ini中的[gae]下的appid=你的appid(多appid请用|隔开)

4.双击server\uploader.bat，上传成功后即可使用了(地址127.0.0.1:8087)

5.chrome请安装SwitchySharp（[https://chrome.google.com/webstore/detail/dpplabbmogkhghncfbfdeeokoefdjegm](https://chrome.google.com/webstore/detail/dpplabbmogkhghncfbfdeeokoefdjegm)）插件，然后导入这个设置[http://goagent.googlecode.com/files/SwitchyOptions.bak](http://goagent.googlecode.com/files/SwitchyOptions.bak)

6.firefox请安装FoxyProxy（[https://addons.mozilla.org/zh-cn/firefox/addon/foxyproxy-standard/](https://addons.mozilla.org/zh-cn/firefox/addon/foxyproxy-standard/)），Firefox需要导入证书

&nbsp;

**下载地址：**

官方给出的下载地址已经被墙，请使用此地址下载：[https://github.com/phus/goagent/zipball/master](https://github.com/phus/goagent/zipball/master)

我已经在压缩包内的proxy.ini文件中填入了自用的appid，双击local\goagent.exe并把IE代理设置成127.0.0.1:8087即可使用了（其他浏览器请参考上面的简易教程），不过我还是十分建议你申请自己的appid

&nbsp;

有问题或想要更多详细资料，请留言或参考[https://code.google.com/p/goagent/](https://code.google.com/p/goagent/)