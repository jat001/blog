---
title: 给 C++ 初学者：简易化 Windows 7/8 风格 MessageBox Header
tags:
  - C++
  - Windows
  - 初学者
id: 932
categories:
  - 程序员
date: 2014-04-06 13:11:37
---

_不定期更新，给 C++ 初学者的福利。_

&nbsp;

谁说编程初学者就不能做出美丽、优秀的程序了？<span style="color: #000000;"><del>当然，只用今天这个做出来的程序充其量也就算美丽……至于优秀吗，请等更新。</del></span>

今天新鲜上架的是 MessageBox-7，简易化 Windows 7/8 风格的提示窗口。已经有年数的 MessageBox 在新版 Windows 上调用出来简直不堪入目，Windows Vista 以上系统微软推荐使用的是 Task Dialog，不过想做出来一个像模像样的 Task Dialog 可是比一句话搞定的 MessageBox 难了 N 倍不止。

我就把 Task Dialog 简单化了一下，使初学者能够很轻松地（似乎比 MessageBox 还简单）调出功能强大的提示窗口。

<del>资深程序猿会发现里面混杂着各种不专业和各种缺失，给点儿面子，勿喷！</del>

&nbsp;

仅适用于 Windows，特此声明。上链接：[Windows 7 风格 MessageBox 附件下载](/uploads/2014/04/C++-Win7-Style-MsgBox-by-Yi-Ding.zip)

&nbsp;

FAQ:

1.  **不知道怎么用？**你确定你是“初学者”而不是“未学者”？友情提示，这就是个普通的头文件（翻译 by 维基百科）。
2.  **Demo 太好玩了，我可以直接覆写/修改吗？**千万别，这仅仅是个示范。在命令提示符中调用 Windows 窗口是非常非常坏的注意。习惯无图形化操作的用户用了你的程序会和小伙伴一起惊呆的。
3.  **此文件是否会保持更新？**看情况吧。其实目前用用就足够，我是业余，不会把大把时间用这上面。