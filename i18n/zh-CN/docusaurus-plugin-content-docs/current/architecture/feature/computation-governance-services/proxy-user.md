---
title: Linkis 支持代理用户提交架构设计
sidebar_position: 2
---

## 1 背景
目前linkis在执行用户提交的任务时，linkis主要进程服务会通过sudo -u ${submit user} 切换到对应用户下，然后执行对应的引擎启动命令，
这就需要为每个${submit user} 提前创建对应的系统用户，并且配置好相关的环境变量。
对于新用户，需要一系列的环境的初始化准备工作，如果频繁的用户变化，会增大运维成本，而且用户过多，没法针对单个用户配置资源，资源之间无法很好的管控。如果能够实现A代理给指定的代理用户执行，可以将执行入口统一收敛，解决需要初始化环境的问题。

## 2 基本概念
- 登陆用户：通过用户名密码直接登陆系统的用户
- 代理用户：作为登陆用户实际执行操作的用户称之为代理用户，代理登陆用户的相关操作

## 3 实现的目标
- 登陆用户A可以进行代理用户的选择，决定代理给哪个代理用户
- 登陆用户A可以将任务代理给代理用户B执行
- 登陆用户A代理到代理用户B时，可以查看B相关的执行记录，任务结果等数据
- 一个代理用户同时可以代理多个登陆用户，但是一个登陆用户同一时刻只能关联某一个代理用户

## 4 实现大体思路

修改现有接口cookie处理，需要能在cookie中解析出登录用户和代理用户
```html
代理用户的cookie的key为：linkis_user_session_proxy_ticket_id_v1
登录用户的cookie: linkis_user_session_ticket_id_v1

```

- linkis的相关接口需要 在原来获取UserName的基础上，要能识别出代理用户信息，使用代理用户进行各项操作。并记录审计日志，包含用户的任务执行操作，下载操作
- 任务提交执行的时候，entrance入口服务需要修改执行的用户为代理用户

## 5 需要考虑&注意的事项

- 用户分为代理用户和非代理用户，代理类型的用户不能进行再次代理到其他用户执行
- 需要控制登陆用户与可代理的系统用户列表，禁止出现任意代理的情况，避免权限不可控。最好支持数据库表来配置，并可以直接修改生效，不需要重启服务
- 单独记录日志文件包含代理用户的操作，如代理执行、函数更新等PublicService的代理用户操作全部记录到日志中，方便审计
