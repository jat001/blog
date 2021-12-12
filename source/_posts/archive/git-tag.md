---
title: '[Git] 版本控制: 如何使用標籤(Tag)'
tags:
  - git
  - Github
id: 16
categories:
  - 程序员
date: 2012-09-18 02:45:00
---

            

[Git](http://git-scm.com/) Tag 功能就如同 Cvs Tag 是一樣的，您可以在專案裡面隨意新增 Tag，方便您紀錄訊息，底下一些基本的操作來學習如何使用標籤(Tag)功能(新增標籤、以及各種不同類型標籤之間的差別)。

### 列出既有標籤

直接使用 git tag 即可

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git tag -l

v0.1

v1.3</div>
</div>

如果整個專案過多 Tag 也可以透過底下方式搜尋出來

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git tag -l &#8217;v1.4.2.*&#8217;

v1.4.2.1

v1.4.2.2

v1.4.2.3

v1.4.2.4</div>
</div>

### 新增標籤

-a 就是標籤名稱，-m 代表該標籤說明

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git tag -a v1.4 -m &#8217;my version 1.4&#8242;

$ git tag

v0.1

v1.3

v1.4</div>
</div>

可以使用 git show 來顯示該標先說明以及同時 commit 的資料

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">

tag v1.0

Tagger: Bo-Yi Wu &lt;appleboy.tw AT gmail.com&gt;

Date:   Thu Nov 18 12:09:44 2010 +0800

PHP Plurk API version 1.6.2

commit a30c79cf2ebaf5a66ea79852ac195bc828552a2d

Author: Bo-Yi Wu &lt;appleboy.tw AT gmail.com&gt;

Date:   Fri Nov 12 13:51:29 2010 +0800

update README and edit logs/index.htm

</div>
</div>

也可以針對很久以前 Commit 的資料進行標籤

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git log &#8211;pretty=oneline

a30c79cf2ebaf5a66ea79852ac195bc828552a2d update README and edit logs/index.htm

77b54912cf6a21c96715b22c74694effed1b1f56 fixed: plurk cookie error

8ddb59176633e9e161835dcceaf453ee4f203bc3 update /API/Users/getKarmaStats

c7dffde325d8ab543f92286bb98c7263e52d6711 transfer tab to space

aa5a300028c3c34be034fc44c1a6caeeb43852e7 transfer tab to space

7c5f24d99e319d4300d3eade533f65ecbe1976dc update to 1.6.1</div>
</div>

選擇您要的標籤

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git tag -a v1.2 7c5f24d</div>
</div>

### 上傳標籤到遠端

git push 並不會把標籤上傳到遠端，所以必須透過底下才行

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git push origin v1.5

Counting objects: 50, done.

Compressing objects: 100% (38/38), done.

Writing objects: 100% (44/44), 4.56 KiB, done.

Total 44 (delta 18), reused 8 (delta 1)

To git@github.com:schacon/simplegit.git

* [new tag]         v1.5 -&gt; v1.5</div>
</div>

如果在本機端很多標籤，利用 –tags 一次上傳上去

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git push origin &#8211;tags

Counting objects: 50, done.

Compressing objects: 100% (38/38), done.

Writing objects: 100% (44/44), 4.56 KiB, done.

Total 44 (delta 18), reused 8 (delta 1)

To git@github.com:schacon/simplegit.git

* [new tag]         v0.1 -&gt; v0.1

* [new tag]         v1.2 -&gt; v1.2

* [new tag]         v1.4 -&gt; v1.4

* [new tag]         v1.4-lw -&gt; v1.4-lw

* [new tag]         v1.5 -&gt; v1.5</div>
</div>

### 遠端刪除 Tag from remote Git repositories

只需要一行指令就可以了

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">git push origin :refs/tags/my_tag</div>
</div>

如果是還沒有送到 remote Git repositories 上的，可以使用 git 指令刪除

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">git tag -d &lt;tagname&gt;</div>
</div>

### 標籤其他功能

針對第 v2.5 跟其他 commits 名稱做比對

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git diff v2.5 1b2e1d63ff</div>
</div>

比較現在與 v2.5

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git diff v2.5 HEAD</div>
</div>

開一個以 v.25 當作基底的 branch

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git branch stable v2.5</div>
</div>

搜尋 v.25 裡面是否有 hello 字串

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git grep &#8221;hello&#8221; v2.5</div>
</div>

觀看 v2.5 版本的 Makefile

<div style="padding: 0px; margin: 0px 0px 10px; font-size: 13px; font-family: Monaco, 'Lucida Console', monospace; border: 1px solid #9F9F9F; background-color: #f1f1f1;">
<div style="padding: 5px; margin: 0px;">$ git show v2.5:Makefile</div>
</div>

&nbsp;

Posted on [http://blog.wu-boy.com](http://blog.wu-boy.com/2010/11/git-%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%A8%99%E7%B1%A4tag/)