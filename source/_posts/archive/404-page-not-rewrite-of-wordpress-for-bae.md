---
title: 实现 WordPress for BAE 的404页面在原 URL 输出
tags:
  - BAE
  - wordpress
  - 云平台
  - 小技巧
  - 教程
  - 百度
id: 205
categories:
  - WordPress
date: 2013-04-22 17:14:16
---

先吐槽一下：我说现在站长这个称呼怎么越来越不值钱了，在各种简易建站程序满天飞的年代，是个人都能建个网站，各种伸手党更是遍地都是，搜索引擎就能解决的事，非得问别人。

&nbsp;

在实现 YouBBS for BAE [Issue 11](https://github.com/sinosky/youbbs/issues/11) 的时候，我发现 BAE 配置文件中的 `errordoc` 无论指向静态文件还是动态文件，都会跳转，对用户体验不太好，在反复测试后，终于找到了解决办法，不太好，但管用。

解决方法很简单，删掉

```
- errordoc : 404 error/404.html
```

在最后加入

<pre class="lang:yaml " >
- url : ^/.+$
  script : wp-content/themes/inove/404.php
</pre>

这里的 `wp-content/themes/inove/404.php` 只是个示例，至于怎么写那是你的事了，但至少应该有

<pre class="lang:php " >
header('HTTP/1.1 404 Not Found');
header('Status: 404 Not Found');
</pre>

最后附上我的 `app.conf` 供参考

<pre class="lang:yaml " >
handlers:
  - errordoc : 403 static/error/403.html
  - errordoc : 500 static/error/500.html

  - expire : .jpg modify 10 years
  - expire : .swf modify 10 years
  - expire : .png modify 10 years
  - expire : .gif modify 10 years
  - expire : .JPG modify 10 years
  - expire : .ico modify 10 years
  - expire : .js modify 10 years
  - expire : .css modify 10 years

  - url : ^/favicon\.ico$
    script : static/favicon.ico
  - url : ^/robots\.txt$
    script : static/robots.txt
  - url : ^/sitemap\.xml$
    script : sitemap.xml
  - url : ^/sitemap_baidu\.xml$
    script : sitemap_baidu.xml
  - url : ^/sitemap\.html$
    script : sitemap.html
  - url : ^/sitemap\.xml\.gz$
    script : sitemap.xml.gz
  - url : ^/error/(.+)$
    script : error/$1
  - url : ^/static/(.+)$
    script : static/$1
  - url : ^/wp\-admin/$
    script : wp-admin/index.php
  - url : ^/wp\-admin/(.+)$
    script : wp-admin/$1
  - url : ^/wp\-content/(.+)$
    script : wp-content/$1
  - url : ^/wp\-includes/(.+)$
    script : wp-includes/$1
  - url : ^/\d\d\d\d/\d\d$
    script : index.php
  - url : ^/\d\d\d\d/\d\d/feed$
    script : index.php
  - url : ^/\d\d\d\d/\d\d/page/\d+$
    script : index.php
  - url : ^/category/.+$
    script : index.php
  - url : ^/tag/.+$
    script : index.php
  - url : ^/page/\d+$
    script : index.php
  - url : ^/author/.+$
    script : index.php
  - url : ^/about$
    script : index.php
  - url : ^/about/feed$
    script : index.php
  - url : ^/feed$
    script : index.php
  - url : ^/comments/feed$
    script : index.php
  - url : ^/.+\.html$
    script : index.php
  - url : ^/.+\-.+\.html/feed$
    script : index.php
  - url : ^/.+\-.+\.html/trackback$
    script : index.php
  - url : ^/$
    script : index.php
  - url : ^/(.+)\.php$
    script : $1.php
  - url : ^/.+$
    script : wp-content/themes/inove/404.php
</pre>

至于 403 和 500 为什么没这么做，我没有找到 WordPress 中有返回 403 的地方，而 500 是服务器错误，你想想服务器都出问题了，还怎么执行 php 文件？

&nbsp;

越来越讨厌 WordPress 的编辑器了……