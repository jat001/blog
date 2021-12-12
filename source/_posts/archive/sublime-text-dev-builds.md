---
title: Sublime Text Dev Builds
tags:
  - Sublime Text
  - 汇编
  - 破解
  - 逆向
id: 792
categories:
  - 应用软件
date: 2014-01-01 17:11:39
---

Sublime Text 的 Dev Builds 还算稳定，但只提供给已注册用户使用。通过对已破解文件的逆向，我找到需要修改的地方，详见[这篇文章](/crack-sublime-text-3-build-3059.html)。

&nbsp;

在工具的选择上，OllyDbg 虽然能保存修改后的文件，但只能分析 32 位 Windows 程序；IDA 十分强大，支持 32 位和 64 位的 Windows、OS X 和 Linux 程序，但又不能保存修改后的文件。

其实 IDA 有一个隐藏的 patch program 功能，把配置文件 `cfg\idagui.cfg` 中的 `DISPLAY_PATCH_SUBMENU` 的选项改为 `YES`，就会在 Edit 菜单下多出一个 `Patch Program` 子菜单。

[![crack_sublime_text_1](/uploads/2014/01/crack_sublime_text_1.png)](/uploads/2014/01/crack_sublime_text_1.png)

然后定位到需要修改的地方，使用 `Edit -> Patch Program -> Assemble` 功能修改代码。

[![crack_sublime_text_2](/uploads/2014/01/crack_sublime_text_2.png)](/uploads/2014/01/crack_sublime_text_2.png)

[![crack_sublime_text_3](/uploads/2014/01/crack_sublime_text_3.png)](/uploads/2014/01/crack_sublime_text_3.png)

需要注意的是，这个功能并不像 OllyDbg 的修改代码功能，可以自动使用 `nop` 填充剩余空间，所以你要自行修改。

[![crack_sublime_text_4](/uploads/2014/01/crack_sublime_text_4.png)](/uploads/2014/01/crack_sublime_text_4.png)

IDA 并不会对原始文件做任何修改，保存也只是保存到数据库中。但我们可以切换到 Hex View，根据当前的 offset 和修改后的内容，使用 WinHex 等十六进制编辑器修改原始文件。

[![crack_sublime_text_5](/uploads/2014/01/crack_sublime_text_5.png)](/uploads/2014/01/crack_sublime_text_5.png)

[![crack_sublime_text_6](/uploads/2014/01/crack_sublime_text_6.png)](/uploads/2014/01/crack_sublime_text_6.png)

&nbsp;

最后附上已破解的 Build 3061，我会尽量跟进的。License 可以使用原来的 [keygen](/sublime-text-crack.html) 生成。把已破解的文件根据原始文件名修改后覆盖上去就可以了，由于是在 Windows 下修改和打包的，OS X 和 Linux 用户需要给文件添加可执行权限，使用命令 `chmod 755` 或 `chmod a+x`。

[点我下载](http://bcs.duapp.com/sinosky-blog/2014/01/sublime_text_build_3061_cracked_all.7z)

解压密码：sinosky.org

[![sublime_dev_cracked](/uploads/2014/01/sublime_dev_cracked.png)](/uploads/2014/01/sublime_dev_cracked.png)