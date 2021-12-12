---
title: Java 原子操作与并发
tags:
  - Atomic
  - Concurrent
  - Java
id: 89
categories:
  - 程序员
date: 2012-09-18 00:00:00
---

由一个简单的例子引出并发处理时容易被忽视的陷阱，用来作为面试问题应该很适合。

某日，工作了 4 年多的 Java 程序员小 K 跳槽，面试时碰到这样一个题目&#8230;.

&nbsp;

<pre class="lang:java decode:1 " >
public class P1 {

    private long b = 0;

    public void set1() {
        b = 0;
    }

    public void set2() {
        b = -1;
    }

    public void check() {
        System.out.println(b);

        if (0 != b &amp;amp;&amp;amp; -1 != b) {
            System.err.println(&quot;Error&quot;);
        }
    }
}
</pre>

** **** **

**问题**

调用 set1()、set2()、check()，会打印出 Error 么？

** **

**小K 的推理**

“无论如何调用 set1()、set2() -&gt; b 的值只可能是 0 或 -1 -&gt; 在 check() 里面的判断条件（b 既不为 0 也不为 -1）永远不成立 -&gt; 不打印 Error”

&nbsp;

小 K 觉得有坑：这题目应该不会这么简单，再考虑一下多线程环境。

&nbsp;

思前想后，小 K 得出结论：“在多线程环境下也不会打印 Error。这题目很简单，就是考察一下推理吧。”，K 暗自窃喜。

&nbsp;

后来小 K 陆续又被问了几个多线程和 JVM 的问题。

后来，就没有后来了&#8230;.

&nbsp;

**后来**

后来还是有的。到家后，不甘心的小 K 验证了这道秒杀他的面试题。

<pre class="lang:java decode:1 " >
public static void main(final String[] args) {
    final P1 v = new P1();

    // 线程 1：设置 b = 0
    final Thread t1 = new Thread() {
        public void run() {
            while (true) {
                v.set1();
            }
        };
    };
    t1.start();

    // 线程 2：设置 b = -1
    final Thread t2 = new Thread() {
        public void run() {
            while (true) {
                v.set2();
            }
        };
    };
    t2.start();

    // 线程 3：检查 0 != b &amp;amp;&amp;amp; -1 != b
    final Thread t3 = new Thread() {
        public void run() {
            while (true) {
                v.check();
            }
        };
    };
    t3.start();
}
</pre>

&nbsp;

<div>

 使用 3 个线程分别重复执行 set1()、set2()、check()。执行输出结果部分如下：

<pre class="lang:plain decode:1 " >
....
0
0
1
1
1
Error
Error
-4294967296
0
0
4294967295
....
</pre>
</div>

_执行环境：_

_    Java(TM) SE Runtime Environment (build 1.6.0_31-b05)_

_    Java HotSpot(TM) Client VM (build 20.6-b01, mixed mode, sharing), 32bit_

&nbsp;

“确实打印了 Error，并且打印了 4294967295、-4294967296。我勒个去，只是啥情况？”

&nbsp;

小 K 决定搞懂其中奥秘，重新审视了题目。以一个专业程序员的严谨，并经过无数次 Google 后&#8230;.他似乎发现了问题所在。

&nbsp;

“这确实是一个并发问题！”

&nbsp;

**分析**

这道题目有两个陷阱，分别考察了对并发执行的理解，以及对 JVM 基础（赋值操作）的掌握。

** **

**陷阱一：并发执行**

并发执行就是多个操作一起执行，CPU 执行不同上下文（可理解为不同线程）发过来的指令。操作系统上层看上去就像是并行处理一样。

&nbsp;

也就是说，在编程语言层面，一个简单的操作同样需要考虑并发问题。

&nbsp;

小 K 首先是栽在了 check() 中的 if 判断上和设值是存在并发的，不能保证 0 != b 这个判断真（此时 b 为 -1）后恰好 b 被赋值为 0 时判断 1 != b。

&nbsp;

除此外，无论 JVM、操作系统、CPU 层面对指令如何优化、重排，最终都是逐一执行单一指令，唯一不同的就是不同层面可能会对执行加以限制，

比如加入_原子操作_，最终保证 CPU 能够完整执行一组指令。

&nbsp;

**陷阱二：JVM 赋值操作**

一些赋值操作不是原子性的。“纳尼？”

&nbsp;

Java 基础类型中，long 和 double 是 64 位长的。32 位架构 CPU 的算术逻辑单元（ALU）宽度是 32 位的，在处理大于 32 位操作时需要处理两次。

&nbsp;

“这不是&lt;计算机组成原理与汇编&gt;么”，小 K 顿时感到大学白上了，不懂学以致用 T_T~

&nbsp;

题目执行打印 4294967295、-4294967296 就是因为读时高 32 位或低 32 位被其他写覆盖了（看一下这两个数字的二进制就知道了）。

&nbsp;

Java 已经是封装底层细节很好的语言了，但依然需要注意这些陷阱，可以使用并发处理包 java.util.concurrent.atomic 中包含了一系列无锁原子操作类型，

也可以使用 volatile 关键字保证线程间变量的可见性。

&nbsp;

其实这道题目只要解决了并发问题，也就保证了每个执行单元（set1()、set2()、check()）中赋值、比较的正确性。可以把同步方法执行看作序列化的事务，各中操作不会相互影响。

&nbsp;

**再后来**

虽然小 K 面试挂了，不过他挂得心服口服。

通过这个期间的不断翻阅文档以及实验，小 K 下次的面试应该不会被类似的题目秒杀了吧&#8230;.

&nbsp;

“按照这个简单面试题的标准，以前写过的程序简直就是通篇 bugs 啊！有木有，有木有啊！！！！”

&nbsp;

**骚年，继续充电吧！**

内外兼修才是好程序员 :-)

&nbsp;

Posted on [http://88250.b3log.org/java-atomic-conncurrent](http://88250.b3log.org/java-atomic-conncurrent)

&nbsp;