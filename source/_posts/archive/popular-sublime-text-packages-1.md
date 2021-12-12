---
title: Sublime Text 热门插件简介（一）
tags:
  - Code Editor
  - Sublime Text
  - 程序员
  - 编辑器
id: 342
categories:
  - 应用软件
date: 2013-09-30 07:16:11
---

俗话说：磨刀不误砍柴工，作为程序员，代码编辑器就是我们的斧头，在写代码之前，配置好一个顺手的编辑器就是很重要的了。Sublime Text 是一把好斧头，而它丰富的插件就是磨刀石了。

本文将为你介绍最受欢迎的 50 个 Sublime Text 插件，大部分插件来自于 [Package Control](https://sublime.wbond.net/) 上的[热门榜单](https://sublime.wbond.net/browse/popular)。由于 Sublime Text 2 不再更新，Sublime Text 3 也已经稳定，所以替换了几个不支持 Sublime Text 3 的插件。

&nbsp;

#### 手动安装

本文所介绍的一部分插件并未在 Package Control 中包含，或 Package Control 中包含的是此插件的 Sublime Text 2 版本，所以你需要手动安装它。

打开菜单 `Preferences -> Browse Packages…`，使用 `git clone` 命令在此目录克隆，然后使用 `git checkout` 命令切换到 Sublime Text 3 版本所在分支。当然你也可以直接下载这个分支的压缩文件并解压到此目录，但这样无法使用 `git pull` 命令获取更新了。

&nbsp;

#### No.00 - **[Package Control](https://sublime.wbond.net/packages/Package%20Control)** ([GitHub](https://github.com/wbond/sublime_package_control))

提到 Sublime Text，就不得不说 Package Control，就像 Linux 下的 apt-get 和 yum 一样，它是 Sublime Text 的包管理器，你用它可以轻松地找到你想要的插件和管理已有插件。

[![Package Control](http://bcs.duapp.com/sinosky-blog/2013/09/29/Package-Control.png)](http://bcs.duapp.com/sinosky-blog/2013/09/29/Package-Control.png "Package Control")

安装 Package Control 十分简单，只需要打开控制台（菜单 `View -> Show Console` 或快捷键 `ctrl+``），将下列代码粘贴进去即可。

<pre class="lang:python wrap:1 " >
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
</pre>

&nbsp;

#### No.01 - **[Emmet](https://sublime.wbond.net/packages/Emmet)** ([GitHub](https://github.com/sergeche/emmet-sublime))

Emmet 是一个前端开发的利器，其前身是 [Zen Coding](https://code.google.com/p/zen-coding/)。它让编写 HTML 代码变得简单。Emmet 的基本用法是：输入简写形式，然后按 `Tab` 键。

比如，输入 `html:5`，然后按 `Tab` 键，就会产生如下的代码：

<pre class="lang:html " >
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
</pre>

更复杂的比如 `ul#nav>li.item$*4>a{Item $}`：

<pre class="lang:html " >

*   [Item 1]()
*   [Item 2]()
*   [Item 3]()
*   [Item 4]()
</pre>

关于 Emmet 的更多用法，请看[官方文档](http://docs.emmet.io/)，这份[速查表](http://docs.emmet.io/cheat-sheet/)可以帮你快速记忆简写形式。

&nbsp;

#### No.02 - **[Theme - Soda](https://sublime.wbond.net/packages/Theme%20-%20Soda)** ([GitHub](https://github.com/buymeasoda/soda-theme))

Soda Theme 是最受欢迎的 Sublime Text 主题。

[![Soda Light](http://bcs.duapp.com/sinosky-blog/2013/09/29/Soda-Light.png)](http://bcs.duapp.com/sinosky-blog/2013/09/29/Soda-Light.png "Soda Light")

[![Soda Dark](http://bcs.duapp.com/sinosky-blog/2013/09/29/Soda-Dark.png)](http://bcs.duapp.com/sinosky-blog/2013/09/29/Soda-Dark.png "Soda Dark")

安装后你还需要在你的配置文件（菜单 `Preferences -> Settings - User`）中加入 `"theme": "Soda Light.sublime-theme"` 或 `"theme": "Soda Dark.sublime-theme"`。要达到图中的效果，你还需要下载与之搭配的 [color scheme](http://buymeasoda.github.io/soda-theme/extras/colour-schemes.zip)。

如果你喜欢 Soda Dark 和 Monokai，我建议你使用 [Monokai Extended](https://sublime.wbond.net/packages/Monokai%20Extended) ([GitHub](https://github.com/jonschlinkert/sublime-monokai-extended))。这个 color scheme 是 Monokai Soda 的增强，如果再配合 [Markdown Extended](https://sublime.wbond.net/packages/Markdown%20Extended) ([GitHub](https://github.com/jonschlinkert/sublime-markdown-extended))，将大大改善 Markdown 的语法高亮。

[![Monokai Extended+Markdown Extended](http://bcs.duapp.com/sinosky-blog/2013/09/29/Monokai-Extended+Markdown-Extended.png)](http://bcs.duapp.com/sinosky-blog/2013/09/29/Monokai-Extended+Markdown-Extended.png "Monokai Extended+Markdown Extended")

&nbsp;

#### No.03 - **[SublimeLinter](https://sublime.wbond.net/packages/SublimeLinter)** ([GitHub](https://github.com/SublimeLinter/SublimeLinter))

**注意**：此插件需要[手动安装](#manual)并切换到 [sublime-text-3](https://github.com/SublimeLinter/SublimeLinter/tree/sublime-text-3) 分支。

SublimeLinter 是一个代码校验插件，它可以帮你找出错误或编写不规范的代码，支持 C/C++、CoffeeScript、CSS、Git Commit Messages、Haml、HTML、Java、JavaScript、Lua、Objective-J、Perl、PHP、Puppet、Python、Ruby 和 XML 语言。

在使用 SublimeLinter 之前，你要安装相应的程序，详见[README](https://github.com/SublimeLinter/SublimeLinter/blob/sublime-text-3/README.md)。如果要校验 JavaScript 或 CSS，你还要安装 [Node.js](http://nodejs.org/)。

[![SublimeLinter](http://bcs.duapp.com/sinosky-blog/2013/09/30/SublimeLinter.jpg)](http://bcs.duapp.com/sinosky-blog/2013/09/30/SublimeLinter.jpg "SublimeLinter")

SublimeLinter 默认以 background 模式运行，在用户输入的同时即时校验，如果你想要 Sublime Text 运行得更流畅，可以改为 load-save 模式或 save-only 模式，在读取和保存是校验或只在保存时校验。

打开 SublimeLinter 的配置文件：菜单 `Preferences -> Package Settings -> SublimeLinter -> Settings - User`，加入 `"sublimelinter": "load-save"` 或 `"sublimelinter": "save-only"`

&nbsp;

#### No.04 - **[SideBarEnhancements](https://sublime.wbond.net/packages/SideBarEnhancements)** ([GitHub](https://github.com/titoBouzout/SideBarEnhancements))

SideBarEnhancements 是一款很实用的右键菜单增强插件，有以 diff 形式显示未保存的修改、在文件管理器中显示该文件、复制文件路径、在侧边栏中定位该文件等功能，也有基础的诸如新建文件/目录，编辑，打开/运行，显示，在选择中/上级目录/项目中查找，剪切，复制，粘贴，重命名，删除，刷新等常见功能。

SideBarEnhancements 还有一个功能就是自定义打开文件的程序，在侧边栏中右键点击一个文件（夹），选择 `Open With -> Edit Applications` 就可以修改关联了，配置文件自带示例，可以很方便地套用。

[![SideBarEnhancements - OpenWith](http://bcs.duapp.com/sinosky-blog/2013/10/02/SideBarEnhancements-OpenWith.png)](http://bcs.duapp.com/sinosky-blog/2013/10/02/SideBarEnhancements-OpenWith.png "SideBarEnhancements OpenWith")

`Copy as Text...` 是 SideBarEnhancements 的又一个特色功能，可以复制包含各种形式的路径、URL（甚至包括 base64 的 data:uri）、转码后的文件名、各种 HTML Tag（a、img、script、style）等。

[![SideBarEnhancements - Copy As Text](http://bcs.duapp.com/sinosky-blog/2013/10/02/SideBarEnhancements-CopyAsText.jpg)](http://bcs.duapp.com/sinosky-blog/2013/10/02/SideBarEnhancements-CopyAsText.jpg "SideBarEnhancements - Copy As Text")