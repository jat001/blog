---
title: Burp Suite使用详解
tags:
  - Burp Suite
  - Web应用程序测试
  - 信息安全
  - 渗透工具
  - 渗透测试
id: 65
categories:
  - 信息安全
date: 2012-11-18 23:50:49
---

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">Burp Suite是Web应用程序测试的最佳工具之一，其多种功能可以帮我们执行各种任务.请求的拦截和修改,扫描web应用程序漏洞,以暴力破解登陆表单,执行会话令牌等多种的随机性检查。本文将做一个Burp Suite完全正的演练，主要讨论它的以下特点：</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">1.代理&#8211;Burp Suite带有一个代理,通过默认端口8080上运行，使用这个代理，我们可以截获并修改从客户端到web应用程序的数据包.</span>

<span style="font-family: Microsoft YaHei;"><span style="font-size: 14px;">2.Spider(蜘蛛)&#8211;Burp S</span><span style="font-size: 14px;">uite的蜘蛛功能是用来抓取Web应用程序的链接和内容等，它会自动提交登陆表单（通过用户自定义输入）的情况下.Burp Suite的蜘蛛可以爬行扫描出网站上所有的链接,通过对这些链接的详细扫描来发现Web应用程序的漏洞 。</span></span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">3.Scanner(扫描器)&#8211;它是用来扫描Web应用程序漏洞的.在测试的过程中可能会出现一些误报。重要的是要记住,自动扫描器扫描的结果不可能完全100%准确.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">4.Intruder(入侵)&#8211;此功能呢可用语多种用途,如利用漏洞,Web应用程序模糊测试,进行暴力猜解等.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">5.Repeater(中继器)&#8211;此功能用于根据不同的情况修改和发送相同的请求次数并分析.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">6.Sequencer&#8211;此功能主要用来检查Web应用程序提供的会话令牌的随机性.并执行各种测试.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">7.Decoder(解码)&#8211;此功能可用于解码数据找回原来的数据形式,或者进行编码和加密数据.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">8.Comparer&#8211;此功能用来执行任意的两个请求,响应或任何其它形式的数据之间的比较.</span>

&nbsp;

#### <span style="font-family: 'Microsoft YaHei'; font-size: 14px;">1)Proxy(代理)</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">代理功能使我们能够截获并修改请求.为了拦截请求,并对其进行操作，我们必须通过Burp Suite配置我们的浏览器.</span>

