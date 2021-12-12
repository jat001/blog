---
title: Sublime Text 3 Build 3059 破解
tags:
  - Sublime Text
  - 汇编
  - 破解
  - 逆向
id: 757
categories:
  - 应用软件
date: 2013-12-20 01:49:17
---

Sublime Text 3 Build 3059 更新了很多功能，但在加密上也增加了难度。

我的思路大体上没有错，关键 call 也找对了，可是破解的方法还停留在修改跳转上。

&nbsp;

从[看雪论坛](http://bbs.pediy.com)上找到了一份[破解](http://bbs.pediy.com/showthread.php?t=182774)，尊重作者，就不直接放下载链接了。

[![2013-12-19_ST3059](/uploads/2013/12/2013-12-19_ST3059.png)](/uploads/2013/12/2013-12-19_ST3059.png)

虽然我没有跑破解后的文件，不过根据截图和作者的描述来看，他是把所有有验证注册地方的跳转全改了，即验证通过跳转、不通过不跳转都改成跳转，验证通过不跳转、不通过跳转都改成不跳转，而真正验证的地方没有改。

换句话说就是不能只用十六进制编辑器改一个字符就完了，从破解的角度来说也不是很完美。

&nbsp;

对于有一定基础、对破解这个软件有兴趣的同学可以看[这个](http://bbs.pediy.com/showthread.php?t=172084)和[这个](http://bbs.pediy.com/showthread.php?t=172089)帖子，阐述了作者的思路，也就是寻找关键 call。

对于想了解破解而又不想学汇编的同学可以看下这个[帖子](http://bbs.pediy.com/showthread.php?t=130403)，讲解了一些基本知识。

&nbsp;

**Update**:

找到了另一份[破解](http://ihacklog.com/post/sublime-text-3-build-3059.html)，这份破解比上面的要好。可惜作者没写思路，我对反汇编又一窍不通，不过通过比较，找到了作者修改的地方。

[![sublime-origin](/uploads/2013/12/sublime-origin.png)](/uploads/2013/12/sublime-origin.png)

[![sublime-cracked](/uploads/2013/12/sublime-cracked.png)](/uploads/2013/12/sublime-cracked.png)

从图中可以看到，`00256C8B` 显然就是关键 call，`0025571F` 就是验证 license 的地方，`256C90` 传递验证结果，所以只要把这里的验证结果改成始终是成功，也就是传递 1，就可以了。

当然，license 必须符合规律才能通过最初的验证，详细可以看该作者的[另一篇文章](http://ihacklog.com/post/sublime-text-3-x64-build-3021-medicine.html)。

&nbsp;

再来看看 OS X 下的，如图。`SETNZ` 等于 `SETNE`，不等于则一或非零则一，`SETZ` 等于 `SETE`，等于则一或零则一。

<div class="clearfix" style="width: 710px; margin: 0 auto;">
[![sublime_osx_origin](/uploads/2013/12/sublime_osx_origin.png)](/uploads/2013/12/sublime_osx_origin.png)[![sublime_osx_cracked](/uploads/2013/12/sublime_osx_cracked.png)](/uploads/2013/12/sublime_osx_cracked.png)
</div>

&nbsp;

Linux 下与 Windows 下基本一致，不再贴了。

&nbsp;

虽然原来的 [keygen](/sublime-text-crack.html) 不能用了，但你可以使用 keygen 生成 license，然后把破解后的程序覆盖到原始文件上，最后输入生成的 license。

&nbsp;

**相关资料**：

*   [x86 指令列表](https://en.wikipedia.org/wiki/X86_instruction_listings)
*   [x86 汇编常用指令](http://www.zhangxiaodong.net/lang/asm/x86asm.html)