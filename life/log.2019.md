- [2019](#2019)
  - [一月](#%E4%B8%80%E6%9C%88)
    - [2019-01-14](#2019-01-14)
      - [工具](#%E5%B7%A5%E5%85%B7)
      - [文章](#%E6%96%87%E7%AB%A0)
      - [源码](#%E6%BA%90%E7%A0%81)
    - [2019-01-13](#2019-01-13)
    - [2019-01-12](#2019-01-12)
    - [2019-01-11](#2019-01-11)
    - [2019-01-10](#2019-01-10)
    - [2019-01-09](#2019-01-09)
    - [2019-01-08](#2019-01-08)
      - [建站专题](#%E5%BB%BA%E7%AB%99%E4%B8%93%E9%A2%98)
    - [2019-01-07](#2019-01-07)
    - [2019-01-06](#2019-01-06)
    - [2019-01-04](#2019-01-04)
    - [2019-01-02](#2019-01-02)
    - [2019-01-01](#2019-01-01)

# 2019

上篇回顾：<a href="https://mp.weixin.qq.com/s/VtGPvoHktolCCnC-MUsdlw">日常小计~12月下旬</a>

## 一月

### 2019-01-14

#### 工具

**【推荐】在线生成`Nginx`配置文件网站**
```
在线：https://nginxconfig.io/
Code：https://github.com/lotapp/nginxconfig.io
```

**【推荐】GPU任务监控工具（类似于htop）**
https://github.com/lotapp/nvtop

![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190113121312108-283288435.png)

**【推荐】用来探索`docker`镜像背后的每一层文件系统，以及发现缩小镜像体积方法的命令行工具（启动命令：`dive 镜像名`）**
https://github.com/LessChina/dive

![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190113121348513-1342193461.png)


**【推荐】`SQL`自动优化和改写的工具**：（小米开源，之前推过）
https://github.com/lotapp/soar
```
可以自动优化 MySQL 语法族，并且给出为什么要这样优化的理由。功能特点：

跨平台支持
目前只支持 MySQL 语法族协议的 SQL 优化
支持基于启发式算法的语句优化
支持复杂查询的多列索引优化（UPDATE、INSERT、DELETE、SELECT）

echo "select title from sakila.film" | ./soar 
# Query: 25807E6B94BEA72C
★ ★ ★ ★ ☆ 80分
SELECT
  title
FROM
  sakila. film
##  最外层SELECT未指定WHERE条件
* **Item:**  CLA.001
* **Severity:**  L4
* **Content:**  SELECT语句没有WHERE子句，可能检查比预期更多的行(全表扫描)。对于SELECT COUNT(\*)类型的请求如果不要求精度，建议使用SHOW TABLE STATUS或EXPLAIN替代。
```

**【推荐】抓包截取项目中的数据库请求并解析成相应的语句**：
https://github.com/lotapp/go-sniffer

![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190113121546774-967332548.png)

```
该工具通过抓包截取项目中的数据库、redis 请求解析成相应的语句。便于调试，不要修改代码，直接嗅探项目中的数据请求。使用说明如下：
=======================================================================
[使用说明]

    go-sniffer [设备名] [插件名] [插件参数(可选)]

    [例子]
          go-sniffer en0 redis          抓取redis数据包
          go-sniffer en0 mysql -p 3306  抓取mysql数据包,端口3306

    go-sniffer --[命令]
               --help 帮助信息
               --env  环境变量
               --list 插件列表
               --ver  版本信息
               --dev  设备列表
    [例子]
          go-sniffer --list 查看可抓取的协议

=======================================================================
[设备名] : lo0 :   127.0.0.1
[设备名] : en0 : x:x:x:x:x5:x  192.168.1.3
[设备名] : utun2 :   1.1.11.1
=======================================================================
```

**把命令行的输出`stdout`和`stderr`重定向为一个`websocket`服务**（渗透经常使用）
https://github.com/lotapp/websocketd

**`Go Modules`下载代理服务，解决国内`Go`包的速度问题**
https://github.com/lotapp/athens

Python开发的**静态网站生成器**
https://github.com/lotapp/mkdocs

#### 文章

**用`Python`写一个简单的解释器系列教程**
https://github.com/lotapp/lsbasi

**后端开发面试题**（双语）
```
中文：https://github.com/monklof/Back-End-Developer-Interview-Questions
英文：https://github.com/arialdomartini/Back-End-Developer-Interview-Questions
```
**如何从头开始创建操作系统**
https://github.com/cfenollosa/os-tutorial

#### 源码

**【源码阅读】基于 Scrapy、Flask、Echarts、Elasticsearch 等实现的微信公众号文章爬虫**
https://github.com/lotapp/weixin_crawler

建站源码：**开源免费的在线教育系统**（支持在线点播、在线电子书、会员收费三大模块）
https://github.com/Qsnh/meedu

### 2019-01-13

**【推荐】洁版linux命令帮助工具：`tldr`**
https://github.com/tldr-pages/tldr

**命令行使用**
https://github.com/jlevy/the-art-of-command-line

**管理浏览器多标签页面的工具(`onetab`扩展版)**
https://github.com/cnwangjie/better-onetab

**简化Python的logging记录**：
https://github.com/lotapp/loguru

检查中文markdown编写格式规范（MD编辑器中一般都会有类似产品）
https://github.com/hustcc/lint-md

压缩js代码为指定图片的工具：（**自己玩玩可以，生产环境就算了**）
https://github.com/xinyu198736/js2image

在`iOS`上跑`Linux shell`，可以通过`linux`命令操作你的`iOS`设备 
https://github.com/tbodt/ish

具有高精度的CPU实时人脸检测器
https://github.com/zeusees/FaceBoxes
论文：http://cn.arxiv.org/abs/1708.05234

### 2019-01-12

**推荐一个聚合图床**
https://www.superbed.cn/

推荐一款ORC识别的谷歌插件：**百度截图翻译**
https://fanyi.baidu.com 
https://chrome.google.com/webstore/detail/baidu-screenshot-translat/obhlofkljphbenhcjnimfcdlknkdilcm

### 2019-01-11

**MySQL数据库备份详解**：https://www.cnblogs.com/huchong/p/10238515.html

一个讲解**简单算法**的博客：https://www.cnblogs.com/fivestudy

免费小说APP ~ **搜书大师**：（可直接在应用商城搜）
免广告: https://pan.baidu.com/s/1Pfwlx0BRoRXMxYiDjNLeuw 密码: uuem

### 2019-01-10

**人人影音**：http://www.zimuzu.tv

**视频解析**：http://vip.bljiex.com

**2018电脑报 and 2018电脑爱好者**
链接: https://pan.baidu.com/s/1OgAuwnHaDOhYuxBY3Pveuw 提取码: 5hqa

### 2019-01-09

**Javascript的3D库**
```
https://github.com/mrdoob/three.js

中文：https://threejs.org/docs/
英文：https://threejs.org/examples/
```

**SEO 优化的建议**：
https://github.com/marcobiedermann/search-engine-optimization

**机器学习框架、库、软件的集合项目**
https://github.com/josephmisiti/awesome-machine-learning

**深度学习算法简化训练神经网络的过程**（包含很多工具）
https://github.com/fastai/fastai

【源码参考】预测股票
https://github.com/VivekPa/AIAlpha
```shell
pip install -r requirements.txt
python run.py
```

### 2019-01-08

#### 建站专题

**新浪云免费建站**：
https://www.sinacloud.com/public/login/inviter/gaimrn-mddmzeKWrhKW7ZYKIeWh9iIFsfoyqdg.html

**主机屋免费建站**：http://www.zhujiwu.com

**腾讯云**最新优惠：

新用户领劵：
https://cloud.tencent.com/act/vouchers/list

3折云产品：北京1核1G：1年168
https://cloud.tencent.com/act/southwest

海外云服务器优惠：香港1核1G：2年700
https://cloud.tencent.com/act/pro/cvmoversea

云服务器拼团8元每月：
https://cloud.tencent.com/act/group/amd/index

**阿里云**目前只有海外虚拟主机有优惠：香港1核1G虚拟主机：2年546元
https://www.aliyun.com/chinaglobal/promotion/virtual2017

### 2019-01-07

**NetCore工作流**推荐：
http://www.openauth.me/

**使用uWSGI的spooler做异步任务**（代替celery）
https://www.kawabangga.com/posts/3101

python三大神器之**virtualenv**
https://www.cnblogs.com/shenh/p/9958370.html

**基于CPython的加强版**（类似于pypy）
https://github.com/stackless-dev/stackless

**基于`LayIM`即时通信(IM)开源解决方案**
```
源码：https://github.com/lotapp/layIM-src

PHP：https://github.com/lotapp/layIM-php
Node：https://github.com/lotapp/layIM-node
Python：https://github.com/lotapp/layIM-python

Net：
https://github.com/lotapp/LayIM_NetClient
https://github.com/lotapp/LayIM.AspNetCore

Java：
https://github.com/lotapp/LayIM-Java
https://github.com/lotapp/LayIM-Java2
```

### 2019-01-06

贴一波**资源站**：
https://shenzjd.com
http://www.bwfxw.com
https://www.ddccs.net
https://www.go176.net
https://www.fcy99.com
https://www.cheat8.com
http://www.dakamao8.com
https://blog.basnit.com
https://blog.52damu.com
https://www.tianchenw.com

**漂亮博客**：
https://www.zcjun.com/

### 2019-01-04

**Facebook GraphQL 协议的 Go 语言版本**
https://github.com/lotapp/thunder
```
相比之前的其它 GraphQL 库，通过反射结构体的 tag 可以自动生成 schema 给前端，更加便于开发

官方案例：
// Friend is a small struct representing a person.
type Friend struct {
  FirstName string
  Last string `graphql:"lastName"` // use a custom name

  Added time.Date `graphql:"-"` // don't expose over graphql
}

// FullName builds a friend's full name.
func (f *Friend) FullName() string {
  return fmt.Sprintf("%s %s", f.FirstName, f.Last)
}

// registerFriend registers custom resolvers on the Friend type.
//
// Note: registerFriend wouldn't be necessary if the type only
// had the default struct field resolvers above.
func registerFriend(schema *schemabuilder.Schema) {
  object := schema.Object("Friend", Friend{})

  // fullName is a computed field on the Friend{} object.
  object.FieldFunc("fullName", Friend.FullName)
}
```

### 2019-01-02

**Win下Py包安装出错就去这个网站下对应包**
https://www.lfd.uci.edu/~gohlke/pythonlibs/

**开源爬虫参考**：
https://github.com/lotapp/WebHubBot
https://github.com/lotapp/distribute_crawler

**区块链数据库**（start 3k+）
https://github.com/lotapp/bigchaindb

MacOS全套开发环境：（start 4k+）
https://github.com/donnemartin/dev-setup

Python的REST API框架 eve（start 5k+）
https://github.com/pyeve/eve

### 2019-01-01

**【推荐】Python高性能异步框架**
https://github.com/LessChina/sanic

逆天点评：（只看主线，只说我的见识）
1. 原来大家都是使用大一统的`Django`（方便）
2. 后来因为性能不佳，FaceBook开发了`Tornado`（IO多路复用）来代替
3. 再后来时代主流是敏捷开发，于是就有了`Flask`（简单）
4. 后来Node和Go火了，NetCore也出山了，Python的Flask等同步框架总是被吊打
5. 于是被逼出了`Japronto`，瞬间惊艳和吊打的所有开发语言，但是只是冒了泡就不怎么维护了
6. 后来就是AI爆发时期，Python直接打上了AI的标签了，而Web也逐渐被打上了初创公司的标配
7. 之后官方看不下去了，自己搞了一套异步框架`asyncio`and`aiohttp`（Node兄弟这么优秀，凭啥我们不行）
8. 民间看不下去了来了个`asyncio`替代品**`uvloop`**（C实现的程度比官方多(谁多谁高效)，PS：官方用法太丑陋了3.7才给足了语法糖）
9. 解决方案虽然各种出，但是web框架不行啊，于是又冒了个主流**`sanic`**（语法和`Flask`很像，性能不亚于`Japronto`）
10. 现在又刚冒出**`vibora`**（都是C实现）有超过`sanic`的趋势（PS：等过几个版本再试水，不过现在很多开发者都是`Go + Python`了)

uvloop —— 超级快的 Python 异步网络框架
https://github.com/LessChina/uvloop
https://magic.io/blog/uvloop-blazing-fast-python-networking/

几款基于AIO的库：`https://github.com/aio-libs`
```
https://github.com/LessChina/aio-pika
https://github.com/LessChina/aiomysql
https://github.com/LessChina/aioredis
https://github.com/aio-libs/aiohttp-jinja2
https://github.com/aio-libs/aiohttp-debugtoolbar
```

某Python博客：http://xiaorui.cc

推荐一款ORM：`peewee`
https://github.com/lotapp/peewee

**Sanic框架应用部署方法详解**
https://www.jb51.net/article/143992.htm

**阻碍你使用 GraphQL 的十个问题**
http://web.jobbole.com/94006/

**年度最佳API扩展**：
1. **`Swagger`：自动生成API文档**
    - 妈妈再也不用担心动态API文档了
2. **`GraphQL`：基于API的查询语言**
    - 妈妈再也不用担心API返回多余数据了
```
Swagger：https://swagger.io/
https://github.com/LessChina/swagger-ui
https://github.com/LessChina/go-swagger
https://github.com/LessChina/swagger-node
https://github.com/LessChina/swagger-py-codegen
https://github.com/LessChina/Swashbuckle.AspNetCore

GraphQL：http://graphql.cn/code

Client：
https://github.com/apollographql
https://github.com/facebook/relay

Server：
Go：https://github.com/LessChina/graphql
JS：https://github.com/LessChina/graphql-js
Python：https://github.com/LessChina/graphene
dotnet：https://github.com/LessChina/graphql-dotnet

PDF：
http://file.allitebooks.com/20180818/Learning GraphQL.epub
```