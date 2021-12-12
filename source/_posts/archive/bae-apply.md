---
title: 百度 BAE 系列教程之申请篇
tags:
  - BAE
  - 云平台
  - 教程
  - 百度
id: 271
categories:
  - 云平台
date: 2012-12-18 19:37:37
---

<span style="font-size: small;">随着国内云概念的兴起，各种各样的 xAE 也开始出现，从第一个吃螃蟹的 SAE 到 盛大云 、 阿里云，再到国内搜索引擎老大——百度推出的 BAE，国内的云市场可谓是鱼龙混杂。随着 SAE 的成熟，早先免费的 SAE 现在已经开始收费，而 盛大云 与 阿里云 则根本就没打算免费，目前国内唯一真正免费的云平台就是 BAE 了。</span>

<span style="font-size: small;">现在网络上关于 BAE 的教程还不多，所以我决定写几篇关于 BAE 的系列教程，主要是面向刚接触云平台的初学者。如果您是开发者或者能熟练使用各种云平台，那么请无视这些文章。如果您信不过国内的云平台而想找个国外的云平台的话，不妨看看我以前写的关于[国外云平台的推荐](http://www.sinosky.org/paas.html)。</span>

<span style="font-size: small;">[![百度云](//www.sinosky.org/uploads/2012/baidu%20yun%20logo.jpg)](//www.sinosky.org/uploads/2012/baidu%20yun%20logo.jpg "百度云")</span>

<span style="font-size: small;">目前 BAE 处于公测阶段，需要邀请码才能使用，不过获得邀请码的方式很简单，发送邮件到 [dev_support@baidu.com](mailto:dev_support@baidu.com) 申请即可，格式如下：</span>

> <span style="font-size: small;">标题：申请开放云平台邀请码 </span>
>
> <span style="font-size: small;">内容：</span>
>
> <span style="font-size: small;"> 1.详细描述团队信息</span>
>
> <span style="font-size: small;"> 2.详细描述已发布的产品介绍（暂不对没有线上产品的开发者开放）</span>
>
> <span style="font-size: small;"> 3.申请使用的原因</span>
>
> <span style="font-size: small;"> 另外，请附上您的百度账号</span>

<span style="font-size: small;">说明：</span>

<span style="font-size: small;">1\. 团队信息可以随便填写，最好是真实的，写个人开发者也可以通过。</span>

<span style="font-size: small;">2\. 如果没有没有已发布的产品就随便找个项目（有项目主页的最好），然后说自己参与过这个项目的开发。</span>

<span style="font-size: small;">3\. 原因随便写点什么就行，最好是说“BAE 比 SAE 好，自己想试试”之类的。</span>

<span style="font-size: small;">附上我以前的申请邮件供参考（注：本人小白一个，半行代码都不懂，跟 B3log 团队没有一毛钱关系，邮件内容纯属扯淡）。</span>

<span style="font-size: small;">[![邮件](//www.sinosky.org/uploads/2012/201212140501.png)](//www.sinosky.org/uploads/2012/201212140501.png "邮件")</span>

<span style="font-size: small;">一般发送邮件后第二天就能收到邀请码了，如果是周末请耐心等到下个星期一，人家也要休息嘛。</span>

<span style="font-size: small;">收到邀请码以后，进入[百度开发者中心](http://developer.baidu.com/)，点击 开始使用百度应用引擎 BAE，输入邀请码后完成激活。</span>

<span style="font-size: small;">[![开始使用](//www.sinosky.org/uploads/2012/201212140511.png)](//www.sinosky.org/uploads/2012/201212140511.png "开始使用")</span>

<span style="font-size: small;">激活后你就进入 BAE 的 管理中心 了，这些东西现在我们用不到，先无视吧。</span>

<span style="font-size: small;">[![管理中心](//www.sinosky.org/uploads/2012/snap000.png)](//www.sinosky.org/uploads/2012/snap000.png "管理中心")</span>

<span style="font-size: small;">点击右上方的 创建应用 ，选择 Web应用 ，接入方式为 托管到BAE 。默认只能创建 PHP 应用，如果要使用 Python/Java 环境，继续发邮件申请吧。</span>

<span style="font-size: small;">[![创建应用](//www.sinosky.org/uploads/2012/snap001.png)](//www.sinosky.org/uploads/2012/snap001.png "创建应用")</span>

<span style="font-size: small;">创建好应用后就会进入到应用的管理中心，进入 云环境管理 ，点击 托管管理 中的 版本管理 ，创建一个新的版本。</span>

<span style="font-size: small;">[![创建版本](//www.sinosky.org/uploads/2012/snap002.png)](//www.sinosky.org/uploads/2012/snap002.png "创建版本")</span>

<span style="font-size: small;">接下来就是创建数据库了，点击 服务管理 下的 云数据库 ，选择 创建数据库 。数据库只能创建一个，描述可以随便写，图中我已经创建好了。</span>

<span style="font-size: small;">[![创建数据库](//www.sinosky.org/uploads/2012/snap003.png)](//www.sinosky.org/uploads/2012/snap003.png "创建数据库")</span>

<span style="font-size: small;">如果需要绑定域名的话，只需<span>点击 托管管理 下的 域名绑定 ， 选择 新增绑定 即可。</span></span>

<span style="font-size: small;"><span>[![域名绑定](//www.sinosky.org/uploads/2012/snap004.png)](//www.sinosky.org/uploads/2012/snap004.png "域名绑定")</span></span>

<span style="font-size: small;"><span>在此之前，不要忘了做CNAME解析哦，记录值就是你的百度域名。</span></span>

<span style="font-size: small;">[![CNAME](//www.sinosky.org/uploads/2012/snap005.png)](//www.sinosky.org/uploads/2012/snap005.png "CNAME")</span>

<span style="font-size: small;">至此，我们在 BAE 上的第一个应用就创建好了，接下来就是上传代码了，敬请关注后续教程。</span>