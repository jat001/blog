---
title: Pythonic到底是什么玩意儿？
tags:
  - Python
  - 程序员
id: 109
categories:
  - 程序员
date: 2012-05-18 12:50:37
---

_作者：Martijn Faassen_

_译者：赖勇浩（http://blog.csdn.net/lanphaday）_

_原文地址：http://faassen.n&#8211;tree.net/blog/view/weblog/2005/08/06/0_

_注：Martijn 是 Zope 领域的专家，他为 Zope 系列产品做了许多开发工作，也开发了 lxml 等多个开源产品。你可以在这里了解一下他的信息http://www.zope.org/Members/faassen。这篇文章写于 2005 年，虽然有少部分内容（主要是例子）看起来已经有些过时，但即便是在今天，它的中心思想依然有极高的指导意义。_

&nbsp;

这是几个月前在 EuroPython 邮件列表（主要用来组织和计划 EuroPython 会议的邮件列表）出现的问题。这是一个非常有意思的问题，我看到这个词被无数次地使用，但鲜有人尝试解释它的含义。在这条线索之后，许多不同的人，包括我自己，都给出了自己的答案。现在我把我的答案放到博客上，并且润色了一下，希望它能对您有所增益。

Pythonnic 是一个模糊的概念，尽管没有“智能”或“生命”那么模糊，但当你尝试定义它们的时候，就像去抓住一条滑溜溜的泥鳅一样无从下手。可是虽然它们难以定义，然而并不意味着它们没用，因为事实上人们其实极善于利用混乱的定义。Pythonic 有点像“Python惯用法”的意味，现在让我们来聊聊它真正的含义。

随着时间的推移，Python语言不断演进，社区不断成长，涌现了许多关于如何正确地使用 Python 的 ideas。一方面 Python 语言推荐使用大量的惯用法来完成任务（“完成任务的唯一方法”），另一方面，社区不断演变的新的惯用法的又反过来影响了语言的进化，以更好地支持惯用法。比如新进入的字典的 .get() 方法，它把 has_key() 和元素存取两个操作组合为一个操作，从中可以看出这种进化。

惯用法往往不能直接从其它编程语言移植过来。如下文是实现对一个序列里的每个元素执行一个操作的 C 语言实现：

<pre class="lang:python decode:1 " >
for (i=0; i &lt; mylist_length; i++) {

   do_something(mylist[i]);

}
</pre>

直接的等效 Python 代码是这样的：

<pre class="lang:python decode:1 " >
i = 0

while i &lt; mylist_length:

   do_something(mylist[i])

   i += 1
</pre>

这段代码能够完成工作，但并不 Pythonic，它并不是 Python 语言推荐的惯用法。让我们来改进一下。典型的 Python 惯用法是用内置的 range() 函数生成所有的序列下标：

<pre class="lang:python decode:1 " >
for i in range(mylist_length):

   do_something(mylist[i])
</pre>

其实这种实现也并不 Pythonic，接下来大家看看语言推荐的实现方式，真正 Pythonic 实现：

<pre class="lang:python decode:1 " >
for element in mylist:

   do_something(element)
</pre>

“如何直接传递或改变引用”是comp.lang.python 的“月经贴”，但在只有赋值（import、class、def 等语句也可视为赋值）的 Python 中这是不可能的。这种需求通常是因为想让函数返回多个值，用 C 或者许多其它编程语言的方法是给这个函数传入引用或指针：

<pre class="lang:python decode:1 " >
void foo(int* a, float* b) {

    *a = 3;

    *b = 5.5;

}

...

int alpha;

int beta;

foo(&amp;alpha, &amp;beta);
</pre>

在 Python 中可以用很囧很恶心的方法来实现：通过给函数传递序列参数来返回结果。写出来的代码可能像这样：

<pre class="lang:python decode:1 " >
def foo(a, b):

    a[0] = 3

    b[0] = 5.5

alpha = [0]

beta = [0]

foo(alpha, beta)

alpha = alpha[0]

