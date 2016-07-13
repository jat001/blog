---
title: 使用树莓派制作的远程开门器
tags:
  - DIY
  - Raspberry Pi
  - 树莓派
  - 远程开门
id: 186
categories:
  - Geek
date: 2013-03-07 16:42:14
---

### 背景：

* * *

话说自从我厂的商务部门搬到旁边的商务楼之后，工程师发现漂亮的前台MM也搬走了，某区只留下冷冷清清的鱼缸。然后，工程师们发现开门成了个问题。鉴于进门需要刷卡，所以没有带卡的工程师就不得不摁下门铃，等待其他人从座位上起身为自己开门。经历过多次不得不让别人来开门以及不得不为别人开门之后，终于有工程师不能忍受了（我就是其中一个），于是，决定自己动手解决问题。要知道，地球上没有能难住工程师的问题！

### 研究与选择方案：

* * *

我厂的电子门锁的开门设备是通过一个带弹簧的开关（门内，类似墙面上开灯的开关）控制的，按下开关就能打开门，按下开关的时候能够听到明显的继电器闭合的声音，因此，趁着没人的时候我把开关拆开看了一下，证实的确是通过触电控制的一个继电器。按下开关时，两个金属触电接触，继电器动作，门打开。继电器在动作后延时4秒左右恢复。这样看来，硬件层面的开门实现就非常简单了：跨接一个数字继电器，要开门时，通过电平信号控制继电器闭合并保持2秒即可。

[![IMAG0013](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0013.jpg)](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0013.jpg "IMAG0013")

但要实现远程控制，必须设置一台可以通过TCP或是HTTP协议接受用户命令，并能控制开门硬件（继电器）的设备。最初考虑过Arduino，作为一个开源的硬件平台，Arduino的电平输出非常易于控制和操作。而且Arduino也有RJ45或是无线的接口模块。不过在查看了Arduino的无线模块的操作方式之后，我发现要让Arduino接入一个WPA加密的无线网络并实现一个web server并不容易。所以最终还是选择了树莓派（Raspberry PI），虽然RPI的硬件成本更高一点。

RPI与Arduino的设计目标不同，它主要是一个超小的PC主机。幸好RPI本身提供了若干个GPIO的输出口（3.3V），用来操作数字继电器倒是没有问题。

1.  RPI的GPIO引脚的定义：<a>http://elinux.org/RPi_Low-level_peripherals#General_Purpose_Input.2FOutput_.28GPIO.29</a>
2.  引脚的输出规格：<a>http://elinux.org/RPi_BCM2835_GPIOs</a>
3.  RPI的GPIO教程：<a>http://log.liminastudio.com/writing/tutorials/tutorial-how-to-use-your-raspberry-pi-like-an-arduino</a>

**请特别注意：由于GPIO的引脚是没有保护电路的，不当的硬件连接很可能会导致整块RPI板子烧掉，连接和操作时务必慎重。在确定方案时，我个人使用了面包板，电阻和二极管等电子元件搭建实验电路，并反复用万用表验证过输出电压和电流（主要是对RPI的每个脚的输出不确定）。**

### 操作步骤：

* * *

#### 在RPI上安装操作系统

拿到RPI后，首先要在RPI上安装操作系统。这里有份文档：<a>http://log.liminastudio.com/writing/tutorials/getting-started-with-the-raspberry-pi</a>，安装完操作系统后，确保重新启动成功（RPI的视频输出口是HDMI接口，可以直接连接在支持HDMI的显示器或是电视上，或者可以通过HDMI转VGA/DVI的连接线连接到支持VGA/DVI的显示器上。**注意：无源的HDMI转VGA的线可能会损坏RPI板**）。

#### 配置网络

RPI本身的网络支持已经比较完善，通过有线方式接入的话，只要直接插入网线就可。考虑到无线方式部署比较方便，我采用的是无线连接的方式。

RPI仅对部分网卡支持较好，利用RPI的官网上的无线网卡兼容信息，最终选择了一款相对便宜且能得到较好支持的网卡：**TP-LINK TL-WN823N**，该网卡可以从amazon.cn购买，购买地址见本文最后的列表。

插入网卡后，修改网卡的配置信息：

<pre class="lang:shell " >
sudo vi /etc/network/interfaces
</pre>

修改其中与wlan0相关的部分：

<pre class="lang:shell " >
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet static
    wpa-ssid 你要连接的wifi ssid
    wpa-psk 你的wpa连接密码
