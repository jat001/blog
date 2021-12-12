---
title: AWS EC2 使用小记
tags:
  - Amazon EC2
  - Amazon Elastic Compute Cloud
  - Amazon Web Services
  - AWS
  - 云平台
  - 备忘
id: 94
categories:
  - 云平台
date: 2013-07-12 07:54:22
---

_Amazon Elastic Compute Cloud (Amazon EC2) 是一种 Web 服务，可在云中提供大小可调的计算容量。该服务旨在降低开发人员进行网络规模计算的难度。_

详见 [官方介绍](http://aws.amazon.com/cn/ec2/)。

本文主要记录我在使用 AWS EC2 过程中所遇到的一些细节问题，权当备忘。

&nbsp;

#### 一. 申请

开通 AWS 需要信用卡，没有的话用财付通的运通虚拟卡也可以，具体的申请过程网上到处都是，不再赘述。

&nbsp;

#### 二. 操作系统

直接在控制台新建实例的话，可供选择操作系统较少，其实我们可以在 [AWS Marketplace](https://aws.amazon.com/marketplace/) 选择免费的系统购买，然后再新建实例。

[![201307131556](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131556.jpg)](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131556.jpg "201307131556")

注意选择 Launch with EC2 Console

&nbsp;

#### 三. 防火墙

除了要配置操作系统中的防火墙外，还要配置控制台中的 Security Groups。

把常用的端口如 22 80 443 等打开，如需支持 ping，请按下图设置：

[![201307131617](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131617.jpg)](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131617.jpg "201307131617")

&nbsp;

#### 四. IP

实例的 ip 是动态的，重启后会更换，我们可以给它绑定一个静态 ip，每个实例可以免费绑定一个 Elastic IP。

[![201307131625](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131625.jpg)](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131625.jpg "201307131625")

可以把 ip 绑定给实例或网卡

&nbsp;

#### 五. 密钥对

我们可以直接在控制台生成 key pair，也可以导入自己的 public key：

[![201307131636](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131636.jpg)](http://bcs.duapp.com/sinosky-blog/2013/07/13/201307131636.jpg "201307131636")