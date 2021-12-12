---
title: 使用自定义 OpenSSL 库编译 nginx
tags:
  - Nginx
  - OpenSSL
  - 小技巧
id: 406
categories:
  - Linux
date: 2013-10-03 01:27:57
---

编译安装 nginx 时，默认使用系统自带的 OpenSSL 库，但其一般很老，不支持如 SDPY 等新功能。`--with-openssl` 参数虽然可以指定 OpenSSL 路径，但只支持 OpenSSL 的源代码，不支持已编译好的 OpenSSL。每回更新 nginx 都要重新编译 OpenSSL 肯定很麻烦，于是经过一番搜索后，从 [nginx forum](http://forum.nginx.org/read.php?2,198369,198372) 找到了解决方案。

&nbsp;

修改 `auto/lib/openssl/conf` 大约第 31 行至 35 行，把

<pre class="lang:shell" >
CORE_INCS="$CORE_INCS $OPENSSL/.openssl/include"
CORE_DEPS="$CORE_DEPS $OPENSSL/.openssl/include/openssl/ssl.h"
CORE_LIBS="$CORE_LIBS $OPENSSL/.openssl/lib/libssl.a"
CORE_LIBS="$CORE_LIBS $OPENSSL/.openssl/lib/libcrypto.a"
</pre>

改为

<pre class="lang:shell" >
CORE_INCS="$CORE_INCS $OPENSSL/include"
CORE_DEPS="$CORE_DEPS $OPENSSL/include/openssl/ssl.h"
CORE_LIBS="$CORE_LIBS $OPENSSL/lib/libssl.a"
CORE_LIBS="$CORE_LIBS $OPENSSL/lib/libcrypto.a"
</pre>

&nbsp;

这样，我们就可以在编译安装 nginx 时，手动指定已编译好的 OpenSSL 了，比如 `--with-openssl=/usr/local/openssl`。