address 192.168.0.20    # 设定的静态IP地址
netmask 255.255.255.0   # 网络掩码
gateway 192.168.0.1     # 网关
network 192.168.0.0      # 网络地址
#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
</pre>

这里我选择了使用静态地址，原因是我们不希望开门的服务器地址老是变来边去。设置好网络并确认能够正常工作后，就可以着手进行下一个步骤了。

#### 连接硬件

下图是具体的连接方式，注意连在RPI上的三条线，白色（电源）、黑色（GND）、灰色（信号）分别连接在RPI GPIO的2号、6号与7号针脚上。

[![IMAG0015](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0015.jpg)](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0015.jpg "IMAG0015")

#### 编写代码

RPI的操作系统缺省已经有一个Python的安装了。因此，我们可以使用Python来设置Web Server并控制开门的硬件设备。我选择了web.py作为Web server的开发基础，加上GPIO的python库来完成工作。

1.  Web.py的下载、安装与教程：<a>http://webpy.org/</a>
2.  RPI GPIO的python库安装和使用：<a>http://log.liminastudio.com/writing/tutorials/tutorial-how-to-use-your-raspberry-pi-like-an-arduino</a>

接下来就是在RPI上设置Web server了。遵循我厂的传统，使用Python作为Web server的主要开发语言。

开门硬件控制相关代码：

<pre class="lang:python " >
import RPi.GPIO as GPIO
import time

PORT = 7

def reset():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(PORT, GPIO.IN)

def initcontroller():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(PORT, GPIO.OUT)
    GPIO.output(PORT, True)

def opendoor():
    GPIO.setup(PORT, GPIO.OUT)
    GPIO.output(PORT, False)
    time.sleep(2)
    GPIO.output(PORT, True)
</pre>

Web server代码（基于web.py）

<pre class="lang:python " >
import web
    from web import form
    import doorop
    import requests

render = web.template.render('templates/')

urls = (
        '/', 'index'
)
app = web.application(urls, globals())

myform = form.Form(
    form.Textbox("username"),
    form.Textbox("password", form.notnull)
)

#initial door controller
doorop.initcontroller()

def verifyuser(uname, passwd):
    #这里是验证用户的逻辑，我是用公司的LDAP服务器进行验证的
    #验证成功返回True，否则返回False
    pass

class index:
    def GET(self):
        form = myform()
        return render.formtest(form)

    def POST(self):
        form = myform()
        if not form.validates():
            return render.formtest(form)
        else:
            if(verifyuser(form['username'].value, form['password'].value)):
                doorop.opendoor()
                return "door opened!"
            else:
                return "Username/Password invalid!"

if __name__ == "__main__":
    web.internalerror = web.debugerror
    app.run()
</pre>

这样就在RPI上建立了一个web server，用HTTP POST方式输入正确的用户名和口令就能实现开门。

为了更方便地应用远程开门（例如，用手机开门显然更cool），可以编写iOS或是Android上运行的开门应用。当然，由于开门只需要发送一个HTTP POST请求，直接写成一个可以在Mac/Linux/Win下运行的命令行也可以。

[![IMAG0011](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0011.jpg)](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_IMAG0011.jpg "IMAG0011")部署后的全景

[![Screenshot_2012-12-18-16-11-20](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_Screenshot_2012-12-18-16-11-20.png)](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_Screenshot_2012-12-18-16-11-20.png "Screenshot_2012-12-18-16-11-20")

豆瓣开门

[![Screenshot_2012-12-18-16-11-04](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_Screenshot_2012-12-18-16-11-04.png)](http://img.sinosky.org/2013/www.guanheshan.com_eledoor_Screenshot_2012-12-18-16-11-04.png "Screenshot_2012-12-18-16-11-04")豆瓣开门widget

### 后记与感谢：

感谢所有参与这个项目的我厂同学们，豆瓣的确是个有着独特的技术文化的环境，这里不仅有许多可以互相交流想法的技术geek，还有这庞大的对所有新鲜的东西感兴趣的工程师群体，欢迎各位喜欢这个环境的其他非我厂同学们参观和加入：）

### 成本与硬件列表：

1.  树莓派（MODB-512M） **带运费，税费，约300元**

2.  TP-LINK TL-WN823N 300M迷你型无线USB网卡 **55元**<a>
</a>

3.  连接线：**2元** <a>
</a>

4.  两路数字继电器 **5元** <a>
</a>

5.  其他： **约60元** 导线 4G SD卡一张

Posted on [http://www.cnblogs.com/guanhe/archive/2012/12/25/2832982.html](http://www.cnblogs.com/guanhe/archive/2012/12/25/2832982.html)