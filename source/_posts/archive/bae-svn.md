---
title: 百度 BAE 系列教程之SVN篇
tags:
  - BAE
  - 云平台
  - 教程
  - 百度
id: 269
categories:
  - 云平台
date: 2012-12-18 19:36:49
---

百度 BAE 不支持 Git 和 FTP ，也没有自己的上传工具，要想管理代码，只有使用“反人类”的SVN。官方关于SVN的教程十分详细，我就不再做重复劳动了，直接复制……

### <span class="mw-headline" id=".E4.BB.8E.E8.BF.99.E9.87.8C.E4.B8.8B.E8.BD.BD">从这里下载</span>

目前，无论是Windows平台、Linux平台还是Mac平台都有比较成熟的SVN客户端工具。

*   windows下TortoiseSVN：[立即下载](http://tortoisesvn.net/downloads.html)
*   Linux下RabbitVCS：[立即下载](http://rabbitvcs.org/)
*   Mac下svnx： [立即下载](http://code.google.com/p/svnx/downloads/list)

下面以Windows为例，概述使用SVN部署代码的主要流程。

### <span class="mw-headline" id=".E7.AC.AC.E4.B8.80.E6.AD.A5.EF.BC.9A.E5.AE.89.E8.A3.85TortoiseSVN">第一步：安装TortoiseSVN</span>

如果您已安装TortoiseSVN，请跳过这一步。

在安装的过程中如果出现下图，恭喜您，SVN已经安装成功，可进入下一步。

<div>

[![49.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_49.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_49.jpg "49.jpg")

图1.1 安装TortoiseSVN成功

</div>

### <span class="mw-headline" id=".E7.AC.AC.E4.BA.8C.E6.AD.A5.EF.BC.9A.E8.8E.B7.E5.8F.96SVN.E4.BB.93.E5.BA.93.E5.9C.B0.E5.9D.80">第二步：获取SVN仓库地址</span>

*   使用您的百度账户登录[百度开放者中心](http://developer.baidu.com/)之后进入&#8221;管理中心&#8221; 并选择“我的应用”

*   选择相应托管在BAE上的应用，点击“管理”，即可进入待操作程序的版本管理页面
<div>

[![16.jpg](//www.sinosky.org/uploads/2012/developer.baidu.com_wiki_static_image_BAE_16.jpg)](//www.sinosky.org/uploads/2012/developer.baidu.com_wiki_static_image_BAE_16.jpg "16.jpg")

图2.1：管理中心“我的应用”页

</div>

&nbsp;

*   点击待操作的版本，看到页面下方的SVN地址，点击“复制SVN地址”，即可获得对应版本的SVN地址
<div>

[![17.jpg](//www.sinosky.org/uploads/2012/developer.baidu.com_wiki_static_image_BAE_17.jpg)](//www.sinosky.org/uploads/2012/developer.baidu.com_wiki_static_image_BAE_17.jpg "17.jpg")

图2.2：管理中心应用列表页

</div>

### <span class="mw-headline" id=".E7.AC.AC.E4.B8.89.E6.AD.A5_checkout.E4.BB.A3.E7.A0.81">第三步 checkout代码</span>

首先创建本地目录，用于存放从SVN仓库中checkout的代码。本地目录可以用程序版本的程序名加版本号命名，也可以是其它任意名字。本地目录将作为SVN的工作目录。

<div>

[![52.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_52.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_52.jpg "52.jpg")

图3.1 创建本地目录

</div>

选中本地目录，右键选择SVN Checkout。

<div>

[![53.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_53.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_53.jpg "53.jpg")

图3.2 SVN Checkout操作

</div>

在弹出的窗口中，黏贴第二步中获取的仓库地址，并设置代码的版本信息，可以是最新版本“HEAD revision”，也可以指定为任意版本。

<div>

[![54.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_54.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_54.jpg "54.jpg")

图3.3 填写信息

</div>

点击“ok”后，进入用户信息验证。输入百度账号和密码，完成验证。由于SVN不支持中文，SVN服务初期开放阶段只提供给用户名中不包含中文的用户。

<div>

[![55.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_55.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_55.jpg "55.jpg")

图3.4 用户信息验证

</div>

验证成功，则显示如下提示，并将代码checkout到本地目录中。

<div>

[![56.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_56.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_56.jpg "56.jpg")

图3.5代码checkout成功

</div>

进入本地目录则可以看到check到本地的文件。

### <span class="mw-headline" id=".E7.AC.AC.E5.9B.9B.E6.AD.A5.EF.BC.9A.E4.BB.A3.E7.A0.81.E7.AE.A1.E7.90.86">第四步：代码管理</span>

在本地目录中，您可以对版本代码进行增加文件或目录、删除文件或目录、修改文件内容和重命名文件和目录等。

#### <span class="mw-headline" id=".E6.96.B0.E5.A2.9E.E6.96.87.E4.BB.B6.E5.92.8C.E7.9B.AE.E5.BD.95">新增文件和目录</span>

在本地目录中新增文件和目录，可以在本地目录中直接新建，也可以从其他地方复制进来。 此时，新增的文件和目录上标记了问号，例如下图中的新增文件“Blue hills.jpg”和目录 “add”。

<div>

[![57.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_57.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_57.jpg "57.jpg")

图4.0.1 本地新增文件和目录

</div>

在提交到SVN仓库之前，需要先进行Add操作，告知SVN客户端增加了文件或目录。

<div>

[![58.jpg](//www.sinosky.org/uploads/2012/58.jpg)](//www.sinosky.org/uploads/2012/58.jpg "58.jpg")

图4.0.2 增加操作

</div>

如果您的新增目录中包含文件或者目录，可以选中所有，将新增目录以及其子目录或子文件一次性加入。

<div>

[![59.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_59.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_59.jpg "59.jpg")

图4.0.3 增加目录以及目录内文件

</div>

而对于已有文件内容的修改，则可以直接“commit”将代码提交到SVN代码仓库中去。

#### <span class="mw-headline" id=".E5.88.A0.E9.99.A4.E6.96.87.E4.BB.B6.E5.92.8C.E7.9B.AE.E5.BD.95">删除文件和目录</span>

选中要删除的文件，选择SVN的delete操作，删除当前文件，请不要直接删除。

<div>

[![60.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_60.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_60.jpg "60.jpg")

图4.1.1 删除文件

</div>

#### <span class="mw-headline" id=".E9.87.8D.E5.91.BD.E5.90.8D.E6.96.87.E4.BB.B6">重命名文件</span>

选中要重命名的文件，右键，选择SVN的“Rename”操作，请勿直接重命名文件。

<div>

[![61.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_61.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_61.jpg "61.jpg")

图4.2.1 重命名文件

</div>

在弹出的窗口中输入新的文件名。

<div>

[![62.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_62.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_62.jpg "62.jpg")

图4.2.2 填写文件名

</div>

点击“ok”后，刷新本地目录，可以看到js.html文件不在，而新增了一个javascripts.html文件。

<div>

[![63.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_63.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_63.jpg "63.jpg")

图4.2.3 重命名文件成功

</div>

#### <span class="mw-headline" id=".E6.8F.90.E4.BA.A4.E6.9B.B4.E6.96.B0">提交更新</span>

在将更新提交到SVN代码仓库中时，可以逐个更新提交，也可以在本地目录一次提交所有更新。

<div>

[![64.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_64.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_64.jpg "64.jpg")

图4.3.1 commit所有更新

</div>

在弹出的框中，根据需要输入本次commit的更新说明。点击确定，完成commit操作。

<div>

[![65.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_65.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_65.jpg "65.jpg")

图4.3.2 commit信息框

</div>

如果显示如下框，则说明提交更新成功

<div>

[![66.jpg](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_66.jpg)](//www.sinosky.org/uploads/2012/dev.baidu.com_wiki_static_app_images_developer_66.jpg "66.jpg")

图4.3.2 commit更新成功

</div>

利用TortoiseSVN可进行的操作还有很多，比如“更新”、“查看日志”和“撤销”等。更多使用请见[http://tortoisesvn.net/support.html](http://tortoisesvn.net/support.html)