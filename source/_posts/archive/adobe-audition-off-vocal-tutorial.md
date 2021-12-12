---
title: Adobe Audition 简易人声提取
tags:
  - Adobe Audition
  - 教程
id: 564
categories:
  - 小技巧
date: 2013-10-29 12:50:39
---

Adobe Audition 是 Adobe 出品的音频软件。也许有人从未听过 Audition 的名号，但也应该对它的老祖宗有印象——CoolEdit，这可是新课标初高中信息技术课程的内容…… CoolEdit 被 Adobe 收购后改名 Adobe Audition，在对外出售时算作 Adobe Premier 的附加套件，但由于其音频处理功能相对独立，各大网站一般把它当成了独立组件提供。目前最新版本是 Adobe Audition Creative Cloud (6.0.732)，仅适用于 64 位 Windows 或 Macintosh 操作系统。

&nbsp;

Adobe Audition 能够很好地分离人声 (vocal) 与背景音乐 (score)，这已经成了它的内置 (preset) 功能。随意导入一首含演唱片段的歌曲，在效果器 (effects rack) 里选取预设的“卡拉 OK 机器 (Karaoke Machine)”，播放歌曲便可以去除大部分演唱声音。再进一步，还可以在“立体声成像 (Stereo Imagery)”菜单下的“中置声道提取 (Center Channel Extractor)”对话框里指定演唱者性别，甚至允许手动调节频率过滤器以获得更佳清晰度。

很多时候，背景音乐并不是我们需要的（即使需要，也可以在各种翻唱网站找到伴奏带）。我们需要提取演唱者本人的声音。啊哈，这听起来似乎比消除声音更不靠谱，因为不同乐器有着完全不同的频率和音色，过滤全部乐器比起过滤人类的演唱还要复杂。也许我们可以换一种思路，直接留下过滤出的人声不是更好吗？

&nbsp;

首先准备一首流行歌曲，然后寻找质量较高的伴奏带。伴奏所用的乐器必须与原始歌曲相同，因此 YouTube 和 SoundCloud 上各种由爱好者自己演奏的曲风各异的音频就可以省去了。如果官方在 CD 中提供某首歌曲的 Instrumental 或 Off-vocal 版本，恭喜你，这是最佳选择！为了不破坏原始音频文件，需要在 Audition 的“文件”菜单中选择“追加打开”&gt;“至新文件”：

[![帮助图片](//www.sinosky.org/uploads/2013/Open.png)](//www.sinosky.org/uploads/2013/Open.png)

然后选取原始演唱音频，随后重复此操作并选取伴奏音频文件。待全部文件载入完成后，点击“复合音轨”按钮新建多轨会话，指定保存名称和路径后确认即可：

[![帮助图片](//www.sinosky.org/uploads/2013/Multitrack.png)](//www.sinosky.org/uploads/2013/Multitrack.png)

将左侧两个音频分别拖入多轨界面的不同音轨中。考虑到原唱与伴奏在时间上并不一定完全吻合，如有需要，在多轨界面选取曲目中明显音量变化处对其音轨：

[![帮助图片](//www.sinosky.org/uploads/2013/Drag.png)](//www.sinosky.org/uploads/2013/Drag.png)

[![帮助图片](//www.sinosky.org/uploads/2013/Alignment.png)](//www.sinosky.org/uploads/2013/Alignment.png)

[![帮助图片](//www.sinosky.org/uploads/2013/Done.png)](//www.sinosky.org/uploads/2013/Done.png)

试听直至确保音轨几乎完全重合后便进行最关键的一步。双击伴奏音轨，在“效果”菜单中选取“反转”，等待片刻后再次进入多轨界面：

[![帮助图片](//www.sinosky.org/uploads/2013/Invert.png)](//www.sinosky.org/uploads/2013/Invert.png)

[![帮助图片](//www.sinosky.org/uploads/2013/Mirror.png)](//www.sinosky.org/uploads/2013/Mirror.png)

此时上下音轨的左右声道分别呈现明显对称趋势。如有需要，再次放大微调至音轨对齐：

[![帮助图片](//www.sinosky.org/uploads/2013/Final.png)](//www.sinosky.org/uploads/2013/Final.png)

播放歌曲，就只剩下演唱声音了。当然，背景音乐是否能完美消除，还取决于两段音频的背景音匹配程度以及音频质量。

几步简单的操作能够做到这样，对于非专业需求来说想必已经足够。