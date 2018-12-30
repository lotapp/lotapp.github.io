- [2019](#2019)
  - [一月](#%E4%B8%80%E6%9C%88)
    - [2019-01-02](#2019-01-02)
    - [2019-01-01](#2019-01-01)

# 2019

## 一月

### 2019-01-02

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
https://github.com/LessChina/aiomysql
https://github.com/LessChina/aioredis
https://github.com/aio-libs/aiohttp-jinja2
https://github.com/aio-libs/aiohttp-debugtoolbar
```

某Python博客：http://xiaorui.cc

推荐一款ORM：peewee
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
