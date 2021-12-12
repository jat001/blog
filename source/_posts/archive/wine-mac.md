---
title: 使用Wine在Mac OS X中运行Windows程序
tags:
  - Mac OS
  - Wine
id: 183
categories:
  - 教程
date: 2012-10-18 16:39:37
---

<div class="entry-content">

目前，在Mac OS X中运行Windows程序，不外乎两种方法。一是在虚拟机软件如[VirtualBox](http://www.virtualbox.org)、[VMware Fusion](http://www.vmware.com/mac)、[Parallels Desktop](http://www.parallels.com/products/desktop/)中安装完整的Windows操作系统；另一种则是利用[Wine](http://www.winehq.org)或其商业版本[Crossover Office](http://www.codeweavers.com)直接运行Windows软件。

Wine的名字是一个有意思的缩写，Wine Is Not an Emulator，如其所表，Wine并非虚拟机，它实现功能的方法是提供对Windows API的兼容，从而使Windows程序能够运行在Linux/Mac OS X操作系统中。与虚拟机相比，Wine的运行效率和系统资源占用都有很大优势，但兼容性会差一些，不过很多软件包括Office、Photoshop之类的大型软件都能运行。[这里](http://appdb.winehq.org)有一个Wine的兼容性列表。

本文谈一下Wine在Mac OS X中的安装和配置。

&nbsp;

## Wine的安装

通过[Homebrew](http://www.sinosky.org/homebrew-installation-and-usage.html)安装Wine非常简单，输入以下命令即可。

<div class="highlight">
<table>
<tbody>
<tr>
<td class="gutter"></td>
<td class="code">

    <span class="line">brew install wine --devel
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    命令中的`--devel`参数表示安装开发版，否则默认安装稳定版。Wine的开发版本也足够稳定，不必担心，而其兼容性会高于稳定版。

    安装完成后，在终端运行`winecfg`，可以调出Wine的配置面板，同时也会创建`~/.wine`目录。输入`wine program.exe`这样的命令就可以运行Windows程序了，比如`wine winemine.exe`可启动Wine自带的扫雷游戏。

    ## 字体平滑

    Wine支持字体平滑，默认情况下未开启，下载这个注册表文件并使用`wine regedit wine_smoothfonts.reg`导入即可开启字体平滑。

    <div><script type="text/javascript" src="https://gist.github.com/1947925.js?file="></script></p>
    <noscript>&amp;amp;amp;amp;amp;amp;amp;lt;pre&amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;lt;code&amp;amp;amp;amp;amp;amp;amp;gt;REGEDIT4 [HKEY_CURRENT_USER\Control Panel\Desktop] &amp;amp;amp;amp;amp;amp;amp;amp;quot;FontSmoothing&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;2&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;FontSmoothingType&amp;amp;amp;amp;amp;amp;amp;amp;quot;=dword:00000002 &amp;amp;amp;amp;amp;amp;amp;amp;quot;FontSmoothingGamma&amp;amp;amp;amp;amp;amp;amp;amp;quot;=dword:00000578 &amp;amp;amp;amp;amp;amp;amp;amp;quot;FontSmoothingOrientation&amp;amp;amp;amp;amp;amp;amp;amp;quot;=dword:00000001&amp;amp;amp;amp;amp;amp;amp;lt;/code&amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;lt;/pre&amp;amp;amp;amp;amp;amp;amp;gt;</noscript>
    </div>

    &nbsp;

    ## 中文字体替换

    使用Wine运行中文软件，发现汉字都显示成方块，这是因为Wine在使用默认的英文字体渲染汉字时，不会自动调用中文字体进行替换，我们可以在注册表中指明字体替换规则来解决。我选择了使用[文泉驿微米黑](http://wenq.org/index.cgi?MicroHei)字体来替换，你可以根据自己的喜好进行修改，比如使用Mac OS X的冬青黑字体。

    下载[文泉驿微米黑](http://downloads.sourceforge.net/project/wqy/wqy-microhei/0.2.0-beta/wqy-microhei-0.2.0-beta.tar.gz)字体文件，解压其中的`wqy-microhei.ttc`文件到`~/.wine/drive_c/windows/Fonts`目录中，或者直接安装到Mac OS X系统中。然后下载下面的注册表文件，使用`wine regedit wine_fontsubstitutes_wqymicrohei.reg`导入。使用系统字体时，将文件中的`WenQuanYi Micro Hei`和`WenQuanYi Micro Hei Mono`替换成相应的系统字体名称，且不需要另外安装到`~/.wine`目录中，Wine会自动扫描系统字体。

    <div>

    &nbsp;

    <noscript>&amp;amp;amp;amp;amp;amp;amp;lt;pre&amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;lt;code&amp;amp;amp;amp;amp;amp;amp;gt;REGEDIT4 [HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\FontSubstitutes] &amp;amp;amp;amp;amp;amp;amp;amp;quot;Arial&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Comic Sans MS&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Courier&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Courier New&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Fixedsys&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Helv&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Helvetica&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Lucida Console&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Lucida Sans&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Microsoft Sans Serif&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MingLiU&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;PMingLiu&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS Shell Dlg&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS Shell Dlg 2&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS Dialog&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS Gothic&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS PGothic&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS UI Gothic&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS Mincho&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;MS PMincho&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;SimHei&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;SimSun&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;NSimSun&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei Mono&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;System&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Tahoma&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Times&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Times New Roman&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Tms Rmn&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Trebuchet MS&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot; &amp;amp;amp;amp;amp;amp;amp;amp;quot;Verdana&amp;amp;amp;amp;amp;amp;amp;amp;quot;=&amp;amp;amp;amp;amp;amp;amp;amp;quot;WenQuanYi Micro Hei&amp;amp;amp;amp;amp;amp;amp;amp;quot;&amp;amp;amp;amp;amp;amp;amp;lt;/code&amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;lt;/pre&amp;amp;amp;amp;amp;amp;amp;gt;</noscript>
    </div>

    此外，需要在`~/.bash_profile`中增加以下两行，否则文件名中的汉字还是乱码。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter">
    <pre class="line-numbers"><span class="line-number"> </span></pre>
    </td>
    <td class="code">
    <pre>`<span class="line"><span class="nb">export </span><span class="nv">LC_CTYPE</span><span class="o">=</span>en_US.UTF-8
    </span><span class="line"><span class="nb">export </span><span class="nv">LC_ALL</span><span class="o">=</span>en_US.UTF-8
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    ## 输入法

    Wine的UI渲染是基于X11环境的，无法使用Mac OS X原生的输入法，需要另外安装基于X11的输入法。经过试验，Fcitx 3.5可以顺利安装。以下安装和配置步骤同样基于[Homebrew](http://www.sinosky.tk/homebrew-installation-and-usage.html)。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter"></td>
    <td class="code">
    <pre>`<span class="line">brew create http://www.fcitx.org/download/fcitx-3.5-070703.tar.bz2
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    下载完成后，Homebrew会自动打开创建的编译脚本进行编辑，在`system "make install"`之前增加一行`system "make"`。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter"></td>
    <td class="code">
    <pre>`<span class="line">brew install fcitx
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    在`~/.bash_profile`中增加一行。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter"></td>
    <td class="code">
    <pre>`<span class="line"><span class="nb">export </span><span class="nv">XMODIFIERS</span><span class="o">=</span><span class="s2">"@im=fcitx"</span>
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    安装完成后，运行`fcitx`，之后按`⌃C`结束，这会让Fcitx创建它的配置文件。编辑`~/.fcitx/profile`，将`主窗口位置Y`的值修改为22以上，这样Fcitx的状态条就不会被菜单栏挡住了（菜单栏的高度是22）。新版XQuartz中，这个步骤不是必须，因为X服务器在计算坐标时已经考虑了菜单栏的存在。Fcitx的所有设置都可以在`~/.fcitx/profile`和`~/.fcitx/config`这两个文件中修改，请参考Fcitx的相关文档。

    输入汉字时，必须先运行Fcitx，可以让Fcitx随X11自动启动。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter"></td>
    <td class="code">
    <pre>`<span class="line">defaults write org.x.X11 app_to_run /usr/local/bin/fcitx
    </span>`</pre>
    </td>
    </tr>
    </tbody>
    </table>
    </div>

    如果使用XQuartz而非系统预装的X11，输入以下命令设置。

    <div class="highlight">
    <table>
    <tbody>
    <tr>
    <td class="gutter"></td>
    <td class="code">
    <pre>`<span class="line">defaults write org.macosforge.xquartz.X11 app_to_run /usr/local/bin/fcitx
    </span>

</td>
</tr>
</tbody>
</table>
</div>

## 程序菜单

将常用的Windows程序放置到X11的`应用程序`菜单中，就不需要使用命令行操作了；也可以利用Automator把它们包装成Mac应用。推荐使用Automator，同时启动Fcitx和Windows应用，效果完美，参见如下截图。

[![img](//www.sinosky.org/uploads/f/m/)](//www.sinosky.org/uploads/f/m/)

[![img](//www.sinosky.org/uploads/f/n/)](//www.sinosky.org/uploads/f/n/)

&nbsp;

&nbsp;

Posted on [http://linfan.info/blog/2012/03/01/wine-mac/](http://linfan.info/blog/2012/03/01/wine-mac/)

</div>