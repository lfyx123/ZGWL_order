$(function() {
	var F_XMLXBHtmp;
	var F_KHQSDtmp;
	var F_KFZYDtmp;
	var F_KHDDBHtmp;
	
	var rightHeight = $("#right").height();
	var leftHeight = $("#left").height();
	// 右侧大于左侧
	if (rightHeight > leftHeight) {
		$("#left").height(rightHeight);
	}
	$(".queryClick").on("mouseover mouseout", function(event) {
		if (event.type == "mouseover") {
			// 鼠标悬浮
			$(this).css("color", "#434261");
			$(this).css("background-color", "white");
			$(this).css("border", "1px solid #434261");
		} else if (event.type == "mouseout") {
			// 鼠标离开
			$(this).css("color", "white");
			$(this).css("background-color", "#434261");
		}
	});
	
	$(".Call li").hover(function() {
		$(this).find("span").show();
	}, function() {
		var clickTag = $(this).attr("data-click-tag");
		if (clickTag != 1) {
			$(this).find("span").hide();
		}
	});
	$(".Call li").click(function() {
		$(this).attr("data-click-tag", 1);
		$(this).siblings().attr("data-click-tag", 0);
		$(this).siblings().each(function(index, item) {
			$(item).find("span").hide();
		});
	});

	$(".track li").click(
			function() {
				$(this).find("p").addClass("current").parent()
						.siblings().find("p")
						.removeClass("current");
			});

	// 订单查询切换
	$("#queryOne .state .stateFont").hover(function() {

		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	$("#queryOne .stateFont ").click(function() {
		$(".stateFont").removeClass("select");
		$(this).addClass("select");
	});

	$("#ejSlide .list ul li img").each(function() {
		$(this).css("margin-left", -($(this).attr("oldW") / 2));
	})

	$(".query .search input.queryClick").click(function() {
		$('.Display').show();
	});
	$('.ConitionTitle span').click(function() {
		$('.Display').hide()
	});
	$('.ConitionTitle span').click(function() {
		$('.Conition').hide()
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 客户签收单鼠标移入移出
	 */
	$('#KHQSDUl').on('mouseover mouseout','li',function(){
		if (event.type == "mouseover") {
			// 鼠标悬浮
			$(this).css("border", "1px solid #434261");
			$(this).addClass("current");
		} else if (event.type == "mouseout") {
			// 鼠标离开
			$(this).css("border", "1px solid #c9c9c9");
			$(this).removeClass("current");
		}
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 点击客户签收单查询订单信息
	 */
	$('#KHQSDUl').on('click','li',function(){
		var F_KHQSDtmp2 = $(this).find('p').html();
		var F_XMLXBHtmp2 = F_XMLXBHtmp;
		var F_KFZYDtmp2 = F_KFZYDtmp;
		var F_KHDDBHtmp2 = F_KHDDBHtmp;
		
		var data = {};
		data['F_XMLXBH'] = F_XMLXBHtmp2;
		data['F_KHQSD'] = F_KHQSDtmp2;
		data['F_KFZYD'] = F_KFZYDtmp2;
		data['F_KHDDBH'] = F_KHDDBHtmp2;
		test(data);
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 切换到客户订单面板
	 */
	$("#KHDDspan").on("click", function() {
		$("#queryKHDD").removeAttr("hidden");
		$("#queryKHQSD").attr("hidden", "true");
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 切换到客户签收单面板
	 */
	$("#KHQSDspan").on("click", function() {
		$("#queryKHQSD").removeAttr("hidden");
		$("#queryKHDD").attr("hidden", "true");
	})

	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 查询条件hover事件
	 */
	$("#ConitionKHDDul").on('mouseover mouseout','li', function(event) {
		if (event.type == 'mouseover') {
			$(this).addClass("ConitionCol");
		} else {
			$(this).removeClass("ConitionCol");
		}
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 订单跟踪点击切换样式
	 */
	$("#DDGZDiv").on('click','.elementOne',
		function() {
				$('.elementTwo').addClass('elementOne');
				$('.elementTwo').find('.change.Title').addClass('changeColor');
				$('.elementTwo').removeClass('elementTwo');
				$(this).find('.change.Title.changeColor').removeClass("changeColor");
				$(this).removeClass('elementOne');
				$(this).addClass('elementTwo');
	});
	
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 查询条件选中事件
	 */
	$('#ConitionKHDDul').on('click','li',function() {
		var F_XMLXBH = $($(this).find('.F_XMLXBH')[0]).text();
		var F_KHQSD = $($(this).find('.F_KHQSD')[0]).text();
		var F_KFZYD = $($(this).find('.F_KFZYD')[0]).text();
		var F_KHDDBH = $("#KHDDtxt").val();
		$('.Conition').hide();
		$('.Display').hide();
		var data = {};
		data['F_XMLXBH'] = F_XMLXBH;
		data['F_KHQSD'] = F_KHQSD;
		data['F_KFZYD'] = F_KFZYD;
		data['F_KHDDBH'] = F_KHDDBH;
		
		F_XMLXBHtmp = F_XMLXBH;
		F_KHQSDtmp = F_KHQSD;
		F_KFZYDtmp = F_KFZYD;
		F_KHDDBHtmp = F_KHDDBH;
		
		test(data);
	});

	/**
	 * @author LYL
	 * @date 2015年12月20日 客户订单查询按钮
	 */
	$("#KHDDbtn")
			.click(
					function() {
						$
								.ajax({
									type : 'post',
									url : "http://localhost:8081/new_frame/order/khddbtn",
									dataType : 'jsonp',
									jsonpCallback : 'callback',
									data : {
										'khddbh' : $('#KHDDtxt').val()
									},
									success : function(data) {
										var str ="";
										$.each(data.resultMap.KHDDList, function(name, value) {
											str = str + '<li class="ConitionLi"><span>'+value.F_XMLXMC+'</span>'+'<span class="F_XMLXBH">'+value.F_XMLXBH+'</span>'
												+ '<span class="F_KHQSD">'+value.F_KHQSD+'</span> <span class="F_KFZYD">'+value.F_KFZYD+'</span> <span>'+value.F_SHLLR+'</span>'
												+ '<span>'+value.F_SHRLLFS+'</span></li>';
										     
										});
										$('#ConitionKHDDul').html(str);
										$('.Conition').show();
									},
									error : function(XMLHttpRequest,
											textStatus, errorThrown) {
									}
								});

					});
});

function test(data)
{
	$.ajax({
		type : 'post',
		url : "http://localhost:8081/new_frame/order/orderfun",
		dataType : 'jsonp',
		jsonpCallback : 'callback',
		data : data,
		contentType:'application/json;charset=utf-8',
		success : function(json) {
			$('#F_XMLXMCSpan').html(json['resultMap']['KHDD']['XMMC']);
			$('#F_KHQSDSpan').html(json['resultMap']['KHDD']['KHQSD']);
			$('#LCSpan').html(json['resultMap']['KHDD']['LC']);
			$('#JJCDSpan').html(json['resultMap']['KHDD']['JJCD']);
			$('#YSLXSpan').html(json['resultMap']['KHDD']['YSLX']);
			$('#WLLXSpan').html(json['resultMap']['KHDD']['WLLX']);
			$('#KFZYDSpan').html(json['resultMap']['KHDD']['KFZYD']);
			
			var str="";
			$.each(json['resultMap']['KHQSDList'],function(index,value){
				console.log(this['F_KHQSD']);
				if(index==0)
				{
					str = str + "<li class='newline'><p>"+this['F_KHQSD']+"</p></li>";
				}
				else if(index%7==0)
				{
					str = str + "<li class='track newline'><p>"+this['F_KHQSD']+"</p></li>";
				}
				else
				{
					str = str + "<li class='margin newline'><p>"+this['F_KHQSD']+"</p></li>";
				}
			});
			$('#KHQSDUl').html(str);
			
			var str2 = "";
			$.each(json['resultMap']['DDGZList'],function(index,value){
				
				if(index == 0)
				{
					str2 = str2 + '<ul class="contentNews elementTwo">'
				}else
				{
					str2 = str2 + '<ul class="contentNews elementOne">'
				}
				
				str2 = str2 + '<li class="time"><span class="stateFont fontColor">'+this['F_LRSJ']+'</span>'
					 + '<span class="Hour">16:00</span></li>'
					 + '<li>';
				if(index == 0)
				{
					str2 = str2 + '<ul class="change Title ">'
				}else
				{
					str2 =str2 + '<ul class="change Title changeColor">'
				}
				str2 = str2 + '<li class="newsOne">'
					 + '<p>'+this['F_BZ']+'</p>'
					 + '</li>'
					 + '<li class="name"><p>'+this['F_ZT']+'</p></li>'
					 + '<li class="name"><p>'+this['CPH']+'</p></li>'
					 + '<li class="name"><p>'
					 + this['NAME']+' <img src="images/JT-1.png" />'
					 + '</p></li>'
					 + '</ul>'
					 + '</li>'
					 + '</ul>';
			});
			$('#test').html(str2);
			
			$('#F_YSFSSpan').html(json['resultMap']['KHDD']['F_YSFS']);
			$('#F_PCHSpan').html(json['resultMap']['KHDD']['F_PCH']);
			
			var gzzt = json['resultMap']['GZZT'];
			for(i=1;i<=6;i++)
			{
				$("#ZT_"+i).addClass("scheduleBg");
				$("#ZT_"+i).find('img').attr('src',"images/ZT,"+i+".png");
				if(i<=gzzt)
				{
					$("#ZT_"+i).removeClass("scheduleBg");
					$("#ZT_"+i).find('img').attr('src',"images/ZT-"+i+".png");
				}
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});	
}

function button_onclick(col) {
	col.style.background = "#434261";
};
function button_on(col) {
	col.style.background = "#fff";
};
function blinkitKHDD(col) {
	intrvl = 0;
	for (nTimes = 0; nTimes < 1; nTimes++) {
		intrvl += 30;
		setTimeout(function() {
			button_onclick(col)
		}, intrvl);
		intrvl += 30;
		setTimeout(function() {
			button_on(col)
		}, intrvl);
	}
}