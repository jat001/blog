---
title: 百度 BAE 系列教程之部署 YouBBS 篇
tags:
  - BAE
  - youBBS
  - 教程
  - 百度
id: 273
categories:
  - 云平台
date: 2012-12-18 19:39:01
---

<span style="font-size: small;">本来第3篇系列教程想写部署 B3log Solo 的，但是搞了半天始终没有部署成功。感谢 [@88250](http://88250.b3log.org/) 的耐心解答，虽然问题依旧没有解决。</span>

<span style="font-size: small;">目前 BAE 还不成熟，基于 BAE 的开源程序还不多，本文将介绍的是我找到的唯一一个支持 BAE 的开源论坛程序—— youBBS。</span>

<span style="font-size: small;">在阅读本文之前，请确定您已经在 BAE 上创建了第一个应用，否则请先阅读 [百度 BAE 系列教程之申请篇](http://www.sinosky.org/bae-apply.html) 。如果您还不会使用 SVN ，请先阅读 [百度 BAE 系列教程之SVN篇](http://www.sinosky.org/bae-svn.html) 。</span>

#### <span style="font-size: small;">关于 youbbs 及下载</span>

<span style="font-size: small;">youbbs的意思：又一个bbs（轮子）、you bbs……</span>

<span style="font-size: small;">youbbs开发的动机：传统论坛功能越来越多，越来越臃肿，而对于一些小站长只需要一些简单的功能；</span>

<span style="font-size: small;">youbbs特点：界面简洁优美、功能简洁实用、性能高效、代码简洁安全；</span>

<span style="font-size: small;">youbbs运行平台：标准php+mysql平台，目前已成功移植到SAE、新浪云空间、BAE、AppFog。</span>

<span style="font-size: small;">官方论坛：[http://youbbs.sinaapp.com](http://youbbs.sinaapp.com)</span>

<span style="font-size: small;">下载地址：[https://code.google.com/p/youbbs/downloads](https://code.google.com/p/youbbs/downloads)</span>

#### <span style="font-size: small;">部署前的配置</span>

<span style="font-size: small;">1\. 首先我们要创建一个PHP应用。</span>

<span style="font-size: small;">[![创建应用](//www.sinosky.org/uploads/2012/snap006.png)](//www.sinosky.org/uploads/2012/snap006.png "创建应用")</span>

<span style="font-size: small;">2\. 创建一个数据库。</span>

<span style="font-size: small;">[![创建数据库](//www.sinosky.org/uploads/2012/snap007.png)](//www.sinosky.org/uploads/2012/snap007.png "创建数据库")</span>

<span style="font-size: small;">3\. 进入 管理中心 &#8211; 我的云服务(BAE) ，选择 云存储 下的 我的Bucket ，新建一个 Bucket 。Bucket 的名字可以随意填写，配额请根据实际情况调节，当然以后也可以调节配额。</span>

<span style="font-size: small;">[![云存储](//www.sinosky.org/uploads/2012/snap008.png)](//www.sinosky.org/uploads/2012/snap008.png "云存储")</span>

<span style="font-size: small;">4\. 把下载好的程序解压，修改 conf.inc.php 第6行和第8行的 AK 、SK为自己的。修改第14行的bucket名称为上一步中所建的。</span>

<span style="font-size: small;">[![conf.inc.php](//www.sinosky.org/uploads/2012/snap012.png)](//www.sinosky.org/uploads/2012/snap012.png "conf.inc.php")</span>

<span style="font-size: small;">Access Key (AK) 和 Secure Key(SK) 可以在 管理中心 &#8211; 我的密钥 中找到。可以使用原有的，也可以创建新的。</span>

<span style="font-size: small;">[![密钥](//www.sinosky.org/uploads/2012/snap010.png)](//www.sinosky.org/uploads/2012/snap010.png "密钥")</span>

<span style="font-size: small;">5\.  修改 config.php 第10行 http://bcs.duapp.com/ 后面的内容为第3步中所建的bucket名称。修改数据库名为自己的。

</span>

<span style="font-size: small;">[![config.php](//www.sinosky.org/uploads/2012/snap013.png)](//www.sinosky.org/uploads/2012/snap013.png "config.php")</span>

<span style="font-size: small;">数据库名可以在应用管理中的 云环境管理 &#8211; 服务管理 &#8211; 云数据库 中找到。</span>

<span style="font-size: small;">[![云数据库](//www.sinosky.org/uploads/2012/snap014.png)](//www.sinosky.org/uploads/2012/snap014.png "云数据库")</span>

#### <span style="font-size: small;">部署</span>

<span style="font-size: small;">1\. 在 云环境管理 &#8211; 托管管理 &#8211; 版本管理 中创建一个新版本并上线。你可以把修改好的程序打包上传，也可以使用SVN上传，前面的教程已经很详细了，这里不再赘述。</span>

<span style="font-size: small;">[![上线版本](//www.sinosky.org/uploads/2012/snap015.png)](//www.sinosky.org/uploads/2012/snap015.png "上线版本")</span>

<span style="font-size: small;">2\. 访问 你的域名/install.php 完成初始化</span>

<span style="font-size: small;">初始化完成后你就能看到论坛的主页了，默认第一个注册的用户为管理员。页面右边是管理员面板，里面的设置都有详细的说明。</span>

<span style="font-size: small;">[![论坛设置](//www.sinosky.org/uploads/2012/snap017.png)](//www.sinosky.org/uploads/2012/snap017.png "论坛设置")</span>

<span style="font-size: small;">至此，部署 youBBS 的教程就结束了，如果顺利的话，下一篇教程应该是部署 B3log Solo ，敬请关注。</span>