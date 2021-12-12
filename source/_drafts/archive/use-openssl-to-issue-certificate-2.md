---
title: 使用 OpenSSL 颁发企业级证书（二）
id: 994
categories:
  - 教程
tags:
---

自从上个月把服务器的系统更新到 Ubuntu 14.04 后，就出现了一个奇怪的 bug：使用 nfs 同步的文件只要一出现冲突，nfs 服务端就会死机。因为搜索不到类似的情况，再加上死机后没有任何日志留下，所以一直没找到原因。直到最近才发现有人报告这个 [bug](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1318116)，更新 kernel 到最新版果然解决了（只测试了 3.15，建议在 3.13 修复此 bug 后删除）。