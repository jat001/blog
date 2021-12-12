---
title: 一些中文编程语言
tags:
  - 中文
  - 编程语言
  - 草泥马
id: 159
categories:
  - 程序员
date: 2013-02-06 14:48:14
---

我自认为本文不是恶搞，让我们本着严肃认真的精神来审视这些中文编程语言。[![1_thumb](http://bcs.duapp.com/sinosky-blog/2013/02/05/1_thumb.jpg)](http://bcs.duapp.com/sinosky-blog/2013/02/05/1_thumb.jpg "1_thumb")

**<span style="color: #ff0000;">易语言</span>**

[易语言](http://www.dywt.com.cn/)可以说是中文编程语言的老大，拥有独立的编译器。易语言并不是把现存的编程工具进行表面汉化而成的，和其他国外语言相比，&#8221;易语言&#8221;最大的不同是彻底中文化，且拥有自下而上的全部自主知识产权。

易语言的全新版本叫做“易语言.飞扬”，包含垃圾收集机制，是完全面向对象的中文编程语言：

<div>
<div id="highlighter_98229">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
</td>
<td>
<div>
<div>`公开 类 启动类`</div>
<div>`{`</div>
<div>`    ``公开 静态 启动()`</div>
<div>`    ``{`</div>
<div>`        ``控制台.输出(``"你好，世界！"``);`</div>
<div>`    ``}`</div>
<div>`}`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

和其他中文编程语言相比，它是最成熟的，而且同时具备了一套完整的开发环境。

**<span style="color: #ff0000;">习语言</span>**

习语言即中文版的C语言，由一套完备的编程语法和相配套的工具组成，旨在将计算机及软件编程大众化，普及化，中文化，提高程序的维护性而诞生。

<div>
<div id="highlighter_907739">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</td>
<td>
<div>
<div>`公共的 类 你好{`</div>
<div>`    ``公共的 静态的 无类型 主函数(字符串 参数[]){`</div>
<div>`        ``系统.输出.输出字符串并换行(``"你好，世界！"``);`</div>
<div>`    ``}`</div>
<div>`}`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

习语言家族：

*   习语言：中文C语言编程系统
*   习佳佳：中文C++开发伴侣
*   习佳娃：中文Java编程的利器
*   习丽妞：linux系统下的中文编程系统
*   习姐：习语言解释版本
*   习51：51单片机中文开发伴侣
*   中汇：X86中文汇编
*   中文构建工具（中文版的make工具)
*   ……（画外音：看了这些名字，吐了没？）

**<span style="color: #ff0000;">丙正正</span>**

丙正正是一个能令人使用中文开发程序的编译器，提出者为魏泽人。它是中文编程语言的尝试。丙正正会将含有中文的原始码变成可被gcc编译的[C++]原始码，并透过宏定义(#define)，达到完全使用中文开发程序的目的。后期的版本中，编译器 gcc 及除错器 gdb传回的变量名称，也会被翻成中文，以利于除错。

<div>
<div id="highlighter_323373">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
</td>
<td>
<div>
<div>`空 象棋檔::設定註解(字元 *s,整數 n)`</div>
<div>`{`</div>
<div>`    ``若(n &gt;= 最大註解數)`</div>
<div>`        ``對於(;最大註解數 &lt;= n;最大註解數++)`</div>
<div>`    ``註解[最大註解數]=NONE;`</div>
<div>`    ``若(s==NULL 或 字串長度(s)==0)`</div>
<div>`        ``傳回;`</div>
<div>`    ``若(註解[n]!=NONE) `</div>
<div>`        ``刪除 註解[n];`</div>
<div>`    ``註解[n]=新 字元[字串長度(s)+1];`</div>
<div>`    ``字串複製(註解[n],s);`</div>
<div>`}`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

**<span style="color: #ff0000;">PerlYuYan</span>**

PerlYuYan是一个能令人使用中文文言文开发程式 Perl 程式的 Perl 模组，由唐凤于2002年一月发表，只花了两个小时就实作完成。它是中文编程语言的尝试。作者利用中文的特质，将许多指令改成以一个中国汉字来表示，因而造成了文言语法的感觉。

<div>
<div id="highlighter_489652">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
</td>
<td>
<div>
<div>`# The Sieve of Eratosthenes - 埃拉托斯芬篩法`</div>
<div>`use Lingua::Sinica::PerlYuYan;`</div>
<div>` `</div>
<div>`  ``用籌兮用嚴。井涸兮無礙`</div>
<div>`。印曰最高矣  又道數然哉。`</div>
<div>`。截起吾純風  賦小入大合。`</div>
<div>`。習予吾陣地  並二至純風。`</div>
<div>`。當起段賦取  加陣地合始。`</div>
<div>`。陣地賦篩始  繫繫此雜段。`</div>
<div>`。終陣地兮印  正道次標哉。`</div>
<div>`。輸空接段點  列終註泰來。`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

**<span style="color: #ff0000;">中蟒</span>**

[中蟒](http://www.chinesepython.org/)是一套基于Python即时编译语言的中文编程语言。除了保留字，变量名称可用中文外，很多内建数据类型的操作都可用中文來进行。

<div>
<div id="highlighter_879402">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
</td>
<td>
<div>
<div>`#!/usr/local/bin/cpython`</div>
<div>`回答 = 讀入(``'你認為中文程式語言有存在價值嗎 ? (有/沒有)'``)`</div>
<div></div>
<div>`如 回答 == ``'有'``:`</div>
<div>`    ``寫 ``'好吧, 讓我們一起努力!'`</div>
<div>`不然 回答 == ``'沒有'``:`</div>
<div>`    ``寫 ``'好吧,中文並沒有作為程式語言的價值.'`</div>
<div>`否則:`</div>
<div>`    ``寫 ``'請認真考慮後再回答.'`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

**<span style="color: #ff0000;">周蟒</span>**

周蟒，又名zhpy，是一个轻量的，与Python 语言互相兼容的中文Python 语言。让使用者可以使 周蟒用纯中文语句（繁体或简体）来编写程式。目前主要适用于教学上。

<div>
<div id="highlighter_656655">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
</td>
<td>
<div>
<div>`#!/usr/bin/env zhpy `</div>
<div>`# 档名：while,py `</div>
<div>`数字 = 23 `</div>
<div>`运行 = 真 `</div>
<div>`当 运行: `</div>
<div>`猜测 = 整数(输入(``'输入一个数字: '``)) `</div>
<div>`如果 猜测 == 数字: `</div>
<div>`印出 ``'恭喜, 你猜对了.'`</div>
<div>`运行 = 假 # 这会让循环语句结束 `</div>
<div>`假使 猜测 &lt; 数字: `</div>
<div>`印出 ``'错了, 数字再大一点.'`</div>
<div>`否则: `</div>
<div>`印出 ``'错了, 数字再小一点.'`</div>
<div>`否则: `</div>
<div>`印出 ``'循环语句结束'`</div>
<div>`印出 ``'结束'`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

**<span style="color: #ff0000;">O语言</span>**

O语言是一款中文计算机语言（或称套装），包括O汇编语言、O中间语言和O高级语言等，其中窗口设计、界面描述语言、O中间语言已经能很好的整合在一起。

O中间语言可以说是汇编语言的抽象，它和汇编语言一样，使用单句的语法，除了基本的条件句和函数调用外，基本的一条指令对应一条语句，因此，它比C语言在语法上更低级一些。这样设计的目的是为了保持底层足够大的灵活性，使前端代码比较容易地映射到中间语言。C语言毋庸置疑是很强大，Pascal语言也非常强大，但是你很难将两者代码进行相互转换，如果使用中间语言作为中间层，就能够兼容两者的语法。

<div>
<div id="highlighter_814385">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</td>
<td>
<div>
<div>`.包含文&lt;*视窗32.omh&gt;`</div>
<div>`入口 主函数()`</div>
<div>`{`</div>
<div>`    ``MessageBox(0,&amp;``"Hello,World!"``,&amp;``""``,0);`</div>
<div>`    ``ExitProcess(0);`</div>
<div>`}`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

**<span style="color: #ff0000;">中文培基</span>**

中文培基是Basic语言的中文本地化版本（八十年代初就有了，不可思议吧，可是，第一门中文编程语言其实从七十年代就有了，平台是DOS）。

<div>
<div id="highlighter_471210">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</td>
<td>
<div>
<div>`10 卜=0`</div>
<div>`20 入 水, 火`</div>
<div>`30 從 日 = 水 到 火`</div>
<div>`40 卜 = 卜+對數(日)`</div>
<div>`50 下一 日`</div>
<div>`60 印 卜`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

翻译一下：

<div>
<div id="highlighter_127372">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
</td>
<td>
<div>
<div>`10 Y=0`</div>
<div>`20 INPUT E, F`</div>
<div>`30 FOR A = E TO F`</div>
<div>`40 Y = Y + LOG (A)`</div>
<div>`50 NEXT A`</div>
<div>`60 PRINT Y`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

其实，中文perl、中文Pascal、中文Cobol、中文LOGO和中文Basic这些明显的本地化语言都是有的。

我觉得中文编程语言可以按照中文的深度这样两种：

1.  本地化其它编程语言。比如上文介绍过的“丙正正”（题外话：为什么叫“丙正正”呢？因为原语言叫“C++”嘛……）。
2.  汉语内核语言。包括“易语言”等。这种语言才能说是一门“真正的语言”，要不然只能说是语言+一个汉化包而已……

最后，来看一个轻松一点的，嘿嘿。

**<span style="color: #ff0000;">草泥马语</span>**

[草泥马语](http://code.google.com/p/grass-mud-horse/)是马勒戈壁第一款拥有自主知识产权的，以马勒戈壁上顽强生存的草泥马们为主体的编程语言。草泥马语语法生动丰富，内容健康活泼，是一门老少皆宜，人人适用的编程语言。它的出现弥补了我戈壁在国际编程语言界中的一项空白。

草泥马语是用了先进的JOT（Just Out of Time）编译引擎，并且运行于爪哇虚拟机中，运行速度大幅度降低同时，还使用了戈壁内外各种先进技术，使的草泥马语不十分可靠。实现上，草泥马语是一款根据国外同类型语言“Whitespace”改编（替换关键字）而成的全新的编程语言，执行时使用“草泥马”的不同组合实现不同功能，关键字只有这几个：“草”、“泥”、“马”和“河蟹”，其它字符全部都被当做注释。

<div>
<div id="highlighter_916465">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
</td>
<td>
<div>
<div>`草草草泥马 马草草草泥草草草草泥泥马 草马草 泥马草泥 草草草泥草泥草马 泥马草草 草草草泥马 泥草草草 草马草 草草草泥草泥泥马 泥草草泥 马泥草草泥草草草泥草泥马 马草马草泥草草草草泥泥马 马草草草泥草草草泥草泥马 草马马 马马马`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

这就是一个从1到10的循环来输出这十个数而已。

另外，和“草泥马”语达成谅解备忘的还有这种中文化的标记语言（所以严格说它不能算是编程语言）——

**<span style="color: #ff0000;">CHTML</span>**

[CHTML](http://code.google.com/p/chtml/)是国际互联网组织W3C超文本标记语言4.0的一个实现（dtd[在此](http://chtml.googlecode.com/svn/trunk/chtml.dtd)）。是在汉语编程光辉思想的指导下，互联网普遍协议与中国国情相结合的产物。他的名字在中文叫“中文版如何做爱”（Chinese How To Make Love）。和汉语编程一样，原来使用英文的标签现在可以全部使用中文；除此之外, 还额外扩展了两个标签，即<tt>&lt;反功夫网&gt;</tt>和<tt>&lt;勾&gt;</tt>。除此以外，该协议和现有 HTML 标准完全兼容。

<tt>&lt;勾&gt;</tt>是和中国国情结合的产物。有时候我们需要创建只有一个答案的投票，此标签即可用于及时丢弃用户投票，节省服务器资源，彰显社会主义优越性。

<tt>&lt;反功夫网&gt;</tt>是著名的CAPTCHA系统的浏览器实现。所以在此标签中的元素都变成CAPTCHA。从而人可以顺利阅读，而机器不能。此标签对人和搜索引擎都无害，但可以透明飞跃长城。技术细节还在讨论当中。

<div>
<div id="highlighter_236976">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
<div>17</div>
<div>18</div>
<div>19</div>
<div>20</div>
<div>21</div>
</td>
<td>
<div>
<div>`&lt;省部级标题&gt;`</div>
<div>`    ``贵州省新闻办举行发布会公布`</div>
<div>`        ``&lt;反功夫网&gt;`</div>
<div>`            ``某某`</div>
<div>`        ``&lt;/反功夫网&gt;`</div>
<div>`    ``事件真相`</div>
<div>`&lt;/省部级标题&gt;`</div>
<div>`&lt;县处级标题&gt;`</div>
<div>`    ``2008-07-01 19:56:38来源, 新华网`</div>
<div>`&lt;/县处级标题&gt;`</div>
<div>`&lt;列举&gt;`</div>
<div>`    ``核心提示：7月1日晚上19点40分，XX新闻办公室举行新闻发布会，公布`</div>
<div>`        ``&lt;反功夫网&gt;`</div>
<div>`            ``某某`</div>
<div>`        ``&lt;/反功夫网&gt;`</div>
<div>`            ``事件真相。`</div>
<div>`        ``&lt;反功夫网&gt;`</div>
<div>`            ``某某`</div>
<div>`        ``&lt;/反功夫网&gt;`</div>
<div>`    ``县社会秩序基本恢复。`</div>
<div>`&lt;/列举&gt;`</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

从[这里](http://code.google.com/p/chtml/wiki/Examples)你可以找到一些官方的例子。

&nbsp;

Posted on [http://www.raychase.net/758](http://www.raychase.net/758)