---
title: CDNZZ与CloudFlare的简单比较
tags:
  - CDN
  - 互联网
  - 站长
id: 73
categories:
  - 互联网
date: 2012-12-18 11:08:00
---

<span style="font-size: 16px;"><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">这个博客是部署在GAE上的，由</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">于最近全国人民喜迎斯巴达，导致国内使用谷歌的服务非常不稳定，所以博客的访问也经常抽风，无奈只有找个CDN使用了。</span></span>

<span style="font-size: 16px;"><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">

</span></span>

![](//www.sinosky.org/uploads/2012/www.aleng.net_wp-content_uploads_2012_04_cloudflare.jpg)

<span style="font-size: 16px; font-family: 'Microsoft YaHei';"><span style="font-size: 14px;">以前一直</span><span style="font-size: 14px;">在用</span></span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">CloudFlare</span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">，不过自从把博客放在GAE上后就没再用了，斯巴达前国内访问GAE的速度还是很理想的。</span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">不过自从斯巴达开幕到现在，无论是谷歌搜索还是Gmail以及GAE，只要是谷歌的服务都是各种抽，有时候挂代理也没用。</span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">回到</span><span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">CloudFlare上，虽然它号称在全世界都有节点，但我用的时候都是连接到美国节点而不是日本节点，加速后比不加速还慢。</span></span>

<span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">不过</span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">CloudFlare稳定性倒是没的说，虽然国内访问慢点</span><span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">但绝对不会抽风，再加上节点多，运营时间长，在国内站长中也有着良好的口碑。</span></span></span>

<span><span><span style="font-size: 14px; font-family: 'Microsoft YaHei';"><span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 21px;">CloudFlare并不限制免费用户添加网站的数量，功能也足以应付大部分网站的日常需求，最重要的是，它不限制流量</span>。

</span></span></span>

<span><span><span style="font-size: 14px; font-family: 'Microsoft YaHei';">

</span></span></span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">![](//www.sinosky.org/uploads/2012/logo.jpg)后来我尝试了CDNZZ，一家新兴的提供全球互联网加速的云服务提供商。</span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">CDNZZ提供的加速节点有大陆、香港、美国、新加坡，其中大陆节点包括：河北电信，河北联通，河北移动，贵州电信，江西联通，广东电信，广东移动（即将上线）。</span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">不过其大陆的节点要网站备案才能使用，而香港节点的带宽已经满了，新用户都是接入到新加坡节点和美国节点，不过付费用户会优先接入香港节点。</span>

<span style="font-size: 14px; font-family: 'Microsoft YaHei';">至于速度，由于我不是付费用户，所以不能测试香港节点的速度，不过其新加坡节点的速度还是可以的，起码比直连要快点。</span>

<span style="font-family: 'Microsoft YaHei';"><span style="font-size: 14px; line-height: 21px; font-family: 'Microsoft YaHei';">免费用户只能添加一个网站，每月初始免费流量为1GB，通过邀请用户和参加活动可以获得更多免费流量。</span></span>

<span style="font-family: 'Microsoft YaHei';"><span style="font-size: 14px; line-height: 21px; font-family: 'Microsoft YaHei';">目前CDNZZ处于邀请注册阶段，需要邀请码才能注册，下面附上几个邀请码：</span></span>

> <span style="font-family: 'Microsoft YaHei'; font-size: 14px;"><span style="line-height: 21px; font-family: 'Microsoft YaHei'; font-size: 14px;">175464632507 175414593413 175435835376 175425905256 175480626038</span></span>
> <span style="font-family: 'Microsoft YaHei'; font-size: 14px;"><span style="line-height: 21px; font-family: 'Microsoft YaHei'; font-size: 14px;">175420705419 175478267979 175434928486 175497768924 175483131870</span></span>

<span><span style="font-size: 14px; line-height: 21px;">

</span></span>

<span style="line-height: 21px;"><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">综上所述，如果是想要长期使用CDN，又追求稳定的话，建议使用</span><span style="font-family: 'Microsoft YaHei'; line-height: 21px; font-size: 14px;">CloudFlare；而如果你像我一样，只是暂时避避斯巴达的和谐之光的话，</span><span><span style="font-family: 'Microsoft YaHei'; line-height: 21px; font-size: 14px;">CDNZZ是一个不错的选择。</span></span></span>

<span style="line-height: 21px;"><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">不过这些免费的国外CDN始终不是办法，要想提升</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">用户体验，备案并使用国内的CDN才是解决之道。</span></span>