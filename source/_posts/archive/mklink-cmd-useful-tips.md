---
title: 活用 MKLINK 命令保护、节省你的硬盘
tags:
  - MKLINK
  - Windows
  - 硬链接
  - 符号链接
  - 软链接
id: 119
categories:
  - 小技巧
date: 2013-05-16 13:14:19
---

用过 Linux 的人应该都熟悉软硬链接，但很多人估计还不知道 Windows 中也包含了这项功能。如果对链接的使用只局限于在桌面“创建快捷方式”，那么我很替你的硬盘担心。

`MKLINK` 适合需要经常在不同位置访问同一个文件的人，说白了就是不把一个文件复制、剪切多次，却还能够让不同程序在不同路径读取同一个文件。

`MKLINK` 的基础命令如下：

*   不加参数使用表示链接源、目标都是单个文件。这个命令会让 D 盘多出 `BOOTMGR` 文件，大小为 0 字节，但编辑时确是 `C:\BOOTGR` 的内容。（系统启动文件，不要真编辑里面的内容了……）

<pre class="lang:batch " >
mklink D:\BOOTMGR C:\BOOTMGR
</pre>

*   `/j` 参数表示链接源、目标都是文件夹。这样做可以在你的 D 盘创建一个 `Windows` 文件夹，里面的内容与 `C:\Windows` 一模一样，不占空间（显示为与 `C:\Windows` 一样大）且修改也会及时同步到 C 盘。如果能把 C 盘隐藏的话，你完全可以说 Windows 安装在 D 盘。

<pre class="lang:batch " >
mklink /j D:\Windows C:\Windows
</pre>

日常操作知道这两个命令就够了，太高深的也不做介绍。需要注意的是与快捷方式的相同与不同之处：

1.  快捷方式无论目标是文件还是目录，生成的都是新的有内容的 `.lnk` 文件，打开时是打开的源路径，直接编辑则是编辑 `.lnk` 文件的内容，源文件/目录不受影响。`MKLINK` 生成的文件和目录都是 0 字节，但访问时仍然是新文件/目录的路径，且编辑操作编辑的是源文件/目录；原理相当于网盘的同步，只不过不通过网络、不占用空间。

2.  删除两者生成的目标文件/目录都不会对源文件/目录产生影响。但删除源文件/目录后，新路径都不再可用。

&nbsp;

**实例 1：给 C 盘减负**

不少驱动程序都会自动在 `C:\Program Files\InstallShield Installation Information` 目录中留下安装程序备份用于卸载，其实有谁没事卸载驱动玩？但这却是 C 盘主要的空间杀手，也是 InstallShield 通常被人们诟病的地方。

于是，为了节省系统盘空间，可以在安全模式中 `C:\Program Files\InstallShield Installation Information` 剪切到 E 盘（需要先显示系统隐藏文件夹），利用 `MKLINK` 让系统误以为没有移动（注意别清理优化时手快删了就行）。

剪切完之后，执行一下

<pre class="lang:batch wrap:1 " >
mklink /j "E:\InstallShield Installation Information" "C:\Program Files\InstallShield Installation Information"
</pre>

大功告成！

这个方法同时适用于许多已安装的 Windows 程序（例如 Office 等），这些程序在注册表中留有许多信息，不能随意移动原来路径下的文件。但等到 C 盘空间不足时，可以考虑把他们剪切出来，再用 `MKLINK` 链回去。

**实例 2：整合游戏客户端**

《魔兽世界》是个很流行的网络游戏，不少玩家却因为不同地区游戏版本不同饱受折磨。其实客户端中大部分文件都可以通用，只有几个目录需要根据连接的服务器做调整，但是客户端只会死板的访问自己路径下的文件。于是把这些特殊目录、文件单列出来，需要连接哪个服务器就把目录链回去。

这是一个脚本的部分命令，大量用到了 `MKLINK`，用于在不同服务器之前切换，却不需要重复下载、来回复制文件。

