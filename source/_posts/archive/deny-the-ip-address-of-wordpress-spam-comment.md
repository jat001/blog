---
title: 屏蔽 WordPress 垃圾评论的 IP
tags:
  - IP
  - Nginx
  - PHP
  - spam
  - spam comment
  - wordpress
  - 垃圾评论
  - 屏蔽 IP
id: 329
categories:
  - WordPress
date: 2013-09-17 17:53:17
---

自从[强制启用 https](https://www.sinosky.org/ssl-and-spdy-enabled.html) 和限制 UserAgent 后，垃圾评论就少了很多，但还是有，于是写了个脚本自动取出并屏蔽 WordPress 中被标记为垃圾评论的 IP。

我总是喜欢把简单的事情复杂化，所以就有了下面这个奇怪的脚本，可能有 bug。

其实 PHP 做这种事不方便，有空再写个 shell 的，扔 cron 自动执行。

&nbsp;

<script src="https://gist.github.com/jat001/6592184.js"></script>