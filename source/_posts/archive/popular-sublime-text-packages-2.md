---
title: Sublime Text 热门插件简介（二）
tags:
  - Code Editor
  - Sublime Text
  - 程序员
  - 编辑器
id: 409
categories:
  - 应用软件
date: 2013-10-03 22:38:43
---

#### No.05 - **[Sublime​Code​Intel](https://sublime.wbond.net/packages/SublimeCodeIntel)** ([GitHub](https://github.com/SublimeCodeIntel/SublimeCodeIntel))

Sublime​Code​Intel 是一个代码提示、补全插件，支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等语言，是 Sublime Text 自带代码提示功能的很好扩展。它还有一个功能就是跳转到变量、函数定义的地方，十分方便。

[![SublimeCodeIntel](http://bcs.duapp.com/sinosky-blog/2013/10/02/SublimeCodeIntel.png)](http://bcs.duapp.com/sinosky-blog/2013/10/02/SublimeCodeIntel.png "SublimeCodeIntel")

<p>使用 Sublime​Code​Intel 之前你需要安装相应程序并把路径写入 `~/.codeintel/config` 或 `project_root/.codeintel/config` 中，ReadMe 中有详细的 [说明](https://github.com/SublimeCodeIntel/SublimeCodeIntel/blob/development/README.rst#configuring)，不再赘述。

十分不建议把 Sublime​Code​Intel 与其他单个语言的扩展 package 一同使用，虽然很多语言扩展 package 比 Sublime​Code​Intel 的代码提示功能要完善。如果需要一同使用，请在用户配置文件（菜单 `Preferences -> Package Settings -> Sublime​Code​Intel -> Settings - User` 中加入下面的内容，并去掉要禁用的语言。

<pre class="lang:plain " >
"codeintel_enabled_languages":
[
"JavaScript", "Mason", "XBL", "XUL", "RHTML", "SCSS", "Python", "HTML",
"Ruby", "Python3", "XML", "Sass", "XSLT", "Django", "HTML5", "Perl", "CSS",
"Twig", "Less", "Smarty", "Node.js", "Tcl", "TemplateToolkit", "PHP"
],
"codeintel_live_enabled_languages":
[
"JavaScript", "Mason", "XBL", "XUL", "RHTML", "SCSS", "Python", "HTML",
"Ruby", "Python3", "XML", "Sass", "XSLT", "Django", "HTML5", "Perl", "CSS",
"Twig", "Less", "Smarty", "Node.js", "Tcl", "TemplateToolkit", "PHP"
]
</pre>

<p>&nbsp;

#### No.06 - **[Alignment](https://sublime.wbond.net/packages/Alignment)** ([GitHub](https://github.com/wbond/sublime_alignment))

Alignment 是一个代码格式化插件，它可以使多行代码中的等号对齐，也可以调整多行代码为一个缩进级别，默认快捷键是 `ctrl+alt+a`（Mac OS 上是 `cmd+ctrl+a`）。

[![Alignment](http://bcs.duapp.com/sinosky-blog/2013/10/03/Alignment.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/Alignment.png "Alignment")

&nbsp;

#### No.07 - **[Bracket​Highlighter](https://sublime.wbond.net/packages/BracketHighlighter)** ([GitHub](https://github.com/facelessuser/BracketHighlighter))

Bracket​Highlighter 是一个括号、引号、标签高亮插件，支持 `[]`、`()`、`{}`、`""`、`''` 和 `&lt;tag&gt;&lt;/tag&gt;` 等，比 Sublime Text 自带的高亮要明显得多。

[![Bracket​Highlighter](http://bcs.duapp.com/sinosky-blog/2013/10/03/BracketHighlighter.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/BracketHighlighter.png "Bracket​Highlighter")

&nbsp;

#### No.08 - **[Git](https://sublime.wbond.net/packages/Git)** ([GitHub](https://github.com/kemayo/sublime-text-git))

Git 插件集成了 git 的常用功能，使用之前需要安装 git 并写入环境变量中。

[![Git](http://bcs.duapp.com/sinosky-blog/2013/10/03/Git.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/Git.png "Git")

&nbsp;

#### No.09 - **[SFTP](https://sublime.wbond.net/packages/SFTP)** ([HomePage](http://wbond.net/sublime_packages/sftp))

SFTP 插件可以使用 FTP 或 SFTP 协议连接远程服务器，下载到本地的文件在保存的同时会上传到服务器上，使修改服务器上的文件变得更加方便。此插件是收费插件，不注册的话会每隔一段时间弹出提示。

[![SFTP](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP.png "SFTP")

安装好插件后点击菜单 `File -> SFTP/FTP -> Setup Server...` 来生成一个配置文件，修改好并保存后，点击菜单 `File -> SFTP/FTP -> Browse Serve...` 来连接远程服务器。

<p>**注意**：

1\. 配置文件应该存放在菜单 `Preferences > Browse Packages…` 下的 `User/sftp_servers` 目录下。

2\. 如果在 Windows 下使用 ssh 而不是密码连接远程服务器，要用 [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) 把私钥转换为 ppk 格式才能使用。

[![SFTP Setup](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP-Setup.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP-Setup.png "SFTP Setup")

SFTP 还支持对一个文件夹进行映射。首先往 Sublime Text 拖入一个文件夹或点击菜单 `Project -> Add Folder to Project...`，在侧边栏中右键点击该文件夹，选择 `SFTP/FTP -> Map to Remote…`。这会在该目录中生成一个 `sftp-config.json` 文件，修改好配置文件并保存后，我们就可以对远程服务器上的文件（夹）进行（批量）同步或修改了。

[![SFTP Remote](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP-Remote.png)](http://bcs.duapp.com/sinosky-blog/2013/10/03/SFTP-Remote.png "SFTP Remote")