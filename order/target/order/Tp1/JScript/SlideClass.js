/*幻灯片样式001*/
function SlideClass(DivIdName){
	//幻灯节点对象
	this.DivObj=$("#"+DivIdName);
	//大图节点对象
	this.DivBigImgObj=$("#"+DivIdName+" .list");
	this.BigLiArr=$("#"+DivIdName+" ul li");
	//缩略图节点对象
	this.DivObj.append("<div class='Thumb'></div>");
	this.DivThumbObj=$("#"+DivIdName+" .Thumb");
	this.ThumbLiObj=null;
	//其他设置
	this.index=0;
	this.timeer=null;
	this.speed=3000;//切换速度
}

/**
 * 初始化
 */
SlideClass.prototype.Init=function(n){
	this.SetSize();
	this.SetBtn();
	this.BindEvt();
	this.ShowOne();
	this.Paly();
}

/*设置居中
 * 图片要设成绝对定位
 * left:50%
 * */
SlideClass.prototype.SetSize=function() {
	this.BigLiArr.find("img").each(function(){
		var imgW=$(this).attr("oldW");		
		$(this).css({"marginLeft":-imgW/2+'px'});
	})
}
/**
 * 设置按钮
 */
SlideClass.prototype.SetBtn = function(){
	var width=parseInt(17 * this.BigLiArr.length, 10);
	var theHtml = "<ul style='width:" + width + "px;'>";
	for (var i = 0; i < this.BigLiArr.length; i++) {
		theHtml += "<li rel='" + i + "'><em>&nbsp;</em></li>";
	}
	theHtml += "</ul>";
	$(this.DivThumbObj).html(theHtml);	
	//$(this.DivThumbObj).css({position:"absolute",left:"50%",marginLeft:"-"+parseInt(width/2,10)+"px"});
	this.ThumbLiObj = $(this.DivThumbObj).find("li");
	$(this.ThumbLiObj[0]).addClass("onfocus");
}

/**
 * 为大图及按钮绑定事件
 */
SlideClass.prototype.BindEvt = function(){
	var theObj = this;
	$(this.BigImgArr).hover(function(){
		clearInterval(theObj.timeer);
	}, function(){
		theObj.Paly();
	});
	$(this.ThumbLiObj).hover(function(){
		clearInterval(theObj.timeer);
		theObj.index=parseInt($(this).attr("rel"),10);
		theObj.ShowOne();
		theObj.Paly();
	}, function(){
	});
}

/**
 * 播放
 */
SlideClass.prototype.Paly=function(){
	var theObj=this;
	this.timeer=setInterval(function(){theObj.ShowOne()},this.speed);
}

/**
 * 显示一个
 */
SlideClass.prototype.ShowOne=function(){
	$(this.BigLiArr[this.index]).stop()
	.animate({opacity: 1}, 800, function(){
	}).show()
	.siblings().stop().animate({opacity: 0.3}, 800).hide();
	
	
	$(this.ThumbLiObj).removeClass("onfocus");
	$(this.ThumbLiObj[this.index]).addClass("onfocus");
	if(this.index<this.BigLiArr.length-1){
		this.index++;
	}else{
		this.index=0;
	}
}

