<%@ page language="java" contentType="text/html; UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="企业简介" />
<meta name="description"
	content="中国物流有限公司是国务院国资委监管的大型企业集团——中国诚通控股集团有限公司控股的成员企业，主要提供铁路和公路运输、公路-铁路-水运联运、国际货运代理、仓储、配送、生产和销售的供应链管理、物流金融等综合物流服务。特别是在烟酒快速消费品、装备制造业等行业领域，具备了成熟的服务能力和标准体系，形成了独特的竞争优势。中国物流有限公司四川分公司是中国物流有限公司系统内重点企业、优秀企业，总部设成都市高新区，..." />
<title>企业简介-中国物流有限公司四川分公司</title>
<link rel="stylesheet" type="text/css" href="Tp1/Css/Main.css" />
<link rel="stylesheet" type="text/css" href="Tp1/Css/Style.css" />
<style type="text/css">
body, td, th {
	color: #333333;
}

body {
	background-color: #FFFFFF;
}
</style>
<script type="text/javascript" src="Tp1/JScript/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="Tp1/JScript/Comm.js"></script>
<script type="text/javascript" src="Tp1/JScript/SlideClass.js"></script>
<script type="text/javascript" src="Tp1/sysResource/index.js" charset="gb2312"></script>
</head>
<body>
	<div class="Display"></div>
	<!--公共顶部-->
	<div id="global-top">
		<div class="center">
			<div class="logo">
				<a href="index.php"><img src="images/logo.jpg" width="354"
					height="100" alt="网站logo" /></a>
			</div>
			<!--公共导航 -->
			<div id="global-nav">

				<ul>
					<li><a href="index.php">网站首页</a></li>
					<li><a href="IntroNews.php?tag=gywm">关于我们</a></li>
					<li><a href="IntroNews.php?tag=ywlx">业务类型</a></li>
					<li><a href="News_List.php?tag=GuestBook">客户服务</a></li>
					<li><a href="News_List.php?tag=xwzx">新闻中心</a></li>
					<li><a href="Intro.php?tag=lxwm">联系我们</a></li>
				</ul>

			</div>
			<div class="tongdao">
				<a href="http://210.14.144.220/seeyon/index.jsp"
					style="color: #fff;">员工通道</a>
			</div>
		</div>
	</div>
	<div id="ejMain">
		<div class="center">
			<div id="left">
				<div id="leftNav">
					<div class="title">
						<em>订单中心</em><span>ORDER CENTER</span>
					</div>
				</div>
			</div>
			<div id="right">
				<div id="rightTop">
					<span> 当前位置： <a href="http://www.cd56.cn/">网站首页</a>
						&nbsp;&gt;&nbsp; <strong>订单中心</strong>
					</span>
				</div>
			</div>
			<!--查询区域-->
			<div id="contentContent">
				<div id="queryOne">
					<div class="state">
						<span class="stateFont Font select" id="KHDDspan">客户订单号</span><span class="stateFont Font FontMargin" id="KHQSDspan">客户签收单号</span>
					</div>
					<div id="queryKHDD" class="query">
						<div class="center" style="height:80px;">
							<span style="display:block;margin-top:10px;color:red;visibility:hidden" id="NoneKHDDSpan">找不到该订单，请重新输入！</span>
							<div class="search">
								<input type="text" class="input" placeholder="请输入客户订单号 " id="KHDDtxt"/> <input
									type="button" class="queryClick" style="cursor: pointer" id="KHDDbtn"
									onclick="blinkitKHDD(this)" value="查询" />
								<input type="hidden" class="input" id="XMLXBH"/>
								<input type="hidden" class="input" id="KHDDBH"/>
								<input type="hidden" class="input" id="KFZYD"/>
								<input type="hidden" class="input" id="KHQSD"/>
							</div>
						</div>
						<div class="Conition">
							<div class="ConitionTitle">
								请选择<span>X</span>
							</div>
							<div class="Gray"></div>
							<ul id="ConitionKHDDul">
							</ul>
						</div>
					</div>
					<div id="queryKHQSD" class="query" hidden="true">
						<div class="center" style="height:80px;">
							<span style="display:block;margin-top:10px;color:red;visibility:hidden" id="NoneKHQSDSpan">找不到该签收单，请重新输入！</span>
							<div class="search">
								<input type="text" class="input" placeholder="请输入客户签收单号 " id="KHQSDtxt"/> <input
									type="button" class="queryClick" style="cursor: pointer"  id="KHQSDbtn"
									onclick="blinkitKHQSD(this)" value="查询"/>
							</div>
						</div>
						<div class="Conition">
							<div class="ConitionTitle">
								请选择<span>X</span>
							</div>
							<div class="Gray"></div>
							<ul id="ConitionKHQSDul">
								
							</ul>

						</div>
					</div>
				</div>
			</div>
			<!--查询区域结束-->
			<!--订单状态区域-->
			<div id="contentContent">
				<div id="border">
					<div class="center">
						<div class="state">
							<span class="stateFont">订单号<span class="Font" id="F_KHDDBHSpan"></span></span>
							<span class="stateFont">订单状态<span class="Font" id="F_DDZTSpan"></span></span>

							<ul class="schedule">
								<li class="first scheduleBg" id="ZT_1"><img src="images/ZT,1.png" /><span
									class="firat"></span>
								<p class="stateFont">已作成</p></li>

								<li class="scheduleBg" id="ZT_2"><img src="images/ZT,2.png" /><span></span>
								<p class="stateFont">已接收</p></li>
								
								<li  class="scheduleBg" id="ZT_3"><img src="images/ZT,3.png" /><span></span>
								<p class="stateFont">已派车</p></li>
								
								<li class="scheduleBg"  id="ZT_4"><img src="images/ZT,4.png" /><span></span>
								<p class="stateFont">已起运</p></li>

								<li class="scheduleBg" id="ZT_5"><img src="images/ZT,5.png" /><span></span>
								<p class="stateFont">已到达</p></li>

								<li class="scheduleBg" id="ZT_6"><img src="images/ZT,6.png" />
								<p class="stateFont">运输完成</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--订单状态结束-->
			<!--订单信息区域-->
			<div id="contentContent">
				<div id="borderLast">
					<div class="center">
						<div class="Route">
							<span class="stateFont ">订单信息</span>
						</div>
						<div class="fixed Font_Color TopColor">
							<ul>
								<li><p>项目名称</p>
									<span id="F_XMLXMCSpan"></span></li>
								<li><p>客户签收单</p>
									<span id="F_KHQSDSpan"></span></li>
								<li><p>发送方</p>
									<span id="F_FSFSpan" style="display:none">中国物流有限公司</span></li>
								<li><p>总路程数</p>
									<span id="LCSpan"></span><span id="KMSpan" style="display:none">千米</span></li>
							</ul>
						</div>
						<div class="fixed Font_Color TopColor">
							<ul>
								<li><p>紧急程度</p>
									<span id='JJCDSpan'></span></li>
								<li><p>运输类型</p>
									<span id='YSLXSpan'></span></li>
							</ul>
						</div>
						<div class="fixed Font_Color TopColor">
							<ul class="Width">
								<li><p>运输路线</p>
									<span id='WLLXSpan'></span></li>
							</ul>
						</div>
						<div class="fixed Font_Color TopColor">
							<ul class="Width">
								<li>
									<p>库房作业单</p> <span id='KFZYDSpan'></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--订单跟踪区域-->
			<div id="contentContent">
				<div id="border">
					<div class="center">
						<div class="Route" id="DDGZDiv">
							<span class="stateFont ">订单跟踪</span>
							<ul class="track Top" id="KHQSDUl">
							</ul>
							<ul class="Title Top">
								<li class="time"><p>时间</p></li>
								<li class="news"><p>在途信息</p></li>
								<li class="name"><p>跟踪状态</p></li>
								<li class="name"><p>车牌号</p></li>
								<li class="name"><p>跟踪人</p></li>
							</ul>
							<div id="ddgz" style='margin-top:10px;float:left;width:100%'></div>
						</div>
					</div>
					<!-- 订单跟踪底部区域-->
					<div class="fixed changeColor">
						<ul class="MarginLeft Font_Color">
							<li><p>承运商</p>
								<span style="display:none" id="CYSSpan">中国物流有限公司</span></li>
							<li><p>运输方式</p>
								<span id="F_YSFSSpan"></span></li>
							<li><p>批次号</p>
								<span id="F_PCHSpan">____</span></li>
						</ul>
					</div>
					<!-- 订单跟踪底部区域结束-->

				</div>
				<!--联系方式-->
				<div class="Call">
					<ul>
						<li><img src="images/QQ-1.png" /><a href="#">3223026195</a><span>
								<img src="images/QQ,1.png" /><a href="#">3223026195</a>
						</span></li>
						<li><img src="images/QQ-1.png" /><a href="#">3249334352</a><span>
								<img src="images/QQ,1.png" /><a href="#">3249334352</a>
						</span></li>
						<li><img src="images/QQ-1.png" /><a href="#">1585563777</a><span>
								<img src="images/QQ,1.png" /><a href="#">1585563777</a>
						</span></li>
						<li><img src="images/DH-1.png" /><a href="#">028-83377810</a><span>
								<img src="images/DH,1.png" /><a href="#">028-83377810</a>
						</span></li>
						<li><img src="images/DH-1.png" /><a href="#">028-83377803</a><span>
								<img src="images/DH,1.png" /><a href="#">028-83377803</a>
						</span></li>
						<li><img src="images/DH-1.png" /><a href="#">028-83377870</a><span>
								<img src="images/DH,1.png" /><a href="#">028-83377870</a>
						</span></li>
					</ul>
				</div>
				<!--联系方式结束-->
			</div>
		</div>
	</div>
	<!--跟踪区域结束-->
	<!--订单信息区域结束-->

	<div id="global-bottom">
		<div class="center">
			<div class="link">
				<a href="index.php">网站首页</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
					href="IntroNews.php?tag=gywm">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
					href="IntroNews.php?tag=ywlx">业务类型</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
					href="News_List.php?tag=GuestBook">客户服务</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
					href="News_List.php?tag=xwzx">新闻中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
					href="Intro.php?tag=lxwm">联系我们</a>
			</div>
			<div class="copyright">
				<p>
					公司地址：<span style="FONT-FAMILY: 宋体; FONT-SIZE: 14px">四川省成都市</span><span
						style="FONT-FAMILY: 宋体; FONT-SIZE: 14px">高新区天府二街198号泸州老窖大厦1903室</span>
				</p>
				<p>
					<br />
				</p>
			</div>

		</div>
	</div>
	<!--第三方插件-->
	<!--右侧漂浮-->
</body>
</html>
