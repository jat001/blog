---
title: ' YouBBS for BAE v1.6 发布'
tags:
  - BAE
  - Baidu App Engine
  - PHP
  - youBBS
  - 云平台
  - 百度
id: 117
categories:
  - 云平台
date: 2013-07-29 13:12:33
---

**更新日志**：

1.  重构了部分代码

2.  修复了一些 bug

3.  新增 [置顶](http://bbs.sinosky.org/topic-58-1.html) 功能
4.  新增 [隐藏帖子](http://bbs.sinosky.org/topic-56-1.html) 功能
5.  新增 [隐藏节点](http://bbs.sinosky.org/topic-57-1.html) 功能
6.  修改了 [热门节点和节点导航](http://bbs.sinosky.org/topic-59-1.html) 的显示方式

&nbsp;

**升级说明**：

1.  不要跨版本升级，v1.5.1 以前的版本请在覆盖文件后参照各版本的发布日志操作，或重新部署
2.  从 v1.5.1 升级至 v1.6 需执行下列 SQL 语句
<pre class="lang:mysql " >
UPDATE yunbbs_settings SET value = '/static/default/jquery-2.0.3.min.js' WHERE title = 'jquery_lib';
ALTER TABLE yunbbs_articles ADD top tinyint(1) NOT NULL default '0';
INSERT INTO yunbbs_settings VALUES('hide_nodes', '');
</pre>

&nbsp;

**下载地址**：

[本地下载](http://bcs.duapp.com/sinosky-drive/2013/youbbs-bae-v1.6.zip) | [GitHub](https://github.com/sinosky/youbbs/archive/v1.6.zip)

&nbsp;

<span style="color: red;">注意</span>：请访问 /install 安装，而不是 /install.php。