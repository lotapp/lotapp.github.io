Linux汇总：https://www.cnblogs.com/dunitian/p/4822808.html#linux

Ubuntu常用软件安装（小集合）http://www.cnblogs.com/dunitian/p/6670560.html

- [Ubuntu 18.04 最小安装后：](#ubuntu-1804-最小安装后)
    - [更新系统](#更新系统)
    - [卸载应用](#卸载应用)
    - [命令安装](#命令安装)
        - [开启远程连接](#开启远程连接)
        - [安装Git版本控制](#安装git版本控制)
        - [安装浏览器](#安装浏览器)
        - [安装FTP软件](#安装ftp软件)
        - [安装截图软件](#安装截图软件)
        - [GIF录屏](#gif录屏)
        - [安装图片浏览器（设置为默认）](#安装图片浏览器设置为默认)
        - [安装万能播放器](#安装万能播放器)
        - [安装远程桌面](#安装远程桌面)
        - [安装MySQL](#安装mysql)
        - [安装Redis](#安装redis)
        - [安装Redis管理器](#安装redis管理器)
        - [安装Htop监控](#安装htop监控)
        - [微信](#微信)
        - [Flash](#flash)
        - [Virtual Box](#virtual-box)
    - [deb包安装](#deb包安装)
        - [搜狗拼音](#搜狗拼音)
        - [福听PDF阅读器](#福听pdf阅读器)
        - [办公软件WPS](#办公软件wps)
        - [谷歌浏览器](#谷歌浏览器)
        - [安装VSCode](#安装vscode)
        - [安装 PostMan](#安装-postman)
        - [安装 `Anaconda3` + `VSCode Python Path Config`](#安装-anaconda3--vscode-python-path-config)
            - [Anacoda安装](#anacoda安装)
            - [VSCode配置](#vscode配置)
            - [Jupyter默认路径 + 远程访问](#jupyter默认路径--远程访问)
        - [安装JetBrains系列](#安装jetbrains系列)
        - [NetCore 2.1](#netcore-21)
        - [安装思维导图](#安装思维导图)
        - [QT](#qt)
    - [完整安装下需要卸载的软件](#完整安装下需要卸载的软件)
    - [常用设置](#常用设置)

# Ubuntu 18.04 最小安装后：

## 更新系统
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade

## 卸载应用
sudo apt autoremove gedit
sudo apt autoremove firefox*
sudo apt autoremove ibus # 装完输入法再卸载

## 命令安装

### 开启远程连接
sudo apt install openssh-server -y

### 终端复用

`deepin-terminal`
```shell
sudo apt install deepin-terminal -y
or
sudo apt-get install tmux
```

### 安装Git版本控制
参考文章：https://www.cnblogs.com/dotnetcrazy/p/9162115.html

```
sudo apt install git -y

mkdir work
git clone https://github.com/lotapp/BaseCode.git
git clone https://github.com/lotapp/lotapp.github.io.git
```

```
git config --global user.name "lotapp"
git config --global user.email "39723758+lotapp@users.noreply.github.com"

git config --list #查看所有配置
```

### 安装浏览器
```
sudo add-apt-repository ppa:a-v-shkop/chromium
sudo apt-get update
sudo apt-get install chromium-browser
```

### 安装FTP软件
sudo apt install filezilla -y

### 安装截图软件
`flameshot gui` `deepin-screenshot`
```
sudo apt install deepin-screenshot -y
or
sudo apt install flameshot -y
```
设置快捷键参考：(设置-设备-键盘)
https://www.cnblogs.com/dunitian/p/6670560.html#img

### GIF录屏
```
添加一下源：(回车)
sudo add-apt-repository ppa:peek-developers/stable
更新源:
sudo apt update
安装软件：
sudo apt install peek -y
设置快捷键：`Ctrl+Alt+G`
```
### 安装图片浏览器（设置为默认）
sudo apt install deepin-image-viewer -y

### 安装万能播放器
sudo apt-get install smplayer -y

### 安装远程桌面
sudo apt install rdesktop -y

### 安装MySQL
sudo apt install mysql-server

### 安装Redis
sudo apt install redis-server

### 安装Redis管理器
sudo snap install redis-desktop-manager

### 安装Htop监控
sudo apt install htop -y

---

### 微信
直接用谷歌桌面快捷键
https://www.cnblogs.com/dotnetcrazy/p/9124658.html

### Flash
有需要再安装，现在基本上都是HTML5
sudo apt install flashplugin-installer

### Virtual Box
有需要再安装：
sudo apt-get install virtualbox
```
Ubuntu 18.04 安装Virtual Box or VMWare workstation Pro 14
https://www.cnblogs.com/dunitian/p/9125432.html
```
## deb包安装

**安装过程出错就使用：`sudo apt install -f` 然后再安装**

### 搜狗拼音
sudo dpkg -i sogoupinyin*.deb

### 福听PDF阅读器
sudo dpkg -i foxitreader*.deb

### 办公软件WPS
sudo dpkg -i wps-office*.deb

### 谷歌浏览器
```
sudo dpkg -i google-chrome*.deb
or
chromium
sudo add-apt-repository ppa:a-v-shkop/chromium
sudo apt-get update
sudo apt-get install chromium-browser
```
### 安装VSCode
sudo dpkg -i code*.deb

Go：**Go**<br/>
Python：**Python**<br/>
JS、CSS压缩：**Minify**<br/>
Git历史插件：**Git History**<br/>
Markdown：**Markdown All in One**<br/>
JetBrains快捷键：**IntelliJ IDEA Keybindings**

### 安装 PostMan
```
tar -zxvf Postman*.tar.gz
sudo mv Postman /opt/Postman
sudo cp ~/下载/desktops/postman.desktop /usr/share/applications/
```
参考：https://www.cnblogs.com/dunitian/p/6670560.html#_map17

### 安装 `Anaconda3` + `VSCode Python Path Config`
sudo sh Anaconda3*.sh

#### Anacoda安装
```
参考：https://www.cnblogs.com/dotnetcrazy/p/9158715.html

根据提示，添加环境变量（最新版本已经不用自己添加了）
echo 'export PATH="/home/dnt/anaconda3/bin:$PATH"' >> ~/.bashrc

更新一下
source ~/.bashrc
```

换源：
```
code .condarc

channels:
  - https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
  - https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
  - https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
  - https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
  - https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
  - https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
  - defaults
show_channel_urls: true
```
or
```
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --set show_channel_urls yes
```

#### VSCode配置
```
参考：https://www.cnblogs.com/dotnetcrazy/p/9095793.html

pip install --user yapf
pip install --user pycodestyle

安装Python代码格式化工具
"python.pythonPath": "/home/dnt/anaconda3/bin/python",
// 设置Python的代码格式化
"python.formatting.provider": "yapf",
// 设置Python的代码检查
"python.linting.flake8Path": "pycodestyle",
"python.linting.flake8Enabled": true
```

#### Jupyter默认路径 + 远程访问

```
生成配置文件：
jupyter-notebook --generate-config

打开配置文件：
code ~/.jupyter/jupyter_notebook_config.py

设置默认路径：
c.NotebookApp.notebook_dir = '/home/dnt/桌面/work'

https://www.cnblogs.com/dotnetcrazy/p/9552419.html
```
```
Jupyter-Notebook服务器自定义密码
http://www.cnblogs.com/dotnetcrazy/p/9824004.html

图标美化：
https://www.cnblogs.com/dotnetcrazy/p/8760189.html

sudo cp ~/图片/jpg/logo.png ~/anaconda3/lib/python3.7/site-packages/notebook/static/base/images/logo.png

临时远程访问：`jupyter-notebook --ip=*`
https://www.cnblogs.com/dotnetcrazy/p/9552419.html
```

---

### 安装JetBrains系列
破解思路：https://www.cnblogs.com/dotnetcrazy/p/9711763.html

### NodeJS
http://www.cnblogs.com/dotnetcrazy/p/10118756.html
```
sudo apt-get install nodejs npm
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
sudo cnpm install -g ijavascript
ijsinstall
```

### Golang
https://www.cnblogs.com/dotnetcrazy/p/9986873.html
```
sudo apt install golang

sudo apt install libzmq3-dev pkg-config
go get -u github.com/gopherdata/gophernotes
mkdir -p ~/.local/share/jupyter/kernels/gophernotes
cp ~/go/src/github.com/gopherdata/gophernotes/kernel/* ~/.local/share/jupyter/kernels/gophernotes/
echo 'export PATH="/home/dnt/go/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gophernotes
```

### NetCore
https://www.cnblogs.com/dunitian/p/6745562.html#netcore2.1
```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.asc.gpg

sudo mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/

wget -q https://packages.microsoft.com/config/ubuntu/18.04/prod.list 

sudo mv prod.list /etc/apt/sources.list.d/microsoft-prod.list

sudo apt-get install apt-transport-https

sudo apt-get update

#如果只是想运行netcore，那安装运行环境即可：sudo apt-get install dotnet-runtime-2.2
sudo apt-get install dotnet-sdk-2.2
```

### 安装思维导图
XMind8 Setup and Crack：https://www.cnblogs.com/dotnetcrazy/p/9757737.html

### QT
https://www.cnblogs.com/dotnetcrazy/p/6725945.html

---

## 完整安装下需要卸载的软件

卸载libreOffice
sudo apt-get remove libreoffice-common

删除Amazon的链接
sudo apt-get remove unity-webapps-common # 旧版

sudo apt remove ubuntu-web-launchers # 新版

删除火狐：

sudo apt remove firefox # 新版

删除不常用的软件
sudo apt-get remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot onboard deja-dup

sudo apt-get remove gnome-mines cheese transmission-common gnome-orca webbrowser-app gnome-sudoku landscape-client-ui-install

## 常用设置

Linux网络那点事
https://www.cnblogs.com/dunitian/p/6658578.html

怎么添加用户到sudo用户组
https://www.cnblogs.com/dunitian/p/6667683.html