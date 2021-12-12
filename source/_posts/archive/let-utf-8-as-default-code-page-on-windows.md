---
title: 让 CMD 默认使用 UTF-8 编码
tags:
  - Windows
  - CMD
id: 20160912
categories:
  - 小技巧
date: 2016-09-12 00:02:00
---

使用 Windows 开发的小伙伴们（不要问我为什么不用 Mac……）应该都知道，中文版 Windows 上的 CMD 默认使用 cp936（你用记事本另存为 ANSI 编码其实跟这个编码是一样的），根据巨硬的[定义](https://msdn.microsoft.com/en-us/library/windows/desktop/dd317756.aspx)（其实是 IBM 定的，有兴趣的可以去看[维基百科](https://en.wikipedia.org/wiki/Code_page)），它代表 gb2312（话说巨硬自己都知道应该使用 Unicode，为什么还不改 CMD 的默认编码……）。

可能有些小伙伴也知道，使用 `CHCP` 命令可以查看和修改当前的 code page，但是每次打开 CMD 都打一遍命令实在是太麻烦了，有什么更好的办法呢？还真有。

`HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor\Autorun`（当前用户）或 `HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor\Autorun` （全局）可以控制每次打开 CMD 运行的命令或批处理文件，跟 Unix 里的 `~/.bashrc` 作用一致。我们只需要把它设置成批处理文件的路径（记得用 `\\` 而不是 `\`）或一行命令就好了。

![让 CMD 默认使用 UTF-8 编码](/uploads/2016/09/let-utf-8-as-default-code-page-on-windows-1.png)

![让 CMD 默认使用 UTF-8 编码](/uploads/2016/09/let-utf-8-as-default-code-page-on-windows-2.png)
