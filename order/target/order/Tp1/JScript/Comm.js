/*JScript文件*/

/**文字向上滚动2222**/
function DownScroll(colee0,colee1,colee2)
{
 var speed=70
 var colee_bottom2=document.getElementById(colee2);
 var colee_bottom1=document.getElementById(colee1);
 var colee_bottom=document.getElementById(colee0);
 
 colee_bottom2.innerHTML=colee_bottom1.innerHTML;
 function Marquee2(){
  if(colee_bottom2.offsetHeight-colee_bottom.scrollTop<=0)
  {
   colee_bottom.scrollTop-=colee_bottom1.offsetHeight;
  }
  else{
   colee_bottom.scrollTop++;
  }
 };
 var MyMar2=setInterval(Marquee2,speed);
 colee_bottom.onmouseover=function() {clearInterval(MyMar2);};
 colee_bottom.onmouseout=function() {MyMar2=setInterval(Marquee2,speed);};
}

//验证字符串是否只含数字，字母，汉字和下划线 是则返回True 否则返回False
function isUser(str){
	var reg = /[^A-Za-z0-9\u4e00-\u9fa5_]/g;
	if (reg.test(str)) {
		return (false);
	}
	else {
		return (true);
	}
}

//手机号码验证，验证13系列和150-159(154除外)、180、182、185、186、187、188、189几种号码，长度11位
function isMobel(value)  {  
	if(/^13\d{9}$/g.test(value)||(/^15[0-35-9]\d{8}$/g.test(value))||(/^18[025-9]\d{8}$/g.test(value))){    
		return true;  
	}else{
		return false;  
	}  
}

//判断邮件正则
function Isyx(yx){
	var reyx = /^([a-zA-Z0-9_\.])+@([a-zA-Z0-9_])+(.[a-zA-Z0-9_])+/;
	return (reyx.test(yx));
}

//在线留言
function GuestBook(theForm){
	if (theForm.subject_txt.value == "") {
		alert("请输入主题");
		theForm.subject_txt.focus();
		return false;
	}
	if (theForm.nickname_txt.value == "") {
		alert("请输入昵称");
		theForm.nickname_txt.focus();
		return false;
	}
	if(theForm.tel_txt.value.length!=11){
		alert("手机号必须为11位的数字");
		theForm.tel_txt.focus();
		return false;
	}
	if(!Isyx(theForm.email_txt.value)){ 
		 alert("请输入正确的邮箱地址!");
		 theForm.email_txt.focus();
		 return false;
	}
	if (theForm.content_txt.value == "") {
		alert("请输入内容");
		theForm.content_txt.focus();
		return false;
	}
	if (theForm.ImgCode.value == "") {
		alert("请输入验证码");
		theForm.ImgCode.focus();
		return false;
	}
	
}
//文件上传
function GuestBook1(theForm){
	if (theForm.name.value == "") {
		alert("请输入姓名");
		theForm.name.focus();
		return false;
	}
	if(theForm.tel.value.length!=11){
		alert("手机号必须为11位的数字");
		theForm.tel.focus();
		return false;
	}
	if (theForm.file.value == "") {
		alert("请选择要上传的文件");
		theForm.file.focus();
		return false;
	}
}

//翻页的跳转
function goToTheUrl(num){
	var url=window.location.href;
	var cc=num;
	var re = /page=[\d]+/;				
	if(re.test(url)){
		var c=url.replace(re,"page="+cc+"");
	}else{
		url+='&page='+cc;
	  var	c= url;
	}
	location.href = c;
}

//限制内容图片大小
function resize(o,w) {
	if (o.width>w) {
	o.style.width=w+'px';
	o.style.height='auto';
	}
}

//加入收藏(调用addfavorite();)
function addfavorite(){
	try {
		window.external.addFavorite(window.location.href, document.title);
	} 
	catch (e) {
		try {
			window.sidebar.addPanel(document.title, window.location.href, "");
		} 
		catch (e) {
			alert('请使用按键 Ctrl+d，收藏网址')
		}
	}
}

//设为首页(调用setHome(this,window.location);)
function setHome(obj, vrl){
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} 
	catch (e) {
	
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} 
		catch (e) {
			alert("此操作被浏览器拒绝！\n请手动设为首页。");
		}	
	}
}

//显示动画
function showFlash(flashWIDTH, flashHEIGHT, flashURL){
	if (flashURL.indexOf("?") != -1) {
		flashURL += '&rad=' + Math.random();
	}
	else {
		flashURL += '?rad=' + Math.random();
	}
	document.writeln('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" WIDTH=' + flashWIDTH + ' HEIGHT=' + flashHEIGHT + '>');
	document.writeln('<PARAM NAME=movie VALUE="' + flashURL + '">');
	document.writeln('<PARAM NAME=wmode VALUE=transparent>');
	document.writeln('<PARAM NAME=loop VALUE=true>');
	document.writeln('<PARAM NAME=quality VALUE=high>');
	document.writeln('<EMBED src="' + flashURL + '" loop=true wmode=transparent quality=high swLiveConnect=FALSE WIDTH=' + flashWIDTH + ' HEIGHT=' + flashHEIGHT + ' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>');
	document.writeln('</OBJECT>');
}

//搜索
function SearchList(txtId, defaultvalue){
	var thetxt = document.getElementById(txtId);
	var attr=thetxt.getAttribute("rel");	
	if (thetxt.value == "" || thetxt.value == defaultvalue) {
		alert(defaultvalue);
		thetxt.focus();
		return;
	}
	location.href = "News_Search.php?tag=Search&type="+ attr+"&thetxt=" + encodeURIComponent(thetxt.value);
}


//获取今天的时间
function getTheDay(){
	today = new Date();
	var day = "";
	var date1 = "";
	switch (today.getDay()) {
		case 0:
			day = "星期日";
			break;
		case 1:
			day = "星期一";
			break;
		case 2:
			day = "星期二";
			break;
		case 3:
			day = "星期三";
			break;
		case 4:
			day = "星期四";
			break;
		case 5:
			day = "星期五";
			break;
		case 6:
			day = "星期六";
			break;
		default:
			break;
	}
	
	if (today.getYear() >= 2000) {
		date1 = (today.getYear()) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 ";
	}
	else {
		date1 = (1900 + today.getYear()) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 ";
	}
	document.getElementById("showTime").innerHTML = date1 +"&nbsp;" + day ;
	setTimeout("getTheDay()", 1000);
}