![](//www.sinosky.org/uploads/2012/110.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">一旦在浏览器上设置好之后，就打开Burp Suite，去Proxy项进行Intercept(截断),需要确保intercept is on.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_210.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">打开alerts标签,可以看到代理正运行在8080端口.我们可以在Proxy&#8211;&gt;options下来修改这个配置.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_36.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">打开Proxy下的options标签</span>

![](//www.sinosky.org/uploads/2012/44.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">在这里我们可以编辑代理正在监听的端口,甚至添加一个新的代理监听.Burp也有向SSL保护网站提交证书的选项.默认情况下，Burp创建一个自签名的证书之后立即安装.&#8221;generate CA-signed per-host certificates&#8221;选项选中之后Burp的证书功能将生成一个我们能够链接的证书签署的特定主机.在这里我们关心的唯一事情是，当一个用户链接到一个SSL保护的网站时，能后减少网站警告提示的次数.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">如果我们不选中&#8221;listen on loopback interface only&#8221;选项，意味着Burp Proxy可以作为一个网络上其它系统的代理。这意味着在同一网络中的任何计算机都可以使用Burp Proxy功能成为代理,并中继通过它的流量.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">&#8220;support invisible proxying for non-proxy-aware client&#8221;选项是用于客户端不知道他们使用的是代理的情况下.这意味着代理设置不是设置在浏览器，有时候设置在hosts文件中.在这种情况下，和将代理选项设置在浏览器本身所不同的是Burp需要知道它是从一个非代理客户端接收流量的.&#8221;redirect to host&#8221;和&#8221;redirect to port&#8221;选项将客户端重定向到我们在该选项后设置的主机和端口。</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_52.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">同样,我们可以拦截请求，并根据我们指定的规则返回响应.</span>

![](//www.sinosky.org/uploads/2012/1.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">这里有个选项用来修改从响应中接收到的html网页。我们可以取消隐藏的表单字段,删除javascript等。还有一个选项用自定义字符串替换掉寻找到的特定的模式.我们需要用指定正则表达式。Burp将解析请求或者响应以期望能够寻找到这种模式,将会用自定义的字符串来替换它.</span>

![](//www.sinosky.org/uploads/2012/62.png)

#### <span style="font-family: 'Microsoft YaHei'; font-size: 14px;">2)Spid</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">er(抓取)</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">Burp Spider用来映射Web应用程序.它会自动抓去Web应用程序的链接,提交它发现的所有登陆表单,从而详细的分析整个应用程序.这些链接会传递给Burp Scanner,进行详细的扫描.在这种情况下,我们将使用上DVWA(Damn Vulnerable Web Application).只是需要DVMA使用你的浏览器，确保Burp Suite上的inerrcept is on,并且得到Brup截取的请求,右键单击拦截的请求，选择&#8221;Send to Spider&#8221;发送给蜘蛛.</span>

![](//www.sinosky.org/uploads/2012/72.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">接下来会弹出一个警告弹窗让我们&#8221;add item to scope(添加项目到作用域)&#8221;.点击&#8221;Yes&#8221;.一个范围将在我们运行的测试目标上定义好.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_2.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">我们能够在site map&#8211;&gt;target标签看到一个url已经添加进作用域.我们也能看到一些其它的目标已经在目标列表中添加好了.Burp会自动使用代理浏览我们定义好的目标网页.我们可以使用单击右键&#8211;&gt;&#8221;add item to scope(添加项目到作用域)&#8221;添加任何项目到我们的作用域.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_81.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">进入Scope标签,我们能够看到DVWA应用已经添加到作用域.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_3.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">接下来我们进入Spider标签,点击&#8221;options(选项)&#8221;,我们可以设置各种选项当运行Burp检测应用程序的时候.我没有可以让Burp检查robotx.txt文件(check for the robots.txt)，它会尝试抓去网站管理员不允许搜索引擎索引的目录.另外一个重要的选项是&#8221;passively spider as you browse(被动蜘蛛浏览)&#8221;。基本上Burp Spider可以以被动和主动模式运行,选择这个就要求Burp Spider保持新的内容和链接进行扫描,因为我们浏览应用程序的时候使用了Burp proxy。</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_4.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">另外一个重要的选项是&#8221;application login(应用程序登陆)&#8221;.一旦Burp Spider提交一个登陆表单的时候就开始爬行(抓取).它可以自动提交我们提供给它的证书.我们同样可以设置admin/password凭证,设置好之后,他们会做为DVWA中的凭证.因此Burp Spider可以自动提交那些信息凭证,并且保持爬行抓取的状态希望能够获得更多的新的信息.你也可以在thread(线程)项来修改线程数.</span>

<div>
<div style="text-align: center;">![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_5.png)</div>
</div>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">要开始爬行抓去Web应用程序,只需要右键点击目标展开目标.然后在展开的dvwa项上单击鼠标右键选择&#8221;Spider this brach&#8221;</span>

![](//www.sinosky.org/uploads/2012/121.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">这样就会启动Burp Spider，在Spider control标签下我们会看到正在做出的请求,我们也可以为Burp Spider自定义一个范围.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_141.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">一旦运行完成之后，我们在dvwa分支上会看到很多新的URL,这些URL为我们提供了很多有关Web信用程序的信息.然后我们就可以发送这些链接给Burp Scanner来进行漏洞扫描.Burp Scanner只有在专业版上才有这个功能.</span>

![](//www.sinosky.org/uploads/2012/10.png)

#### <span style="font-family: 'Microsoft YaHei'; font-size: 14px;">3)Intr</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">uder(入侵)</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">Burp Intruder可以用于利用漏洞,模糊测试,暴力猜解等。在这种情况下我们将使用Burp Suite的Intruder对DVWA进行暴力猜解攻击.浏览到DVWA,单击&#8221;Burp Force(暴力猜解)&#8221;,随便输入username和password,确保Burp Suite上的&#8221;intercept is on(监听是打开的)&#8221;.然后点击登陆.</span>

![](//www.sinosky.org/uploads/2012/161.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">登陆请求将被Burp Suite监听拦截到,然后右键单击&#8221;send to intruder(发送给入侵者功能)&#8221;</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_171.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">以上的操作会将请求信息发送给intruder功能.进入intruder标签,配置Burp Suite来发起暴力猜解的攻击.在target标签下可以看到已经设置好了要请求攻击的目标</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_6.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">进入positions(选项)标签,我们可以看到之前发送给Intruder的请求.一些重要的信息用其它颜色显示.基本上是由Burp Suite进行猜解,是为了弄明白暴力猜解的这些请求中什么是发生改变的. 这种情况下只有用户和密码是不停的发生改变.我们需要相应的配置Burp.</span>

![](//www.sinosky.org/uploads/2012/181.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">单击右边的&#8221;clear&#8221;按钮,将会删除所有用不同颜色演示的重要的信息.接下来我们需要配置Burp在这次攻击中只把用户名和密码做为参数.选中本次请求中的username(本例中用户名是指&#8221;infosecinstiture&#8221;)然后单击&#8221;Add(添加)&#8221;.同样的将本次请求中的password也添加进去.这样操作之后,用户名和密码将会成为第一个和第二个参数.一旦你操作完成,输出的样子应该如下图所示:</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_191.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">接下来我们需要设置这次攻击的攻击类型,默认情况下的攻击类型是&#8221;Sniper(狙击手)&#8221;,在本例中，我们将使用&#8221;Cluster Bomb(集束炸弹)&#8221;的攻击类型.有四种攻击类型，分别是singer,battering ram,pitchfork,cluster bomb.下图中我们看到的我们的攻击类型是&#8221;Cluster Bomb&#8217;</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_201.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">进入payload标签,确保&#8221;payload set&#8221;的值是1,点击&#8221;load(加载)&#8221;加载一个包含用户名的文件 。本例中我们使用一个很小的文件来进行演示.加载之后用户名文件中的用户名会如下图所示</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_221.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">同样设置&#8221;payload set&#8221;的值为2,点击&#8221;load&#8221;加载一个密码字典文件。</span>

![](//www.sinosky.org/uploads/2012/212.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">进入&#8221;options&#8221;标签,确保results下的&#8221;store requests&#8221;和&#8221;store responses&#8221;已经选择.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_7.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">点击左上角的&#8221;Intruder&#8221;开始攻击,会看到弹出一个windows窗口,其中有我们制作好的所有请求。</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">我们如何确定哪一个登陆请求是成功的呢？通过一个成功的请求相比不成功的，是有一个不同的响应状态.在这种情况下,我们看到的用户名&#8221;admin&#8221;和密码&#8221;password&#8221;的响应长度相比其它的请求，有所不同.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_231.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">根据不同的响应请求，点击&#8221;request&#8221;.如果点击&#8221;response&#8221;选项,我们看到文字&#8221;welcome the password protected area admin&#8221;出现在响应中,这意味着这次请求中使用的username/password是正确的.</span>

<div style="text-align: center;">![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_07_241.png)</div>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">Burp的入侵功能是Burp Suite最强大的功能之一.我们要仔细的学习它的使用.</span>

#### <span style="font-family: 'Microsoft YaHei'; font-size: 14px;">4)Repeater</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">(中继转发)</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">通过Burp Repeater功能,我们可以手动修改一个请求,并且发送出去,来分析返回的响应.我们需要从不同的地方发送请求给Burp Repeater,比如入侵者，代理等.发送一个请求给Repeater，只需要单击右键&#8221;send to Repeater&#8221;.</span>

![](//www.sinosky.org/uploads/2012/8.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">点</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px; line-height: 1.5;">开Repeater标签,会看到request，也可以看到名为1，2，3的3个标签.</span>

![](//www.sinosky.org/uploads/2012/9.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">我们也可以看到requestparams,header,hex和raw格式的请求,发送请求之前,我们可以修改其中的任何一个.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_10.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">只修改Params请求下的username=admin，password=password，点击go,这样就会发送这个请求.</span>

![](//www.sinosky.org/uploads/2012/11.png)

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">我们可以分析response部分返回的响应.</span>

![](//www.sinosky.org/uploads/2012/www.nxadmin.com_wp-content_uploads_2012_08_12.png)

<p><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">还有几部分功能没有翻译出来,由于英文水平以及工作经验欠缺，很多专业词汇可能翻译不是很准确，贴上原文URL，可以对照阅读.</span>

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">原文地址：</span><span style="font-family: 'Microsoft YaHei'; font-size: 14px;">[http://resources.infosecinstitute.com/burp-suite-walkthrough/](http://resources.infosecinstitute.com/burp-suite-walkthrough/)</span>

&nbsp;

<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">Posted on </span>[<span style="font-family: 'Microsoft YaHei'; font-size: 14px;">http://www.nxadmin.com/tools/689.html</span>](http://www.nxadmin.com/tools/689.html)