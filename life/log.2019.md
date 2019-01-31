- [2019](#2019)
  - [一月](#%E4%B8%80%E6%9C%88)
    - [2019-01-31（推荐）](#2019-01-31%E6%8E%A8%E8%8D%90)
    - [2019-01-29（资源）](#2019-01-29%E8%B5%84%E6%BA%90)
    - [2019-01-27（推荐）](#2019-01-27%E6%8E%A8%E8%8D%90)
    - [2019-01-25](#2019-01-25)
    - [2019-01-23](#2019-01-23)
    - [2019-01-22](#2019-01-22)
    - [2019-01-21](#2019-01-21)
    - [2019-01-20（推荐）](#2019-01-20%E6%8E%A8%E8%8D%90)
    - [2019-01-18](#2019-01-18)
      - [源码阅读之Net专栏](#%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB%E4%B9%8Bnet%E4%B8%93%E6%A0%8F)
    - [2019-01-17（必看）](#2019-01-17%E5%BF%85%E7%9C%8B)
      - [Code](#code)
    - [2019-01-16（推荐）](#2019-01-16%E6%8E%A8%E8%8D%90)
      - [Apache ServiceComb微服务框架](#apache-servicecomb%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6)
    - [2019-01-14（必看）](#2019-01-14%E5%BF%85%E7%9C%8B)
      - [工具](#%E5%B7%A5%E5%85%B7)
      - [文章](#%E6%96%87%E7%AB%A0)
      - [源码](#%E6%BA%90%E7%A0%81)
    - [2019-01-13](#2019-01-13)
    - [2019-01-12](#2019-01-12)
    - [2019-01-11](#2019-01-11)
    - [2019-01-10](#2019-01-10)
    - [2019-01-09](#2019-01-09)
    - [2019-01-08（推荐）](#2019-01-08%E6%8E%A8%E8%8D%90)
      - [建站专题](#%E5%BB%BA%E7%AB%99%E4%B8%93%E9%A2%98)
    - [2019-01-07](#2019-01-07)
    - [2019-01-06](#2019-01-06)
    - [2019-01-04](#2019-01-04)
    - [2019-01-02](#2019-01-02)
    - [2019-01-01（必看）](#2019-01-01%E5%BF%85%E7%9C%8B)

# 2019

## 一月

上篇回顾：<a href="https://mp.weixin.qq.com/s/VtGPvoHktolCCnC-MUsdlw">日常小计~12月下旬</a>

### 2019-01-31（推荐）

**【推荐】网页正文抽取工具**：
https://github.com/lotapp/cx-extractor-python
> `cx-extractor`算法的`python`版本，改进了原有算法，使其支持中英文(对新闻类网页正文抽取效果较好)

**【推荐】记录终端命令并生成svg动画：`termtosvg`**
https://github.com/lotapp/termtosvg
> 通过命令 termtosvg 运行该工具，然后在终端执行你要展示的命令
输入 exit 结束录制，本地会生成一份 SVG 动画用于展示终端操作
![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/30/img/termtosvg.gif)

**【推荐】阿里提供的基于`React`的中后台应用解决方案-ice**(10.8k+，让前端开发简单而友好)
https://github.com/lotapp/ice

简介：组件、区块、布局、模板等统称为物料，基于这些物料结合 Iceworks 可以快速搭建中后台应用。在此之外，如果已有的物料不能满足你的业务需求，我们提供了一套完整的开发规范和开发者工具，你可以参与共建飞冰物料，也可以自建私有的物料体系。
1. 组件：最基础的物料，目前飞冰的基础组件达到 55+，具有高度可复用性。
2. 区块：通过对大量的中后台系统常用的场景进行分类、对比和抽象，基于基础组件组合而成，目前飞冰的区块达到 110+，可以通过 iceworks 进行快速组合搭建应用，减少重复的开发，提升效率。
3. 布局：在中后台系统中布局通常较为统一，以 顶部-侧边布局-通栏 模式为主，为此我们提供了 4+ 常见的布局，支持 light 和 dark 两套主题。
4. 模板：基于已有的区块搭建而成，目前提供了 4+ 的特定领域的模板，可以从零开始搭建应用，也可以选择特定类型的模板开始使用。
![](https://img.alicdn.com/tfs/TB1uMkVnTtYBeNjy1XdXXXXyVXa-2048-1400.jpg)

**PS：之前推荐过一款阿里推荐的前端UI解决方案：`https://github.com/LessChina/ant-design`**

一个可用于**内网穿透**的高性能的**反向代理**应用
https://github.com/lotapp/frp

**【推荐】自带文件浏览器的网盘服务**。支持功能：文件浏览、文件生成分享链接、批量上传、文件夹创建等服务、用户系统
<https://github.com/lotapp/filebrowser>

安装步骤如下:
1. 安装：`docker pull filebrowser/filebrowser`
2. 配置：配置文件在 `/etc/config.json`，数据库在 `/etc/database.db`
3. 启动：`docker run \ -v /path/to/sites/root:/srv \ -v /path/to/config.json:/config.json \ -v /path/to/database.db:/database.db \ -p 80:80 \ filebrowser/filebrowser`
4. 访问：然后访问 `http://localhost` 即可，默认是 80 端口，改端口的话修改 config.json 文件
![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/30/img/filebrowser.gif)

**开箱即用的前端工作流客户端**(内置最前沿的 WebPack4、Babel7、Gulp4 的构建工具)
https://github.com/lotapp/legoflow
![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/30/img/legoflow.png)

**【推荐】基于 Vue2 简洁易用、可批量、拖拽的文件上传插件**
https://github.com/TerryZ/v-uploader
![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/30/img/v-uploader.png)

### 2019-01-29（资源）

JavaScript英文教程（从编程基础到前端、后端 Web 开发）
https://github.com/lotapp/thejsway
> 该教程采用 ES5 语法编写，使用 ESLint 、Pretties 工具，每章都有练习，最后的一个实战项目将指导你创建新闻 Web 应用

**【推荐】中华新华字典数据库。包括歇后语，成语，词语，汉字**
https://github.com/lotapp/chinese-xinhua

**【推荐】机器学习100天**
https://github.com/lotapp/100-Days-Of-ML-Code

**【推荐】算法、深度学习、NLP 面试笔记**
https://github.com/lotapp/Algorithm_Interview_Notes-Chinese

**OpenAI制作的教育资源，可以更容易地学习深层强化学习**
https://github.com/lotapp/spinningup

**【推荐】阿里前端精读周刊**
https://github.com/lotapp/weekly

**滴滴前端技术分享**
https://github.com/lotapp/DDFE-blog

### 2019-01-27（推荐）

**【推荐】根据SQL和配置文件生成接口的工具（支持`SQLServer` and `MySQL`）**
https://github.com/lotapp/sqler
>  SQLer是一个小巧的便携式服务器，使您可以使用SQL查询编写API，以便在任何人点击时执行它，还可以让您定义验证规则，以便您可以验证请求正文/查询参数，以及使用简单的数据转换 javascript语法。 sqler使用nginx样式配置语言（HCL）和jd引擎进行自定义表达式（与传统的 SQL 生成 RESETful API 的工具不同，这个工具允许你自定义一些 API 的前、后处理，Auth 之类的行为）
```json
启动命令 sqler -config=path to config file，配置示例

adduser {
// 参数校验
    validators {
        user_name_is_empty = "$input.user_name && $input.user_name.trim().length > 0"
        user_email_is_empty = "$input.user_email && $input.user_email.trim(' ').length > 0"
        user_password_is_not_ok = "$input.user_password && $input.user_password.trim(' ').length > 5"
    }

    bind {
        name = "$input.user_name"
        email = "$input.user_email"
        password = "$input.user_password"
    }

    methods = ["POST"]
// 权限校验
    authorizer = <<JS
        (function(){
            log("use this for debugging")
            token = $input.http_authorization
            response = fetch("http://requestbin.fullcontact.com/zxpjigzx", {
                headers: {
                    "Authorization": token
                }
            })
            if ( response.statusCode != 200 ) {
                return false
            }
            return true
        })()
    JS

    exec = <<SQL
        INSERT INTO users(name, email, password, time) VALUES(:name, :email, :password, UNIX_TIMESTAMP());
        SELECT * FROM users WHERE id = LAST_INSERT_ID();
    SQL
}
```

**【推荐】通过动态二维码传输数据**
https://github.com/lotapp/txqr

![](https://github.com/divan/txqr/raw/master/docs/demo.gif)

**【推荐】批量管理Git仓库的命令行工具**
https://github.com/lotapp/gitbatch

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/34/img/gitbatch.gif)

**【推荐】腾讯开源的移动 H5 的控制台开发调试工具**，支持查看 console 日志、网络请求、自定义插件等
https://github.com/lotapp/vConsole

![](https://github.com/lotapp/vConsole/raw/dev/example/snapshot/log_panel.png)

**WeChat官方设计团队的UI库**（21.3k+）
https://github.com/Tencent/weui

PS：知识拓展
1. **基于`Vue.js`和`Weui`的移动端框架`Vux`**：https://github.com/lotapp/vux
2. **基于`Vue.js`的轻量级应用框架**：https://github.com/lotapp/nuxt.js

**腾讯开源的通用 Web 组件化框架**(7k+，可和阿里的对比)
https://github.com/lotapp/omi

![](https://github.com/Tencent/omi/raw/master/assets/omi-rm-v1.png)

### 2019-01-25

提供**在线借书**功能的**开源小程序**项目
https://github.com/imageslr/weapp-library

**一个静态博客写作客户端**
https://github.com/lotapp/hve-notes

**基于`Three.js`的`Web3D`地球数据可视化组件**
https://github.com/lotapp/giojs

> 使用 Gio.js 的网页应用开发者，可以快速地以申明的方式创建自定义的 Web3D 数据可视化模型，添加数据，并且将其作为一个组件整合到自己的应用中。支持静态 Dom、React和微信小程序。具有一下特点：
1. 易用性 -- 仅使用 4 行 Javascript 即可创建 3D 地球数据可视化模型
2. 定制化 -- 使用 Gio.js 提供的丰富的 API 来创建自定义样式的 3D 地球
3. 现代化 -- 基于 Gio.js 构建高交互、跨平台、自适应的现代化 3D 前端应用

**钓鱼网站生成工具** 该工具会根据给定的模版生成一个钓鱼网站，然后在该网站输入的用户名密码等敏感信息会被记录 
https://github.com/lotapp/Modlishka

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/34/img/Modlishka.jpeg)

**开源版视频播放器**potplayer ，用于学习和交流音视频技术
https://github.com/itisyang/playerdemo

一个轻量级的css框架：
https://github.com/ajusa/lit

lit有两个模块：lit和util。 它们都设计得尽可能小，并且易于扩展：
1. lit包含框架的所有基础知识，例如响应式网格，排版和其他元素
2. util有许多CSS实用程序类，可用于扩展lit或任何CSS框架

### 2019-01-23

**算法可视化工具**：https://github.com/lotapp/algorithm-visualizer
> 你可以自由选择自己想学习的算法，每个算法它都清晰描绘了其原理和运作过程

![](https://raw.githubusercontent.com/algorithm-visualizer/algorithm-visualizer/master/branding/screenshot.png)

**简单易用的Python爬虫框架**
https://github.com/lotapp/PSpider

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/34/img/PSpider.png)

**【推荐】介绍 Python 有趣、神奇的开源项目**
https://github.com/lotapp/awesome-python-applications

**讲谈社·中国的历史**（1-10卷）
```
逆天点评：日本人的角度客观回顾中国历史，感兴趣的推荐看看
https://pan.baidu.com/s/1WDjJkzgAq2BZppM-Jmg2Mg 密码：jqet
```

**【推荐】在屏幕上实时显示当前按键的工具**
https://github.com/keycastr/keycastr

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/34/img/keycastr.gif)

### 2019-01-22

**图片在线压缩**（谷歌提供）：
https://squoosh.app

**通过动态和交互式的方式了解字字典如何工作**：
https://just-taking-a-ride.com/inside_python_dict/chapter1.html

### 2019-01-21

**【推荐】用于软件和Web开发的免费API的集合列表**
https://github.com/lotapp/public-apis

**掘金翻译计划**（英译中）
https://github.com/lotapp/gold-miner

**【推荐】如何设计大型系统**
https://github.com/donnemartin/system-design-primer

![](https://camo.githubusercontent.com/14f76dab28dfbfa12ea6b02c6bd0ec726fc17306/687474703a2f2f692e696d6775722e636f6d2f6a7255424146372e706e67)

`Certbot`是**Let’s Encrypt**项目发布的官方客户端，利用它可以完全自动化的获取、部署和更新HTTPS证书
https://github.com/lotapp/certbot

**从YouTube.com和其他视频网站下载视频的命令行程序**
```
https://github.com/rg3/youtube-dl

支持列表：
https://github.com/rg3/youtube-dl/tree/master/youtube_dl/extractor

比如：爱奇艺
https://github.com/rg3/youtube-dl/blob/master/youtube_dl/extractor/iqiyi.py
```

收集Python中那些难以理解的例子以及鲜为人知的功能特性, 并尝试讨论这些现象背后真正的原理
https://github.com/lotapp/wtfpython-cn

**控制台命令纠正工具**：`The Fuck`
https://github.com/lotapp/thefuck
![](https://raw.githubusercontent.com/nvbn/thefuck/master/example.gif)

curl代替工具：HTTPie
https://github.com/jakubroztocil/httpie

![](https://raw.githubusercontent.com/jakubroztocil/httpie/master/httpie.png)

### 2019-01-20（推荐）

**【推荐】mitmproxy是一个支持HTTP和HTTPS的抓包程序，有类似Fiddler、Charles的功能**
https://github.com/lotapp/mitmproxy

**【推荐】前端引导组件**：
https://github.com/LessChina/intro.js

![](https://raw.githubusercontent.com/usablica/intro.js/gh-pages/img/introjs-demo.png)

**【推荐】在Web浏览器中可视化Python，Java，JavaScript，TypeScript，Ruby，C和C代码执行**
https://github.com/LessChina/OnlinePythonTutor

简单演示一下：（VSCode Ext：`Python Preview`）
![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190121071805424-1156885895.gif)

颜色配置（作者是浅色，我用浅色演示了下，发现色彩尚可）
![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190121072404211-376355438.png)

如果你也是深色主题可以参考我的设置：(`#21759b` `#0f3647` `#4c0b4c` `#79431c`)
![](https://img2018.cnblogs.com/blog/1127869/201901/1127869-20190121073835489-626215055.png)

### 2019-01-18

#### 源码阅读之Net专栏

**某Net Core 2.1后台管理系统**
https://gitee.com/hao-zhi-ying/HzyAdmin

基于.Net Core的CMS内容管理系统
https://gitee.com/feiyit/FytSoaCms
https://github.com/hogenwang/comcms_core

一个基于ASP.NET Core的可伸缩、通用的文件服务器：
https://github.com/md-frank/file-service

NetCore高性能和轻量级HTTP服务器组件：
https://github.com/IKende/FastHttpApi

![对比](https://camo.githubusercontent.com/0667c9daf8e9ee5d8fe80647864d4a2a71e7d8c6/68747470733a2f2f692e696d6775722e636f6d2f424d6a376234612e706e67)

某NetCore小博客源码：
https://github.com/IKende/XBlog

基于.Net的开源挖矿工具
https://github.com/ntminer/ntminer

### 2019-01-17（必看）

**【推荐】阿里巴巴mysql数据库binlog的增量订阅组件**
https://github.com/alibaba/canal
```
Golang：https://github.com/CanalClient/canal-go
NetCore：https://github.com/CanalClient/CanalSharp
```
![架构](https://camo.githubusercontent.com/46c626b4cde399db43b2634a7911a04aecf273a0/687474703a2f2f646c2e69746579652e636f6d2f75706c6f61642f6174746163686d656e742f303038302f333130372f63383762363762612d333934632d333038362d393537372d3964623035626530346339352e6a7067)

基于日志增量订阅&消费支持的业务：
1. 数据库镜像
2. **数据库实时备份**
3. 多级索引 (卖家和买家各自分库索引)
4. search build
5. **业务cache刷新**
6. **价格变化等重要业务消息**

原理相对比较简单：
1. canal模拟mysql slave的交互协议，伪装自己为mysql slave，向mysql master发送dump协议
2. mysql master收到dump请求，开始推送binary log给slave(也就是canal)
3. canal解析binary log对象(原始为byte流)

**PS：支持kafka消息投递 and 支持prometheus监控**

#### Code

**1.MySQL配置：**
```shell
[mysqld]
log-bin=mysql-bin # 添加这一行就ok
binlog-format=ROW # 选择row模式
server_id=1 # 配置mysql replaction需要定义，不能和canal的slaveId重复
```
canal的原理是模拟自己为mysql slave，所以这里一定需要做为mysql slave的相关权限:（针对已有的账户可直接通过grant）
```sql
CREATE USER canal IDENTIFIED BY 'canal';  
GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'canal'@'%';
-- GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%' ;
FLUSH PRIVILEGES;
```

**2.建立与Canal的连接demo：**
![client](https://github.com/CanalClient/CanalSharp/raw/master/assets/668104-20180925182816462-2110152563.png)

```csharp
Install-Package CanalSharp.Client

//canal 配置的 destination，默认为 example
var destination = "example";
//创建一个简单CanalClient连接对象（此对象不支持集群）传入参数分别为 canal地址、端口、destination、用户名、密码
var connector = CanalConnectors.NewSingleConnector("127.0.0.1", 11111, destination, "", "");
//连接 Canal
connector.Connect();
//订阅，同时传入Filter，如果不传则以Canal的Filter为准。Filter是一种过滤规则，通过该规则的表数据变更才会传递过来
connector.Subscribe(".*\\\\..*");
//获取数据但是不需要发送Ack来表示消费成功
connector.Get(batchSize);
//获取数据并且需要发送Ack表示消费成功
// connector.GetWithoutAck(batchSize);
```

**3.测试**：
```sql
insert into test values(1000,'111');
update test set name='222' where id=1000;
delete from test where id=1000;
```
![client](https://github.com/CanalClient/CanalSharp/raw/master/assets/ys.gif)

Kafka接入参考：https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart

---

**阿里巴巴分布式数据库同步系统**：
https://github.com/alibaba/otter

![架构](https://camo.githubusercontent.com/2988fbbc7ddfe94ed027cd71720b1ffa5912a635/687474703a2f2f646c322e69746579652e636f6d2f75706c6f61642f6174746163686d656e742f303038382f313138392f64343230636131342d326438302d336435352d383038312d6239303833363036613830312e6a7067)

原理描述：
1. 基于**Canal**开源产品，获取数据库增量日志数据
2. 基于**zookeeper**，解决分布式状态调度的，允许多node节点之间协同工作.
3. 典型管理系统架构，manager(web管理)+node(工作节点)
    - manager运行时推送同步配置到node节点
    - node节点将同步状态反馈到manager上

**PS：解决异地机房数据同步问题**

### 2019-01-16（推荐）

**新云盘搜索**：
https://so.6hgr.top

**360开源一款多数据源SQL分析引擎:Quicksql**
https://github.com/lotapp/Quicksql

![架构图](https://github.com/lotapp/Quicksql/raw/master/doc/picture/p1.png)

阿里Oracle数据迁移工具（Oracle to MySQL）
https://github.com/alibaba/yugong

#### Apache ServiceComb微服务框架

**华为开源分布式事务解决方案：Saga**
https://github.com/apache/servicecomb-pack

![架构图](https://github.com/apache/servicecomb-pack/raw/master/docs/static_files/pack.png)
```
Golang：https://github.com/jeremyxu2010/matrix-saga-go
NetCore：https://github.com/OpenSagas-csharp/servicecomb-pack-csharp
```
**PS：如果是Net方向的，还有一款轻量级的推荐：https://github.com/dotnetcore/CAP**

**华为同系列还有一款Go实现的服务中心**：
https://github.com/apache/servicecomb-service-center

---

### 2019-01-14（必看）

上篇回顾：<a href="https://mp.weixin.qq.com/s/VtGPvoHktolCCnC-MUsdlw">日常小计~12月下旬</a>

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

### 2019-01-08（推荐）

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

**百度云**最新优惠：

年底秒杀
https://cloud.baidu.com/event/mid-yearPromotion/index.html

最新活动：
https://cloud.baidu.com/campaign/PromotionActivity/index.html

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

### 2019-01-01（必看）

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