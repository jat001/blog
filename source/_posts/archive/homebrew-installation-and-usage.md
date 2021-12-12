---
title: Homebrew的安装与使用
tags:
  - Homebrew
  - Mac OS
  - 软件包管理
id: 87
categories:
  - 程序员
date: 2012-10-18 02:45:00
---

Mac OS X是基于Unix的操作系统，可以安装大部分为Unix/Linux开发的软件。然而，如果只是以使用为目的，对每个软件都进行手工编译不是很方便，也不利于管理已安装的软件，于是出现了类似于Linux中APT、Yum等类似的软件包管理系统，其中最著名的有MacPorts、Fink、Homebrew等。

我曾经是MacPorts的使用者，但了解Homebrew之后，立即“弃暗投明”了。其实MacPorts也是一个很不错的解决方案，除了一个实在让我头疼的特性。MacPorts有个原则，对于软件包之间的依赖，都在MacPorts内部解决（/opt/local），无论系统本身是否包含了需要的库，都不会加以利用。这使得MacPorts过分的庞大臃肿，导致系统出现大量软件包的冗余，占用不小的磁盘空间，同时稍大型一点的软件编译时间都会难以忍受。

&nbsp;

而Homebrew的原则恰恰相反，它尽可能地利用系统自带的各种库，使得软件包的编译时间大为缩短；同时由于几乎不会造成冗余，软件包的管理也清晰、灵活了许多。Homebrew的另一个特点是使用Ruby定义软件包安装配置（叫做formula），定制非常简单。

至于Fink，由于并未安装使用过，不加讨论。（从互联网上的消息看，Fink由于维护人手的问题，软件包的更新不是很及时。）于我而言，Homebrew已经足够完善，除非发现重大的问题或者出现新的具有突破性的竞争对手，否则我没兴趣折腾别的软件包管理系统了。

下面说说Homebrew的安装与使用。

## Homebrew的安装

首先确保你的系统满足如下要求：

1\. 基于Intel CPU

2\. 操作系统为Mac OS X 10.5 Leopard或更高版本

3\. 已安装版本管理工具Git（Mac OS X 10.7 Lion已经预安装）

4\. 已安装Xcode开发工具<sup>1</sup>

5\. 已安装Java Developer Update<sup>2</sup>

注1：Xcode 4.3中，命令行编译工具是可选安装，需要在`Preferences` &gt; `Downloads`中激活。

注2：可选，Homebrew本身不依赖于Java，只有部分软件包的安装需要Java支持。

Homebrew的安装非常简单，在终端程序中输入以下命令即可。

`/usr/bin/ruby -e "$(/usr/bin/curl -fksSL https://raw.github.com/mxcl/homebrew/master/Library/Contributions/install_homebrew.rb)"`

安装过程需要输入root口令。

## Homebrew的使用

Homebrew的可执行命令是brew，其基本使用方法如下（以wget为例）。

查找软件包

`brew search wget`

安装软件包

`brew install wget`

列出已安装的软件包

`brew list`

删除软件包

`brew remove wget`

查看软件包信息

`brew info wget`

列出软件包的依赖关系

`brew deps wget`

更新brew

`brew update`

列出过时的软件包（已安装但不是最新版本）

`brew outdated`

更新过时的软件包（全部或指定）

`brew upgrade` 或 `brew upgrade wget`

## 定制自己的软件包

如果自己需要的软件包并不能在Homebrew中找到，怎么办呢，毕竟Homebrew是一个新生项目，不可能满足所有人的需求。当然，我们可以自行编译安装，但手工安装的软件包游离于Homebrew之外，管理起来不是很方便。

前文说过，Homebrew使用Ruby实现的软件包配置非常方便，下面简单谈一谈软件包的定制（假定软件包名称是bar，来自foo站点）。

1\. 首先找到待安装软件的源码下载地址

`http://foo.com/bar-1.0.tgz`

2\. 建立自己的formula

`brew create http://foo.com/bar-1.0.tgz`

3\. 编辑formula，上一步建立成功后，Homebrew会自动打开新建的formula进行编辑，也可用如下命令打开formula进行编辑。

`brew edit bar`

Homebrew自动建立的formula已经包含了基本的`configure`和`make install`命令，对于大部分软件，不需要进行修改，退出编辑即可。

4\. 输入以下命令安装自定义的软件包

`brew install bar`

## 

关于Homebrew的其它功能，比如将自定义软件包提交到官方发布等，请参考Homebrew项目的[主页](http://mxcl.github.com/homebrew/)及其Man Page。你将发现Homebrew不仅是“家酿”，更是“佳酿”。

&nbsp;

Posted on [http://linfan.info/blog/2012/02/25/homebrew-installation-and-usage/](http://linfan.info/blog/2012/02/25/homebrew-installation-and-usage/)