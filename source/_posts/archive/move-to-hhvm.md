---
title: 迁移到 HHVM
tags:
  - Facebook
  - HHVM
  - PHP
id: 1063
categories:
  - 应用软件
date: 2015-01-23 23:32:34
---

今天又没什么事干，正好折腾下 Facebook 的 HHVM。关于 HHVM 是如何提升 PHP 性能的，有篇文章写得不错，搜索下就能找到。

编译过程没什么坑，照官方 wiki 安装好依赖就行，默认是安装到 `/usr/local/hhvm`，如果不想安装到这里，可以在 cmake 的时候添加 `-DCMAKE_INSTALL_PREFIX` 参数，除此之外好像没什么有用的编译参数。`make` 的 -j 参数是给多核并行编译用的，后面几个数字代表同时编译的任务数，不带数字代表不限制，CPU 核心多可以不限制，不过大部分普通站长的 VPS 都是单核的，最好不要加。

HHVM 的 FastCGI 跟 PHP-FPM 的基本一致，如果是 nginx 改下 `fastcgi_pass` 就可以了。HHVM 还兼容 php.ini，所以运行参数也基本不用更改，不过要注意的是，当使用 `open_basedir` 时，HHVM 会报 `RequestInitDocument Not Found` 错误，原因没有查到。

<pre class="lang:default">
hhvm.jit = true

hhvm.log.always_log_unhandled_exceptions = true
hhvm.log.file = /data/log/php/hhvm.log
hhvm.log.header = true
hhvm.log.level = info
hhvm.log.max_messages_per_request = -1
hhvm.log.native_stack_trace = true
hhvm.log.no_silencer = true
hhvm.log.runtime_error_reporting_level = 22527
hhvm.log.use_log_file = true

hhvm.pid_file = /var/run/hhvm.pid

hhvm.repo.central.path = /data/tmp/.hhvm.hhbc

hhvm.server.file_socket = /tmp/hhvm.sock
hhvm.server.type = fastcgi
</pre> 

上面的参数在官方 wiki 中 Runtime options 都有提到，我也懒得写了。
`hhvm.log.runtime_error_reporting_level` 是用的 php.ini 的默认设置，`E_ALL & ~E_DEPRECATED & ~E_STRICT`，`32767 - 8192 - 2048 = 22527`，对应的数值可以看[这里](http://cn2.php.net/manual/en/errorfunc.constants.php)（不要看中文文档，没更新）。
缓存文件默认在 `~/.hhvm.hhbc`，使用 `hhvm.repo.central.path` 配置路径。
socket 文件的默认权限是 600，启动后记得改下，[这里](https://github.com/jat001/startup-script/blob/master/hhvm)有个启动脚本。

对于我这种小网站，HHVM 的作用并不明显，测试了下，在不开缓存插件的情况下，打开 wordpress 首页快了大约 300ms。不过 HHVM 的稳定性有很大问题，HHVM 不支持 Zend Framework，当跑基于 Zend Framework 框架的网站时竟然整个进程都 crashed 了。所以在迁移前一定要仔细测试下 HHVM 是否支持当前程序 。