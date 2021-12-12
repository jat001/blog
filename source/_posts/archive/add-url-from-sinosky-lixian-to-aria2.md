---
title: 从 SinoSky 离线下载直接添加资源到 ARIA2
tags:
  - Aria2
  - SinoSky
  - YAAW
  - 离线下载
id: 34
categories:
  - 教程
date: 2013-05-03 20:52:30
---

一个月前提了个 [issue](https://github.com/binux/lixian.xunlei/issues/40) 给 Binux，希望可以增加一个 aria2 RPC  模式的导出功能，可一个月过去了，毫无动静，看来他是不想做了。由于本人的前端不太好（其实后台也是个半吊子），无法自己实现这个功能，只能转篇他写的文章给有需要的同学了。

&nbsp;

首先参照 YAAW 以 RPC 模式启动 ARIA2，保证 YAAW 能正常工作。

在 SinoSky 离线下载中随便点开一个一个资源 &gt; 批量下载。**右键点击** 自定义，填入以下脚本（注意需要替换 JSONRPC_PATH，和 YAAW 中的一样）：

<pre class="lang:javascript " >
function to_aria2(taskname, links, cookie) {
  $.getScript("https://gist.github.com/binux/3116833/raw/aria2jsonrpc.js", function() {
    var aria2 = new ARIA2("<your rpc path>");
    $.each(links, function(i, n) {
      aria2.addUri(n.url, {out: n.title, header: 'Cookie: '+cookie});
    });
  });

  var str = "";
  str += "taskname = "+taskname+"\n";
  str += "cookie = "+cookie+"\n";
  str += "==========================\n";
  $.each(links, function(i, n) {
    str += "links["+i+"].title = "+n.title+"\n";
  });
  return str;
}
</pre>

点击保存，点自定义，到 YAAW 中看是否添加成功了吧。

&nbsp;

填完这几个坑，得学学 JavaScript 去了……

Posted on [http://blog.binux.me/2012/07/add_url_from_loli-lu_to_aria2/](http://blog.binux.me/2012/07/add_url_from_loli-lu_to_aria2/)

&nbsp;

**Update**:
这个坑已经填了，先设置好 Aria2 JSON-RPC 模式的 path 路径，然后使用 YAAW 模式导出。