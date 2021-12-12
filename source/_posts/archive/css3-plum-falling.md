---
title: CSS3梅花飘落
tags:
  - css3
  - Fall leaves
  - wordpress
  - 梅花
id: 75
categories:
  - 互联网
date: 2013-01-18 11:11:09
---

寒冬来临，为了应景，我在博客右侧放了一朵梅花， 光有梅花， 不见飘雪，如何是好。

于是有了博客右侧的东东, 不过只支持Webkit、Firefox、Opera，不支持IE。

[![snap038](http://bcs.duapp.com/sinosky-blog/2013/01/07/snap038.png)](http://bcs.duapp.com/sinosky-blog/2013/01/07/snap038.png "snap038")

主要参考了 [Fall leaves](http://www.webkit.org/blog-files/leaves/)，加了firefox和opera的支持。<del datetime="2012-12-15T00:04:20+00:00">

</del>

**使用方法：**

*   1.将leaves.js leaves.css images文件夹 放在同一目录下;
*   2.在头部或者底部引入leaves.css;
*   3.在底部引入leaves.js

leaves.js我重新修改过, 提供两个参数:num, id

*   1.num 为梅花数量;
*   2.id 位包含梅花的div的id;

修改办法如下: new FallingLeaves(15, &#8220;domid&#8221;); 要说一下的是修改了数量, 图片也要对应的增加.

下载地址:  [本地下载](http://bcs.duapp.com/sinosky-drive/2013/01/11/a9a9f2c25384718670e528385d741f78.zip) [

](http://pan.baidu.com/share/link?shareid=171809&amp;uk=1058557179)