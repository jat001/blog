---
title: 为个人或企业用户创建 iOS 描述文件
tags:
  - iOS
  - iPhone
  - Mac OS
  - Windows
  - 科学上网
  - 自动化
  - 软件
id: 172
categories:
  - 应用软件
date: 2012-12-30 16:32:26
---

<span style="font-size: small;">        不知有多少 iPhone、iPad 或 iPod touch 用户听说过 iOS 操作系统的“描述文件”，可能普通用户知道的很少，但这的确是个很有用的功能。</span>

<span style="font-size: small;">        相信不少人家中都有超过一台 Apple 的移动设备，例如商务人士经常在 iPhone 和 iPad 上交替工作，而 iPod touch 和 iPhone 也是不少新潮学生的玩物。设想这样一个情景，如果你新购置一台 iPad Mini（貌似大陆已经发行），怎样将常用的邮箱登录信息和已保存的家庭、学校的公共 Wi-Fi 密码由旧的 iPhone 转移过来呢？当然，使用 iTunes 或者 iCloud 恢复备份是个不错选择；可是将两个设备的屏幕图标和密码都弄得完全一样实在不是学生党的风格，再说你也不会在 iPad 和 iPhone 上使用完全相同的设置和程序（好吧，有人真的希望这样做……那你买 iPad 干神马？视力下降了？）。举例另外一种情况，作为一名管理人员，你希望和手下员工共用公司的开放邮箱，但又不保险让众多不信任的下属知道公司设置的密码（万一有人偷偷改了咋弄？），你一定很纠结……肿么办？肿么办？下面介绍由 Apple 官方出品的 iOS 配置利器——iPhone 配置实用工具。[我是 Win + Mac 下载地址传送门](http://support.apple.com/zh_CN/downloads/#iPhone 配置实用工具)</span>

<span style="font-size: small;">        iPhone 配置实用工具可以让你将 iOS 设置中的一项或多项保存成一个“描述文件”，任何安装此“描述文件”的 iOS 设备都拥有相同的设置，只有某几项设置相同，且并不是通过 iTunes 恢复来的——这意味着你可以随时移除“描述文件”（但并非都是无条件移除，稍后说明）来还原先前的设置。这里以“虚拟专用网络”设置（你懂的）为例，抛砖引玉仅当个教程，官方中文帮助文档请[猛击此处](http://help.apple.com/iosdeployment-ipcu/win/1.1/?lang=zh-cn)！为了避免不必要的麻烦，文章中重点词语一律省略，请自动看图脑补剩余内容……</span>

<span style="font-size: small;">        1\. 首先从 Windows “开始菜单”的“所有程序”中打开“iPhone 配置实用工具”，依次点击“配置描述文件”、“新建”，这样就创建了一个空白描述文件。如果界面中没有配置文件编辑框，点击右侧的“显示细节”。然后在“通用”类别的“名称”、“标识符”和“机构”中输入自己的内容。注意“标识符”是每个描述文件独一无二的识别代码，如果两个描述文件的标识符相同，旧的将被新安装的取代。</span>

<span style="font-size: small;">[![iOS-1](http://bcs.duapp.com/sinosky-blog/2012/12/30/1.png)](http://bcs.duapp.com/sinosky-blog/2012/12/30/1.png "iOS-1")</span>

<span style="font-size: small;">[![iOS-2](http://bcs.duapp.com/sinosky-blog/2012/12/30/2.png)](http://bcs.duapp.com/sinosky-blog/2012/12/30/2.png "iOS-2")</span>

<span style="font-size: small;">        2\. 设置好个性化信息，接下来进入正题。切换到左侧“虚拟专用网络”类别，点击“配置”新增一个有效负载，如同在 iPhone 上设置一样，将需要输入的内容输全。如果某项内容必需但描述文件中没有配置，iOS 将会在需要时请求用户手动输入。</span>

<span style="font-size: small;">[![iOS-3](http://bcs.duapp.com/sinosky-blog/2012/12/30/3.png)](http://bcs.duapp.com/sinosky-blog/2012/12/30/3.png "iOS-3")</span>

<span style="font-size: small;">        3\. 对于密码、Wi-Fi、邮件、日历、通讯录和 APN 也可以进行配置，且每一类别可以配置不止一个有效负载，此处不再废话。说到密码，有必要提一下，Apple 不允许在描述文件中为设备设置密码，但可以通过描述文件限制新密码策略（例如不能使用纯升序密码 123456789 或重复数字 112233 等等）。这些信息在安装描述文件后会自动写入到系统中，不需要用户进行维护操作，密码等也不会以明文显示。</span>

<span style="font-size: small;">[![iOS-4](http://bcs.duapp.com/sinosky-blog/2012/12/30/4.png)](http://bcs.duapp.com/sinosky-blog/2012/12/30/4.png "iOS-4")</span>

<span style="font-size: small;">        4\. 回到“通用”类别，对于高级需求用户，可以指定描述文件是否能被手动、自动移除，以及设置手动移除时的鉴定信息。最后点击顶部“导出”生成后缀为 .mobileconfig 的描述文件。</span>

<span style="font-size: small;">[![iOS-5](http://bcs.duapp.com/sinosky-blog/2012/12/30/51.png)](http://bcs.duapp.com/sinosky-blog/2012/12/30/51.png "iOS-5")</span>

<span style="font-size: small;">        至此，描述文件的创建工作就已经完成了。可以对描述文件签名并分发，以共享这些设置信息。iOS 内置的 Safari 下载描述文件后会自动弹出安装提示，其他程序接收后可以在“打开方式”中选择用“设置”应用打开来安装。</span>

<span style="font-size: small;">        上面创建的 SinoSky 虚拟专用网络描述文件已被共享，可以在某云端硬盘（[点此进入](https://docs.google.com/open?id=0B4p68HOOaC12aERBWVFUXzBwV2s)）查看和下载。描述文件经过签名，保证安全，但请在安装前确认是否来自 SinoSky.org 机构。</span>

<span style="font-size: small;">        另外，对于变形的图片吐槽一下……这个窗口截图时实在不能调整大小……凑合看吧。</span>