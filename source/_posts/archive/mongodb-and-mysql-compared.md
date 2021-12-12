---
title: <译> MongoDB 与 MySQL 对比
tags:
  - MySQL
  - MongoDB
id: 20160929
categories:
  - 码农与 IT
date: 2016-09-29 17:28:00
---

原文：[MongoDB and MySQL Compared](https://www.mongodb.com/compare/mongodb-mysql)



## 概述

关系数据库在企业级应用中使用已有数十年的历史，自从 MySQL 在 1995 年发布之后，它成为其中最受欢迎且成本较低的选择之一。然而，随着近年来数据爆炸及储存成本降低，像 MongoDB 这样的非关系数据库开始出现，以解决新型应用的需求。对于传统应用，MongoDB 同样能增强甚至是替代已有的关系数据库。



## MySQL 是什么？

MySQL 是一个广受欢迎的关系数据库管理系统（RDBMS），由甲骨文公司开发、发行和维护，开放源代码。如同其他的关系数据库，MySQL 在表中存储数据、使用结构化查询语言（SQL）访问数据。在 MySQL 中，你需要根据需求提前定义表结构、处理在不同表中的不同字段间的关系。相关联的数据可能存储在不同表中，但可通过多表连接查询访问数据。使用这种存储方式，重复数据是最少的。



## MongoDB 是什么？

MongoDB 是由 MongoDB 公司开发的开源数据库，它使用类 JSON 文档存储数据，数据结构可变。关联信息同样存储在一起，通过 MongoDB 查询语句可快速访问。MongoDB 使用动态结构，这意味着你无需提前定义数据结构，就可以创建一条记录来存储像字段值或字段类型等信息。你可以通过新增或删除字段来改变记录（我们称之为文档）的结构。这种数据模型可以表示层次关系、存储数组或其他更复杂的数据结构。在集合中的文档无须拥有一致的字段，非规范化的数据是很常见的。MongoDB 在设计时还考虑到了高可用性和可扩展性，包括开箱即用的复制和自动分片。



## 术语及概念

MySQL 的许多概念在 MongoDB 中都有类似的，下表列出了一些常见的概念。

| MySQL    | MongoDB                             |
| -------- | ----------------------------------- |
| Table 表  | Collection 集合                       |
| Row 行    | Document 文档                         |
| Column 列 | Field 字段                            |
| Joins 连接 | Embedded documents, linking 内嵌文档，连接 |



## 功能对比

如 MySQL 一样，MongoDB 提供了丰富的特性和功能，远远超出了简单的键值存储所能提供的。MongoDB 拥有查询语言、高度实用的二级索引（包括文本搜索和空间数据）、用于数据分析的强大聚合框架等功能。通过使用 MongoDB 的这些功能，你可以访问更多不同的数据类型和更大规模的数据。

|         | MySQL | MongoDB |
| ------- | ----- | ------- |
| 丰富的数据模型 | 无     | 有       |
| 可变的数据结构 | 无     | 有       |
| 强类型数据   | 有     | 有       |
| 局部数据    | 无     | 有       |
| 字段更新    | 有     | 有       |
| 易编程     | 无     | 有       |
| 复杂的事务   | 有     | 无       |
| 操作审计    | 有     | 有       |
| 自动分片    | 无     | 有       |



## 查询语言

MySQL 和 MongoDB 都有丰富的查询语言，一份详细的列表可在 [MongoDB 文档](https://docs.mongodb.com/manual/reference/sql-comparison/)中找到。

| MySQL                                    | MonogDB |
| ---------------------------------------- | ------- |
| `INSERT INTO users (user_id, age, status) VALUES ('bcd001', 45, 'A')` | `db.users.insert({user_id: 'bcd001', age: 45, status: 'A'})` |
| `SELECT * FROM users`                    | `db.users.find()` |
| `UPDATE users SET status = 'C' WHERE age > 25` | `db.users.update({ age: { $gt: 25 } }, { $set: { status: 'C' } }, { multi: true })` |



## 为什么使用 MongoDB 而不是 MySQL？

使用 MongoDB 可以更快得构建应用，处理多种多样的数据类型，更高效的管理大规模应用，不同规模的企业都可以使用 MongoDB。

MongoDB 文档映射很接近现代的、面向对象的编程语言，开发很简便。使用 MongoDB，可以省去在代码中使用复杂的对象关系映射（ORM）层来转换对象与相关的表。

MongoDB 灵活的数据模型意味着你可以根据业务发展的需要修改数据结构。例如，[The Weather Channel](https://www.mongodb.com/press/mongodb-chosen-technology-provider-deliver-accurate-data-weather-channel-hundreds-thousands) 花费了数周修改 MySQL 的数据库结构，如果使用 MongoDB 则只需花费几小时。

MongoDB 还支持在多个分布式数据中心间伸缩，提供高可用性和可扩展性，像 MySQL 这样的关系数据库无法做到。当数据量和吞吐量增长时，MongoDB 无须停机即可轻松扩展，也不需要修改程序。相较之下，扩展 MySQL 则需要更多自定义工作。百度从 MySQL 迁移到 MongoDB 以支持快速增长的业务，作为中国互联网服务的巨头，其使用 MongoDB 集群管理超过 1PB 的数据，为 100 多个应用提供服务。



## MongoDB 的常见使用场景有哪些？

MongoDB 作为一个通用数据库，可以用于各种场景，最常见的场景包括[单页面应用](https://www.mongodb.com/use-cases/single-view)、[物联网](https://www.mongodb.com/use-cases/internet-of-things)、[移动应用](https://www.mongodb.com/use-cases/mobile)、[实时数据分析](https://www.mongodb.com/use-cases/real-time-analytics)、[个性化服务](https://www.mongodb.com/use-cases/personalization)、[产品目录](https://www.mongodb.com/use-cases/catalog)和[内容管理](https://www.mongodb.com/use-cases/content-management)等。



## 什么时候更适合使用 MySQL？

虽然现代应用需要像 MongoDB 这样灵活的、可伸缩的系统，但仍有很多场景需要像 MySQL 这样的关系数据库。比如，需要复杂的事务、多行查找的应用（如复式簿记系统）就是一个很好的列子。MongoDB 无法简单替代在关系数据模型和 SQL 上构建的传统应用。

一个具体的例子是运行在旅行预订系统后的订单引擎，这通常涉及到复杂的交易。虽然核心预订系统可以运行在 MySQL 上，但与用户紧密相关的部分——内容提供、社交网络、会话管理最好放在 MongoDB 中。



## MongoDB 和 MySQL 可以一起使用吗？

有很多在开发中同时使用 MongoDB 和 MySQL 的例子。在一些情况下，在工作中选择一个正确的工具是非常重要的。比如，许多电子商务应用混合使用 MongoDB 和 MySQL。而拥有很多不同属性产品的产品目录，MongoDB 的灵活数据模型更加适合。另一方面，像结单系统这样拥有复杂事务的系统，最好使用 MySQL 或其他关系数据库。

在其他情况下，新的业务要求企业使用 MongoDB 作为他们应用的下一代组件。例如，世界领先的交易管理软件和服务提供商之一——Sage 集团，把 MongoDB 集成进其广受中型公司欢迎的企业资源计划（ERP）解决方案中。Sage 的客户现在能享有功能齐备且高度可定制化的服务。尽管许多 Sage 的产品构建于 MySQL 之上且仍在 MySQL 上运行，但围绕用户体验的新功能是运行在 MongoDB 之上的。

除了这些少数例外，我们相信 MongoDB 是一个比 MySQL 更好的选择，因为 MongoDB有灵活的数据模型和可扩展的架构。



## 想要了解更多？快来下载《RDBMS 到 MongoDB 迁移指南》

关系数据库有许多限制，因为它们是为运行现今的应用而开发的，再加上数据和用户的增长，已无法满足需求。为了应对这些挑战，像音乐电视网和思科这样的公司，已经成功从关系数据库迁移到了 MongoDB。在这本白皮书中，你可以了解到：

* 如何一步步从关系数据库迁移到 MongoDB。
* 相关技术方面的考虑，如关系数据模型与文档数据模型的结构设计间有何差异。
* 索引、查询、应用整合和数据迁移。



[下载白皮书](https://www.mongodb.com/collateral/rdbms-mongodb-migration-guide)



*译后感：译完才发现，我又找回了当年[翻译 meteor](https://github.com/enumerable/meteor) 时的感觉——理解不能……算了，都写完了，就这样吧……*
