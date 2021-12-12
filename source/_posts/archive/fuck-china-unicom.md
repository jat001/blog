---
title: 访问卓越亚马逊被 TCP 劫持
tags:
  - TCP
  - TCP 劫持
  - 中国联通
  - 会话劫持
  - 运营商劫持
id: 674
categories:
  - 信息安全
date: 2013-12-11 00:59:32
---

_应联通要求，改个标题。_

&nbsp;

前两天家里的固话欠费停机了，宽带也一块停了，缴费后虽然马上就开通了，但奇怪的事也跟着来了。

访问卓越亚马逊的主页（www.amazon.cn）会有跳转，最后的链接有个小尾巴，看着像推广链接。

我用的是 Google Public DNS，电脑也从来没中过毒，于是就怀疑是运营商的问题。

重新拨号后，分配给我的 IP 段变了，劫持也没了，于是就没再管它。

&nbsp;

可是最近几天劫持时有时无，有时候重新拨号也解决不了，试试用 `curl` 测试了一下，果然是 TCP 劫持。

`curl -ivL http://www.amazon.cn`

```html
* Adding handle: conn: 0x2087778
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x2087778) send_pipe: 1, recv_pipe: 0
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* About to connect() to www.amazon.cn port 80 (#0)
*   Trying 203.81.17.130...
* Connected to www.amazon.cn (203.81.17.130) port 80 (#0)
> GET / HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.amazon.cn

> Accept: */*

>

< HTTP/1.1 302 Found

< Content-Length: 0

< Cache-Control:no-cache

< Expires: Mon, 26 Jul 1987 05:00:00

< Pragma: no-cache

< Connection: close

< Content-Type: text/html; charset=UTF-8

< Location: http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23

<

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection 0
* Issue another request to this URL: 'http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23'
* Adding handle: conn: 0x2087778
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 1 (0x2087778) send_pipe: 1, recv_pipe: 0
* About to connect() to www.shelive.net port 80 (#1)
*   Trying 42.121.52.144...
* Connected to www.shelive.net (42.121.52.144) port 80 (#1)
> GET /slalm/gotoz.html HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.shelive.net

> Accept: */*

>

< HTTP/1.1 200 OK

* Server nginx/1.0.15 is not blacklisted
< Server: nginx/1.0.15

< Date: Tue, 10 Dec 2013 16:27:42 GMT

< Content-Type: text/html

< Content-Length: 167

< Last-Modified: Sat, 12 Oct 2013 14:09:32 GMT

< Connection: keep-alive

< Accept-Ranges: bytes

<

{ [data not shown]

100   167  100   167    0     0    762      0 --:--:-- --:--:-- --:--:--   762HTTP/1.1 302 Found
Content-Length: 0
Cache-Control:no-cache
Expires: Mon, 26 Jul 1987 05:00:00
Pragma: no-cache
Connection: close
Content-Type: text/html; charset=UTF-8
Location: http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Tue, 10 Dec 2013 16:27:42 GMT
Content-Type: text/html
Content-Length: 167
Last-Modified: Sat, 12 Oct 2013 14:09:32 GMT
Connection: keep-alive
Accept-Ranges: bytes

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script>location.href="http://hd.baofeng.com/go/aHmDz28.html";</script></head></html>

* Connection #1 to host www.shelive.net left intact
```

`curl -ivL http://hd.baofeng.com/go/aHmDz28.html`

```html
* Adding handle: conn: 0x3ee960
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x3ee960) send_pipe: 1, recv_pipe: 0
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* About to connect() to hd.baofeng.com port 80 (#0)
*   Trying 114.112.82.221...
* Connected to hd.baofeng.com (114.112.82.221) port 80 (#0)
> GET /go/aHmDz28.html HTTP/1.1

> User-Agent: curl/7.30.0

> Host: hd.baofeng.com

> Accept: */*

>

< HTTP/1.1 200 OK

* Server nginx/1.4.1 is not blacklisted
< Server: nginx/1.4.1

< Date: Tue, 10 Dec 2013 16:28:26 GMT

< Content-Type: text/html

< Content-Length: 847

< Last-Modified: Mon, 19 Aug 2013 14:00:19 GMT

< Connection: keep-alive

< ETag: "521224f3-34f"

< Expires: Tue, 10 Dec 2013 16:33:26 GMT

< Cache-Control: max-age=300

< Accept-Ranges: bytes

<

{ [data not shown]

100   847  100   847    0     0   6776      0 --:--:-- --:--:-- --:--:--  6776HTTP/1.1 200 OK
Server: nginx/1.4.1
Date: Tue, 10 Dec 2013 16:28:26 GMT
Content-Type: text/html
Content-Length: 847
Last-Modified: Mon, 19 Aug 2013 14:00:19 GMT
Connection: keep-alive
ETag: "521224f3-34f"
Expires: Tue, 10 Dec 2013 16:33:26 GMT
Cache-Control: max-age=300
Accept-Ranges: bytes

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="pragma" content="no-cache">
<style>
* {
	margin:0px;
	padding:0px;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script language="javascript" type="text/javascript">
function r()
{
top.location.href="http://www.amazon.cn/?tag=nd220034-23";
}
</script>
</head>
<body style="overflow:hidden" leftmargin="0" topmargin="0" marginwidth="0"
marginheight="0" scroll="no" onLoad="r()">
<div style="display:none">
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F30a07b24f9a60b28b0535c5b17a32b9c' type='text/javascript'%3E%3C/script%3E"));
</script>
</div>
</body>
</html>
* Connection #0 to host hd.baofeng.com left intact
```