beta = beta[0]
</pre>

显然这是毫无 Pythonic 可言的实现。Python 中让函数返回多个值的惯用法与此迥异，得益于元组和元组解包，它看起来也要漂亮得多：

<pre class="lang:python decode:1 " >
def foo():

    return 3, 5.5

alpha, beta = foo()
</pre>

在经验老到的 Python 程序员看来，不够 Pythonic 的代码往往看起来古怪而且累赘，过于冗余也难以理解。因为它使用冗长的代码代替常见的、公认的、简短的惯用法来实现预期效果。更甚于此的是在语言支持正确的惯用法之后，非推荐的代码通常执行起来更慢。

Pythonic 就是以清晰、可读的惯用法应用Python 理念和数据结构。举个例子，应该多使用动态类型，在无必要之处引入静态类型就走向了另一端。另外也要避免使用经验丰富的 Python 程序员不熟悉的方式去完成任务（即遵循最小惊奇原则）。

Pythonic 一词也能够适用于底层的惯用法。一个 Pythonic 的库或框架能使程序员更加容易、更加自然地学会利用它来完成任务。如果用 Python 编写的库或框架迫使程序员编写累赘的或不推荐的代码，那么可以说它并不Pythonic。也许可能是为了使这个库更加方便、易懂，而没有应用 Python 的一些理念，如类等，那也是不 Pythonic 的。类定义应当尽可能地实现信息隐藏，虽然 Python 的许多操作都只作“宽松限制”（通常由程序员在属性的前面加上一个下划线来暗示这是私有成员），但也要做得像 Java 那样严格。

当然，当规模很大的时候，它是否 Pythonic 就极具争议性了。这里给出一些参考条款：如减少冗余，Python 的库与 APIs 都倾向于小型化和轻量化（相对于 java 程序库而言）。重量级的、API过于细化的的Python 库并不 Pythonic。比如 W3C XML DOM API，尽管它的 Python 实现已经颇有时日，但大家并不认为它 Pythonic。有些人认为它是 Java 式的，虽然也有许多 Java 程序员认为并不如此。

一个Pythonic的框架不会对已经用惯用法完成的东西重复发明轮子，而且它也遵循常用的 Python 惯例。

当然，问题是构建框架时肯定会不可能避免地引入一些你不熟悉的模式和方法。Zope2 是我极为熟悉的一个框架，它也是一个引入了许多完成工作的特定的方法（如 Acquisition）的例子，这些方法往往什么地方都用不到，因此许多经验丰富的 Python 程序员认为它并不 Pythonic。

创建 Pythonic 的框架极其困难，什么理念更酷、更符合语言习惯对此毫无帮助，事实上这些年来优秀的 Python 代码的特性也在不断演化。比如现在认为像 generators、sets、unicode strings 和 datetime 之类的特性尤为 Pythonic。Zope2 的历史悠久，它从1997年开始开发，你不能把不够 Pythonic 归咎于它，甚至考虑到这么多年来它控制得如此之好，更应该感谢它。

关于 Pythonicness 的新趋势的一个例子是Python 的包和模块结构日益规范化。新的代码库如 Twisted、Zope3 和 PyPy 等或多或少都跟随了这样的潮流：

包和模块的命名采用小写，单数形式，而且短小。

包通常仅仅作为命名空间，如只包含空的 __init__.py 文件。

在我写库（如 lxml）的时候也遵循了这样的惯例。

因为更多人认为一个 Python 程序员容易学习的功能不那么强大的框架比一个需要大量时间来学习的强大系统更为 pythonic。所以有时我认为宣称软件不够 Pythonic 不公平，甚至可能会因此而掩盖了该软件积极的一面。

最后，作为什么是 Pythonic 的扩充材料，可以尝试一下在 Python 解释器里执行如下语句：

<pre class="lang:python decode:1 " >
import this
</pre>

&nbsp;

Posted on [http://blog.csdn.net/lanphaday/article/details/2762251](http://blog.csdn.net/lanphaday/article/details/2762251)