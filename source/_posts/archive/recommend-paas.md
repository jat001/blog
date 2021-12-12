---
title: 推荐几个国外的云平台
tags:
  - GAE
  - PAAS
  - 云平台
id: 235
categories:
  - 云平台
date: 2012-05-18 19:13:53
---

> <span style="font-size: small;">_PaaS是Platform as a Service的缩写，意思是平台即服务。 把服务器平台作为一种服务提供的商业模式。通过网络进行程序提供的服务称之为SaaS(Software as a Service)，而云计算时代相应的服务器平台或者开发环境作为服务进行提供就成为了PaaS(Platform as a Service)。_</span>
>
> <span style="font-size: small;">_( copy自百度百科，其实就是我们所说的云平台 )_</span>
>
> <span style="font-size: small;">_ _</span>

<span style="font-size: small;">首先说下为什么不用国内的云平台，国内的那些云平台除 [Sina App Engine](http://sae.sina.com.cn/) 外，像[阿里云](http://www.aliyun.com/)、[盛大云](http://www.grandcloud.cn/)等都价格不菲，虽然有免费试用，但竟然都只能试用几天，毫无诚意，还不如去买虚拟主机呢。而SAE，表面上免费，但实际上当云豆用完了，就得花钱。

</span>

<span style="font-size: small;">抛开资费问题不说，为什么那么多人都选择国外的空间和域名提供商，还不是因为备案。在国内，无论什么网站，都得备案，不备案，你就等着被封、被墙吧。当然，国外未备案的网站也有可能被墙。</span>

<span style="font-size: small;">[![paas](//www.sinosky.org/uploads/2012/img.sinosky.tk_f_9_)](//www.sinosky.org/uploads/2012/img.sinosky.tk_f_9_) </span>

<span style="font-size: small;">好了，废话扯完了，进入正题。说到国外的云平台，就不得不说  [Google App Engine](https://appengine.google.com/) 了，虽然只支持 python java 和 go 3种语言，但搭个博客什么的绰绰有余了，这个博客就是在GAE上搭建的。对于资费问题，也完全不用发愁，GAE的配额是每天下午4点更新，基本上只要流量不大，就不用担心配额问题。</span>

<span style="font-size: small;">如果你想搭个博客，建议你使用[B3LOG](http://www.b3log.org/)，以前很火的 [Micolog](https://github.com/xuming/micolog) 已经很久没有更新了，而 Micolog 的改进版 —— [Micolog2](https://code.google.com/p/micolog2/) 最近好像也停止更新了，只有 B3LOG 还在更新。当然，这些博客程序跟 [WordPress](http://cn.wordpress.org/) 相比完全不值一提，但我认为，一个博客 重要的是内容，不是应用、插件、主题等乱七八糟的东西，做的再好看，没有内容，也照样没人来。</span>

<span style="font-size: small;">使用GAE要注意它提供的默认域名 appid.appspot.com 已经被墙，需要自己绑定域名才可访问，这里推荐免费的 tk 域名。不过GAE倒是不用担心速度和稳定性，毕竟是 Google 提供的，即使在国内，访问也很快。</span>

<span style="font-size: small;"> </span>

<span style="font-size: small;">除了GAE，其他大公司提供的云平台还有 [Amazon Web Services](http://aws.amazon.com/) 和 [Windows Azure](https://www.windowsazure.com/zh-cn/) 。这两个云平台都提供试用，AWS可以试用一年 azure 可以试用 3个月，不过两者都需要提供信用卡，当免费期内的配额超了以后，会直接扣费，这些配额是按月结算的。这些云平台对主流语言都有很好的支持，不要担心部署的博客、论坛有问题。</span>

<span style="font-size: small;"> </span>

<span style="font-size: small;">还有一些云平台像 [OpenShift](https://openshift.redhat.com/app/) 、 [dotCloud](https://www.dotcloud.com/) 等，也都是免费的，可以试试，具体怎么样 因为我没试过我也不知道，不过速度应该都可以，毕竟都是知名公司的产品。需要注意的是，  dotCloud 的免费版不支持绑定域名，想绑米的去试试别的吧。</span>

<span style="font-size: small;"> </span>

<span style="font-size: small;">对于这么多云平台，我想大家都有一个困惑，到底哪个好呢？不妨来听听我的建议，如果你像我一样，想找个免费的平台搭个博客自娱自乐的话，那GAE很适合你；如果你只是想练练手，搭个 WordPress 或 [Discuz](http://www.discuz.net/) 玩玩的话，那AWS 和 azure 可以试试。不过如果你是想办个网站，想把网站做大的话，还是去买虚拟主机或VPS + 付费域名吧，没有哪个网站能靠免费的平台做成功。</span>

<span style="font-size: small;">最后，奉劝一些人，用免费的平台搭个博客什么的玩玩就行了，别真把它当成做网站的地方了，也不要搭什么视音频分享网站，更不要搞什么18禁的东西。你损害的不仅仅是服务提供商的利益，更是你自己和其他用户的利益，流量大的东西早晚会被封的。</span>