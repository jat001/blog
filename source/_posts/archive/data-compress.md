---
title: 小空间，大能量
tags:
  - AAC
  - ARC
  - BIK
  - 压缩
id: 226
categories:
  - 应用软件
date: 2012-12-26 19:07:47
---

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">按照近来科技发展趋势，电脑硬盘空间有着越来越大的增长势头。但随着固态驱动器 (SSD, Solid State Drive) 的兴起，硬盘空间已经不再是购置计算机的必需标准。在这篇文章中，我们来回顾一下曾经“勤俭节约”的日子，为那些先前不常注意到的压缩格式打打广告。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        1\. 文件压缩格式：ARC</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        说点题外话，单词 arc 的本意是“弧”，所以在此肯定不是取此意，而是用了存档 (archive) 这个单词的前三个字母缩写作为后缀名。ARC 格式通常并不怎么有名，因为在处理绝大多数文件时，另一种名为 7z (7-Zip) 的格式已经可以提供很高的压缩率。但如果需要处理非常庞大的文件，动辄十几吉 (GB, gigabyte) 甚至几十吉的文件体积会让 7z 也力不从心，这时候就应该请 ARC 格式助一臂之力了。通过查询维基百科 (Wikipedia) 网站，得知 ARC 格式是 System Enhancement Associates (SEA) 组织的产物，早在拨号网络 (Dial-up) 年代就已出现且被广泛使用，由于版权和商标原因，SEA 和其它公司中间还产生了一些矛盾，但这种格式还是一直流传和演变到现在，恐怕也已经分不清究竟谁才是 ARC 格式的所有者。官方并没有提供很好的压解工具，目前常用的 ARC 制作和释放工具是 FreeArc。相比于其它压缩文件格式，例如 RAR 或 7z 等，ARC 格式在提高压缩率的同时也牺牲了一些有用的特性，比如多卷压缩、储存文件的属性、时间戳、NTFS 流数据等；同时 FreeArc 软件也并不能利用 64 位操作系统的大内存优势，对于一款针对超大文件的处理工具而言，不支持 64 位实属可惜。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        现在最常见到 ARC 格式的地方就是在网上下载的硬盘版游戏中，鉴于大型游戏遵循文件少而大的原则，那些需要通过批处理解压的硬盘版游戏，不是使用 7z 就是用的 ARC。至于 ARC 的其它“广泛使用”，似乎并不怎么多见。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        2\. 视频压缩格式：BIK</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        BIK 格式的全称是 Bink Video，由 RAD Game Tools 提供。BIK 压制的视频拥有极高的清晰度和非常小的文件体积，且无需完整解压即可播放。记得很久之前支持 BIK 的播放器还很少，于是我就打算将 BIK 格式转换成 AVI 以便分享，结果愣是用 19 兆 (M, megabyte) 的 BIK 文件提取出 220 兆的 AVI，从此我吸取经验，再也没打算从 BIK 里面挖任何东西，这个比率真是伤不起啊……BIK 格式比较完善，没有像 ARC 格式那样通过牺牲其它优势而追求压缩比。既可以用播放器直接播放 BIK 视频，也可以通过调用 BinkW.dll 中的 API 在应用程序中实现嵌入的实时解码。RAD Game Tools 是官方唯一的集视频制作、封装、调整、提取为一体的处理工具，但如果只考虑播放的话，普通播放器就可以解决问题。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        BIK 视频也多用于游戏中，甚至可以说它就是为游戏而生的。另外某些压制的高清电影共享时也采用这种格式，但压制 BIK 电影并不普遍。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        3\. 音频压缩格式：M4A / MP4 / AAC</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        也许会有人奇怪，为什么这次出现了两个格式。其实这两个音频格式有着异曲同工之妙，两者根本的编码方式是相同的，为 MPEG-4 AAC 音频编码，只不过在不同场合采用了不同的文件后缀名加以区分。最初，MP4 文件也包含纯音频，不过后来人们发现视频文件也是相同的 MP4 文件，不容易分辨，便将音频改名为 M4A，取 MPEG-4 Audio 之意。也有一些转换工具直接以编码器命名，又出现 AAC 文件。M4A 文件最大的特点就是几乎无损，相比同为 MPEG 编码的 MP3 格式要好的没倍。在不通过机器测试的情况下，可以认为 M4A 就是无损音乐；换个说法，至少人的耳朵听不出来 M4A 比起真正无损音乐损失了什么。因为 MPEG 是一种公开的编码方式，所以从简易的千千静听，到发烧级的 Foobar 200，很多工具都可以制作 M4A 或者 AAC 文件，没有什么官方不官方的软件来推荐。</span>

<span style="font-family: helvetica; font-size: medium;" data-mce-mark="1">        说起 M4A 格式，不得不提一下 Apple 的 iTunes 音乐商店，Apple 不仅很早就开始支持 M4A，还将它投入到商业运营当中。如今做成了全球最大的在线音乐销售平台，可以说也有高质量 M4A 格式的功劳。想做到媲美 CD 的数字音乐，靠 MP3 格式是站不住脚的。</span>

<span style="font-family: helvetica; font-size: medium;">        您可以在 [SkyDrive](http://sdrv.ms/YM8FXX) 查看或下载此文档的 Office Word 与 iWork Pages 副本。</span>