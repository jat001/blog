---
title: WordPress 伪静态 for BAE
tags:
  - BAE
  - wordpress
  - 伪静态
id: 139
categories:
  - 小技巧
date: 2013-01-08 13:43:51
---

BAE 上关于 app.conf 的文档太少了，伪静态功能也太弱了，而且还不能区分真静态与伪静态，如果不把所有的文件都考虑到就会出错。

下面是我自己写的规则，基本上考虑到了常见的情况，包括 WordPress 里原有的文件，所有主题、插件以及 Sitemap、robots。

<pre class="lang:yaml ">
handlers:

  - url : /favicon.ico$

    script : favicon.ico

  - url : /wp-admin/(.*)

    script : wp-admin/$1

  - url : /wp-content/(.*)

    script : wp-content/$1

  - url : /wp-includes/(.*)

    script : wp-includes/$1

  - url : /sitemap.html$

    script : sitemap.html

  - url : /sitemap.xml.gz$

    script : sitemap.xml.gz

  - url : (.*).xml$

    script : $1.xml

  - url : (.*).php$

    script : $1.php

  - url : (.*)

    script : index.php
</pre>

P.S：BAE 可以在根目录下写文件