<pre class="lang:batch " >
:TW
ECHO.
copy /y /v ".\@TW@\.agent.db"
mklink "Battle.net.dll" ".\@TW@\TW@Battle.net.dll"
mklink "Battle.net-64.dll" ".\@TW@\TW@Battle.net-64.dll"
>Launcher.db set /p=zhTW<NUL
mklink "WoW.exe" ".\@TW@\TW@WoW.exe"
mklink "WoW.mfil" ".\@TW@\TW@WoW.mfil"
mklink "WoW.pfil" ".\@TW@\TW@WoW.pfil"
mklink "WoW.tfil" ".\@TW@\TW@WoW.tfil"
mklink "Wow-64.exe" ".\@TW@\TW@Wow-64.exe"
mklink "WowError.exe" ".\@TW@\TW@WowError.exe"
mklink "WowError-64.exe" ".\@TW@\TW@WowError-64.exe"
mklink /j ".\Cache\ADB\zhTW" ".\@TW@\ADB@zhTW"
mklink /j ".\Cache\WDB\zhTW" ".\@TW@\WDB@zhTW"
mklink /j ".\Data\Cache\zhTW" ".\@TW@\CACHE@zhTW"
mklink /j ".\Data\zhTW" ".\@TW@\DATA@zhTW"
mklink /j ".\WTF" ".\@TW@\TW@WTF"
:CN
ECHO.
copy /y /v ".\@CN@\.agent.db"
mklink "Battle.net.dll" ".\@NA@\NA@Battle.net.dll"
mklink "Battle.net-64.dll" ".\@NA@\NA@Battle.net-64.dll"
>Launcher.db set /p=zhCN<NUL
mklink "WoW.exe" ".\@NA@\NA@WoW.exe"
mklink "WoW.mfil" ".\@CN@\CN@WoW.mfil"
mklink "WoW.pfil" ".\@CN@\CN@WoW.pfil"
mklink "WoW.tfil" ".\@CN@\CN@WoW.tfil"
mklink "Wow-64.exe" ".\@NA@\NA@WoW-64.exe"
mklink "WowError.exe" ".\@NA@\NA@WoWError.exe"
mklink "WowError-64.exe" ".\@NA@\WoWError-64.exe"
mklink /j ".\Cache\ADB\zhCN" ".\@CN@\ADB@zhCN"
mklink /j ".\Cache\WDB\zhCN" ".\@CN@\WDB@zhCN"
mklink /j ".\Data\Cache\zhCN" ".\@CN@\CACHE@zhCN"
mklink /j ".\Data\zhCN" ".\@CN@\DATA@zhCN"
mklink /j ".\WTF" ".\@CN@\CN@WTF"
:NA
ECHO.
copy /y /v ".\@NA@\.agent.db"
mklink "Battle.net.dll" ".\@NA@\NA@Battle.net.dll"
mklink "Battle.net-64.dll" ".\@NA@\NA@Battle.net-64.dll"
>Launcher.db set /p=enUS<NUL
mklink "WoW.exe" ".\@NA@\NA@WoW.exe"
mklink "WoW.mfil" ".\@NA@\NA@WoW.mfil"
mklink "WoW.pfil" ".\@NA@\NA@WoW.pfil"
mklink "WoW.tfil" ".\@NA@\NA@WoW.tfil"
mklink "Wow-64.exe" ".\@NA@\NA@WoW-64.exe"
mklink "WowError.exe" ".\@NA@\NA@WoWError.exe"
mklink "WowError-64.exe" ".\@NA@\WoWError-64.exe"
mklink /j ".\Cache\ADB\enUS" ".\@NA@\ADB@enUS"
mklink /j ".\Cache\WDB\enUS" ".\@NA@\WDB@enUS"
mklink /j ".\Data\Cache\enUS" ".\@NA@\CACHE@enUS"
mklink /j ".\Data\enUS" ".\@NA@\DATA@enUS"
mklink /j ".\Data\Cache\esMX" ".\@LA@\CACHE@esMX"
mklink /j ".\Data\esMX" ".\@LA@\DATA@esMX"
</pre>

**实例 3：隐藏私密文件**

由于 `MKLINK` 生成的文件/目录并不继承源文件/目录的属性，这个特点可以用来直接访问隐藏文件。

在 `C:\Windows` 中新建 `Photos` 目录，把个人照片拷进去，执行命令

<pre class="lang:batch " >
attrib +s +h +r C:\Windows\Photos\*.* /s /d
</pre>

就可以让 `Photos` 目录进行系统级隐藏，即使打开普通的 `显示隐藏文件和文件夹` 开关也看不到。

然后插入自己的 U 盘，执行

<pre class="lang:batch " >
mklink /j "U:\我的照片" "C:\Windows\Photos"
</pre>

以后就可以通过 U 盘直接访问 Photos 中的照片，路径仍然显示为 `U:\我的照片` 而不至于暴露。

除非有人花时间在 `C:\Windows` 中隐藏文件中仔细查找，否则绝大多数情况下，照片都是安全的。