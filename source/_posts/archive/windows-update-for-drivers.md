---
title: 巧用 Windows Update 解决驱动问题
tags:
  - Windows
  - Windows Update
  - 硬件
  - 驱动程序
id: 228
categories:
  - 小技巧
date: 2012-12-19 19:09:15
---

<span style="font-size: small;">     这篇文章写给那些“爱干净”的读者。如果你是这样一类人，喜欢新装机后用驱动光盘煲光驱，然后看着无数安装进度条欣慰地傻笑，那么请立即按下 Alt + F4 或者 Ctrl + W 关闭此页面，以免引起不适或其它可能出现的严重后果。</span>

<span style="font-size: small;">     我们知道 Windows 7 是个很强力的系统（当然，在 Windows 8 发布之前），不仅仅只是界面、易用性和稳定性方面有所提升，更重要的是，全新的 Windows Update 也比以前更屌爆了。Windows Update 已经不仅仅是一个下载安全更新的平台，更集语言包、驱动程序、错误解决方案于一体。但是很多用户往往在第一次进入系统后便想尽各种方法封杀 Windows Update，包括但不限于使用第三方软件（如 361 安全卫士、PP 电脑管家）、禁用后台服务，设置组策略等等……殊不知保持 Windows Update的正常运转，会给用户带来诸多方便。这里以驱动问题举例。</span>

<span style="font-size: small;">     Windows 7 自带绝大部分硬件驱动，不过对于一部分硬件也存在驱不动或者自带驱动不够新的情况。所以在安装完新系统之后，第一件事不是使劲喂光驱驱动光盘，而是调节 Windows Update。首先停止可能已开始的更新任务，并点击左侧的“更改设置”，在“重要更新”下方选取“检查更新，但让我选择是否下载和安装更新”，确定后返回。然后在 Windows Update 中找到如下界面，点击“查找详细信息”，而后关闭当前窗口。</span>

<span style="font-size: small;">[![Original Windows Update](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Old.png)](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Old.png "Original Windows Update")</span>

<span style="font-size: small;">     Internet Explorer 将会打开一个页面，跟随操作以将 Windows Update 应用到所有 Microsoft 产品（而不仅仅是 Windows），期间推荐选择“保留我当前的设置”，直到 Windows Update 下方横幅改变。</span>

<span style="font-size: small;">[![Windows Update for Microsoft Products](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_WithMS.png)](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_WithMS.png "Windows Update for Microsoft Products")</span>

<span style="font-size: small;">     此时新的更新检查操作会自动开始，等待完成即可在“重要”或“可选”列表中找到有关最新驱动程序的更新。这时再下载安装更新，即可保证安装的驱动程序是最新的，同时也是最纯净的。Windows Update 只会下载安装单纯的驱动，而不会附带安装什么 Dashboard 或 Control Center 之类的无用性能监视工具。而且全程静默安装，完全不需要用户绞尽脑汁配置驱动附加组件。下图是安装成功的历史记录。</span>

<span style="font-size: small;">[![nVIDIA Driver](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_nVIDIA.png)](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_nVIDIA.png "nVIDIA Driver")</span>

<span style="font-size: small;">[![Realtek Driver](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Realtek.png)](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Realtek.png "Realtek Driver")</span>

<span style="font-size: small;">     另外，新添加大型即插即用设备（如打印机、扫描仪等，移动硬盘就不算进来了）后，也可以交给 Windows Update 解决驱动问题（除非用户手动跳过，系统一般默认获取 Windows Update 上的驱动）。只要你不在乎设备随盘附赠的软件和工具，就直接插上插头，等待驱动安装成功吧。</span>

<span style="font-size: small;"> </span>

<span style="font-size: small;"> </span>

<span style="font-size: small;">     后记： </span>

<span style="font-size: small;">     如果你的硬件实在冷门，抑或产品太过新潮，连 Windows Update 也没有相应驱动，不必担心。“操作中心”会显示给你一条消息，指引你前往官方网站下载最近驱动程序。提供的网址都是直接下载链接，一键点开便立即下载。安装完成后将消息存档即可。</span>

<span style="font-size: small;">[![Archived Messages](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Arc.png)](//www.sinosky.org/uploads/Created%20by%20D.Y./WU_Arc.png "Archived Messages")</span>

<span style="font-size: small;"> </span>

<span style="font-size: small;">     您可以在 SkyDrive 中 [查看或下载](https://skydrive.live.com/redir?resid=9F05F85D43FB3B74!339&amp;authkey=!AA8DzRbjFz7haso) 此文章的电子版本。</span>