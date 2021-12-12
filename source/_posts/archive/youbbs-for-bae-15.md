---
title: YouBBS for BAE v1.5 正式发布
tags:
  - BAE
  - Github
  - PHP
  - youBBS
  - 云平台
id: 153
categories:
  - 云平台
date: 2013-04-15 14:03:25
---

YouBBS for BAE 不只是原版的移植，以后也不会根据原版更新。原版未实现的功能可能这个版本有，原版有的东西这个版本可能永远不会有。我不喜欢折腾前端，所以新主题什么的就别找我了。

对了，本人有拖延症，小 bug 修复会很快修复，功能性更新可能会拖很久。

&nbsp;

Changelog：

1\. 修复了由于 BAE 更新导致验证码不能显示的 bug。

2\. 当页面内容过少的时候，页脚固定在底部。

3\. 增加了返回顶部按钮。

4\. 对乱七八糟的目录结构进行了重构。

5\. 增加 sitemap。

6\. 增加网站二级标题和 keywords。

7\. 伪静态更改为 xxxx-id-page.html 的形式。

8\. 修复了管理员设置用户头像的 bug。

9\. 401、403、404及505错误跳转到相应静态网页，方便自定义。

10\. 其他细节修改及 bug 修复。

&nbsp;

下载地址：

[本地下载](http://bcs.duapp.com/sinosky-drive/2013/04/15/2402526db878b4af8240be18e1111de2.zip) | [GitHub](https://github.com/sinosky/youbbs/archive/v1.5.zip)

&nbsp;

你要做的：

1\. 此版本改动较大，十分建议删除原有代码后重新部署，不建议直接覆盖。

2\. 修改 网站设置 - QQ登录设置 - scope 为 get_info。

3\. 修改 网站设置 &#8211; 其它设置 - 调用jquery库地址 为 /static/default/jquery-1.9.1.min.js。

4\. 进入 BAE 后台 - MySQL(云数据库) - phpMyadmin &#8211; SQl，执行下列 SQL 语句：

<pre class="lang:mysql " >

INSERT INTO yunbbs_settings VALUES('keywords', '');
INSERT INTO yunbbs_settings VALUES('description', '');

</pre>

关于 bug 反馈：

正确的做法是在 [GitHub](https://github.com/) 上的[项目主页](https://github.com/sinosky/youbbs)提交[ issues](https://github.com/sinosky/youbbs/issues)，你在其他地方反馈 bug 我有可能会忘记。