[![201312111239](http://bcs.duapp.com/sinosky-blog/2013/12/11/201312111239.png)](http://bcs.duapp.com/sinosky-blog/2013/12/11/201312111239.png)

IP 确实是亚马逊官方的，除了是被运营商劫持了就没有别的解释了。不过他们还真不嫌麻烦，竟然有 3 层跳转，后两个还是用 js 跳转的，真恶心。

第一个网站 shelive.net 查询 whois 是在万网注册的，公司也写的是万网，不过备案信息是 赤峰一帆网络服务有限责任公司，许可证号是 蒙ICP备09000034号-1，估计是假的了。第二个网站 baofeng.com 就没什么好说的了，暴风影音的，有安装暴风影音的赶紧卸载了吧，这样的公司做出来的软件估计也一堆后门。

&nbsp;

刚才已经投诉到中国联通了，如果不给解决就投诉到工信部。

&nbsp;

但是也不能指望联通马上解决，只有强制使用 https 访问亚马逊了，在 `chrome://net-internals/#hsts` 加入了 amazon.cn。国内的电商不重视加密也就罢了，没想到亚马逊也不重视，甚至美国亚马逊（www.amazon.com）的首页还强制使用 http（对 https 做了 301 跳转）。

&nbsp;

### Update：

**12月11日** 联通公司派了个人来，正好劫持也消失了，给他看上面的记录，他说看不懂，又说是亚马逊的服务器问题。我就不明白了，亚马逊会在自己首页做跳转？走之前留下台笔记本电脑，让我晚上用他的电脑试试。

重新拨了几次号，发现只在特定 IP 段有劫持，真奇怪。

&nbsp;

又尝试了几次发现有时候跳转的网址还不一样。

`curl -ivL http://www.amazon.cn`

```html
* Adding handle: conn: 0x71ea80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x71ea80) send_pipe: 1, recv_pipe: 0
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* About to connect() to www.amazon.cn port 80 (#0)
*   Trying 203.81.17.130...
* Connected to www.amazon.cn (203.81.17.130) port 80 (#0)
> GET / HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.amazon.cn

> Accept: */*

>

< HTTP/1.1 302 Found

< Content-Length: 0

< Cache-Control:no-cache

< Expires: Mon, 26 Jul 1987 05:00:00

< Pragma: no-cache

< Connection: close

< Content-Type: text/html; charset=UTF-8

< Location: http://www.shelive.net/slalm/uusetoz.html#www.amazon.cn/?tag=nd220035-23

<

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection 0
* Issue another request to this URL: 'http://www.shelive.net/slalm/uusetoz.html#www.amazon.cn/?tag=nd220035-23'
* Adding handle: conn: 0x71ea80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 1 (0x71ea80) send_pipe: 1, recv_pipe: 0
* About to connect() to www.shelive.net port 80 (#1)
*   Trying 42.121.52.144...
* Connected to www.shelive.net (42.121.52.144) port 80 (#1)

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0> GET /slalm/uusetoz.html HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.shelive.net

> Accept: */*

>

< HTTP/1.1 200 OK

* Server nginx/1.0.15 is not blacklisted
< Server: nginx/1.0.15

< Date: Wed, 11 Dec 2013 04:46:35 GMT

< Content-Type: text/html

< Content-Length: 261

< Last-Modified: Sat, 09 Nov 2013 03:04:29 GMT

< Connection: keep-alive

< Accept-Ranges: bytes

<

{ [data not shown]

100   261  100   261    0     0   1395      0 --:--:-- --:--:-- --:--:--  5673HTTP/1.1 302 Found
Content-Length: 0
Cache-Control:no-cache
Expires: Mon, 26 Jul 1987 05:00:00
Pragma: no-cache
Connection: close
Content-Type: text/html; charset=UTF-8
Location: http://www.shelive.net/slalm/uusetoz.html#www.amazon.cn/?tag=nd220035-23

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Wed, 11 Dec 2013 04:46:35 GMT
Content-Type: text/html
Content-Length: 261
Last-Modified: Sat, 09 Nov 2013 03:04:29 GMT
Connection: keep-alive
Accept-Ranges: bytes

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script>location.href="http://uusee.adsame.com/c?z=uusee&la=0&si=35&ci=46&cg=41&c=421&or=260&l=1038&bg=1038&b=1890&u=http://www.amazon.cn/?tag=nd220035-23";</script></head></html>

* Connection #1 to host www.shelive.net left intact
```

`curl -ivL "http://uusee.adsame.com/c?z=uusee&la=0&si=35&ci=46&cg=41&c=421&or=260&l=1038&bg=1038&b=1890&u=http://www.amazon.cn/?tag=nd220035-23"`

```html
* Adding handle: conn: 0x2307e80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x2307e80) send_pipe: 1, recv_pipe: 0
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* About to connect() to uusee.adsame.com port 80 (#0)
*   Trying 221.238.29.68...
* Connected to uusee.adsame.com (221.238.29.68) port 80 (#0)
> GET /c?z=uusee&la=0&si=35&ci=46&cg=41&c=421&or=260&l=1038&bg=1038&b=1890&u=http://www.amazon.cn/?tag=nd220035-23 HTTP/1.1

> User-Agent: curl/7.30.0

> Host: uusee.adsame.com

> Accept: */*

>

< HTTP/1.1 302 Found

< Connection: close

< Content-Type: text/html

< Content-Length: 1

< P3P: CP="CAO PSA OUR"

< Set-Cookie: ASID=31444dc5866c70;expires=Fri,11-Dec-2015 12:51:07 +0800;path=/;domain=adsame.com

< Set-Cookie:ADVS=31444dc5866c70;path=/;domain=uusee.adsame.com

< Set-Cookie: ASL=16050,0000m,1bc74cef;expires=Fri,11-Dec-2015 12:51:07 +0800;path=/;domain=adsame.com

< Location: http://www.amazon.cn/?tag=nd220035-23

< Set-Cookie: uuseeATC=uusee,421,1038,1890,1386737467591,;expires=Sat,21-Dec-2013 19:48:20 +0800;path=/;path=/;domain=uusee.adsame.com

< Expires: 0

<

  0     1    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection 0
* Issue another request to this URL: 'http://www.amazon.cn/?tag=nd220035-23'
* Adding handle: conn: 0x2307e80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 1 (0x2307e80) send_pipe: 1, recv_pipe: 0
* About to connect() to www.amazon.cn port 80 (#1)
*   Trying 203.81.17.130...
* Connected to www.amazon.cn (203.81.17.130) port 80 (#1)
> GET /?tag=nd220035-23 HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.amazon.cn

> Accept: */*

>

< HTTP/1.1 301 MovedPermanently

< Date: Wed, 11 Dec 2013 04:51:08 GMT

* Server Server is not blacklisted
< Server: Server

< Set-Cookie: session-id=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: session-id-time=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: session-token=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: ubid-acbcn=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: at-main=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: x-acbcn=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< Set-Cookie: UserPref=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT

< pragma: no-cache

< x-amz-id-1: 11BT41S073RD1VPKVWJM

< cache-control: no-cache

< expires: -1

< x-amz-id-2: ixzDZ67ip2LE/GXAL6NZ6eJkvtFF+OEglhbbf3mf9Hg=

< Location: http://www.amazon.cn

< Vary: Accept-Encoding,User-Agent

< Content-Type: text/html; charset=UTF-8

< Transfer-Encoding: chunked

<

* Ignoring the response-body
{ [data not shown]

  0     0    0     1    0     0      2      0 --:--:-- --:--:-- --:--:--     2
* Connection #1 to host www.amazon.cn left intact
* Issue another request to this URL: 'http://www.amazon.cn'
* Found bundle for host www.amazon.cn: 0x230f348
* Re-using existing connection! (#1) with host www.amazon.cn
* Connected to www.amazon.cn (203.81.17.130) port 80 (#1)
* Adding handle: conn: 0x2307e80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 1 (0x2307e80) send_pipe: 1, recv_pipe: 0
> GET / HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.amazon.cn

> Accept: */*

>

< HTTP/1.1 302 Found

< Content-Length: 0

< Cache-Control:no-cache

< Expires: Mon, 26 Jul 1987 05:00:00

< Pragma: no-cache

< Connection: close

< Content-Type: text/html; charset=UTF-8

< Location: http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23

<

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection 1
* Issue another request to this URL: 'http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23'
* Adding handle: conn: 0x2307e80
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 2 (0x2307e80) send_pipe: 1, recv_pipe: 0

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* About to connect() to www.shelive.net port 80 (#2)
*   Trying 42.121.52.144...
* Connected to www.shelive.net (42.121.52.144) port 80 (#2)
> GET /slalm/gotoz.html HTTP/1.1

> User-Agent: curl/7.30.0

> Host: www.shelive.net

> Accept: */*

>

< HTTP/1.1 200 OK

* Server nginx/1.0.15 is not blacklisted
< Server: nginx/1.0.15

< Date: Wed, 11 Dec 2013 04:51:09 GMT

< Content-Type: text/html

< Content-Length: 167

< Last-Modified: Sat, 12 Oct 2013 14:09:32 GMT

< Connection: keep-alive

< Accept-Ranges: bytes

<

{ [data not shown]

100   167  100   167    0     0    260      0 --:--:-- --:--:-- --:--:--  1192HTTP/1.1 302 Found
Connection: close
Content-Type: text/html
Content-Length: 1
P3P: CP="CAO PSA OUR"
Set-Cookie: ASID=31444dc5866c70;expires=Fri,11-Dec-2015 12:51:07 +0800;path=/;domain=adsame.com
Set-Cookie:ADVS=31444dc5866c70;path=/;domain=uusee.adsame.com
Set-Cookie: ASL=16050,0000m,1bc74cef;expires=Fri,11-Dec-2015 12:51:07 +0800;path=/;domain=adsame.com
Location: http://www.amazon.cn/?tag=nd220035-23
Set-Cookie: uuseeATC=uusee,421,1038,1890,1386737467591,;expires=Sat,21-Dec-2013 19:48:20 +0800;path=/;path=/;domain=uusee.adsame.com
Expires: 0

HTTP/1.1 301 MovedPermanently
Date: Wed, 11 Dec 2013 04:51:08 GMT
Server: Server
Set-Cookie: session-id=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: session-id-time=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: session-token=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: ubid-acbcn=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: at-main=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: x-acbcn=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
Set-Cookie: UserPref=-; path=/; domain=.www.amazon.cn; expires=Tue, 11-Dec-2001 04:51:08 GMT
pragma: no-cache
x-amz-id-1: 11BT41S073RD1VPKVWJM
cache-control: no-cache
expires: -1
x-amz-id-2: ixzDZ67ip2LE/GXAL6NZ6eJkvtFF+OEglhbbf3mf9Hg=
Location: http://www.amazon.cn
Vary: Accept-Encoding,User-Agent
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked

HTTP/1.1 302 Found
Content-Length: 0
Cache-Control:no-cache
Expires: Mon, 26 Jul 1987 05:00:00
Pragma: no-cache
Connection: close
Content-Type: text/html; charset=UTF-8
Location: http://www.shelive.net/slalm/gotoz.html#www.amazon.cn/?tag=nd220034-23

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Wed, 11 Dec 2013 04:51:09 GMT
Content-Type: text/html
Content-Length: 167
Last-Modified: Sat, 12 Oct 2013 14:09:32 GMT
Connection: keep-alive
Accept-Ranges: bytes

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script>location.href="http://hd.baofeng.com/go/aHmDz28.html";</script></head></html>

* Connection #2 to host www.shelive.net left intact
```

[![201312111303](http://bcs.duapp.com/sinosky-blog/2013/12/11/201312111303.png)](http://bcs.duapp.com/sinosky-blog/2013/12/11/201312111303.png)

这下更恶心了，adsame.com 这个网站归 上海传漾网络科技有限公司 所有，估计就是专门做这个的了。广告可以有，但这种广告决不能忍。

&nbsp;

尝试使用跃点跟踪，但每次拨号后，无论是否被劫持，本地路由和省级路由甚至联通骨干网的 IP 总不一样，看来不是我能追踪到的了，放弃。

&nbsp;

**12月12日** 目前劫持已经消失，说下我的猜测吧。

根据我在本地 `tracert`（Linux 下为 `tracepath`）的结果，所有路由都是联通的 IP，从本地联通到省级联通再到联通骨干网，然后到北京联通，最后是亚马逊的服务器，中间没有其他的运营商。有可能是中间哪个路由被入侵了，亦不排除内部作案。当然也有可能是亚马逊自己的服务器被入侵或内部作案，这点很难说清。

因为 TCP 劫持的隐蔽性和互联网的庞大性，终端用户很难查出是哪一点出现了问题。作为网站一方，我们也无法防止运营商 TCP 劫持，只有尽量使用 https 这种加密协议，少用 http 这种明文协议。

&nbsp;

忽然想到可以利用 TTL 来查找到底是哪一点出现了问题，因为一般的 TCP 劫持不会处理 TTL，可以通过比较 TTL 的不同来分析，可惜现在劫持已经没有了。