---
title: pcntl_fork 引起的奇怪 bug
tags:
  - fork
  - Linux
  - pcntl_fork
  - PHP
  - redis
  - unix
id: 1041
categories:
  - 程序员
date: 2015-01-12 17:41:37
---

最近随手写了个[获取软件最新版本号的程序](https://github.com/jat001/auto-upgrade-scripts)，但是在处理多进程并发的时候遇到了问题。我想在用户请求的时，输出已经保存的版本号，同时异步抓取最新的版本号。

数据存储用的 redis，在父进程中，与 redis 的通讯没有任何问题，但是在子进程中，与 redis 的通讯就会出现问题，会报类似 `PHP Notice:  Redis::setex(): send of 47 bytes failed with errno=32 Broken pipe in /data/root/api/lib/db.php on line 44` 的错误。

搜索后发现，有人遇到了同样的 bug（[http://stackoverflow.com/questions/23713480/after-php-upgrade-pcntl-fork-causing-errno-32-broken-pipe](http://stackoverflow.com/questions/23713480/after-php-upgrade-pcntl-fork-causing-errno-32-broken-pipe) [https://github.com/phpredis/phpredis/issues/474](https://github.com/phpredis/phpredis/issues/474)），他测试了与 mysql 的通讯，在子进程中并没有问题，怀疑是 redis 的 bug。

既然是子进程的通讯出现了问题，那么在 `pcntl_fork` 前关闭连接（只有父进程）、在 `pcntl_fork` 之后关闭连接（父进程和子进程）是否可行呢？测试后发现，果然没再报错，第一个问题解决。

&nbsp;

在 php-fpm 中，默认情况下（php-fpm.ini 的默认设置），一个进程（包括 `pcntl_fork` 产生的子进程）会处理多个请求，所以即使用 `exit` 结束了脚本，进程也不会退出，`pcntl_wait` 和 `pcntl_waitpid` 自然也没用了，只能用 `posix_kill(posix_getpid(), SIGTERM);` 结束掉当前进程（相当与不带参数的 `kill` 命令，`kill` 命令默认发送 SIGTERM 信号）。

虽然子进程结束后，`pcntl_wait` 和 `pcntl_waitpid` 都能正常工作，但这两个函数实际上阻塞了父进程，没有起到异步的作用。如果不用这两个函数，当子进程结束时，由于父进程没有回收子进程，导致子进程成为僵尸（defunct）进程，导致系统资源被长时间占用。而且这些进程也不能被 `kill` 命令结束，只有重启 php-fpm，也就是结束父进程。

要想使父进程不等待子进程，可以通过 `pcntl_signal(SIGCLD, SIG_IGN);` 或 `pcntl_signal(SIGCHLD, SIG_IGN);`（SIGCLD 和 SIGCHLD 都是子进程状态变更的信号，在大部分系统中作用相同；SIG_IGN 忽略该信号）告诉系统：父进程不关心子进程的结束，当子进程结束时，会由 init 进程来回收。

提示：`pcntl_signal` 是针对父进程设置的，所以在重现这个 bug 时记得重启 php-fpm。

&nbsp;

[相关代码](https://github.com/jat001/auto-upgrade-scripts/blob/master/server/lib/db.php#L65)

&nbsp;

果然像咱这种野生码农，平时实现下需求、做做增删查改没问题，但遇到比较底层的问题就歇菜了。工作中用到的技术都比较常见，也比较保守，要想真正学点东西，还是得靠自己（感谢 Google）。