$(function() {
	var F_XMLXBHtmp;
	var F_KHQSDtmp;
	var F_KFZYDtmp;
	var F_KHDDBHtmp;
	var F_SHLLRtmp;
	var F_SHRLLFStmp;
	
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
		var F_SHLLRtmp2 = F_SHLLRtmp;
		var F_SHRLLFStmp2 = F_SHRLLFStmp;
		
		var data = {};
		data['F_XMLXBH'] = F_XMLXBHtmp2;
		data['F_KHQSD'] = F_KHQSDtmp2;
		data['F_KFZYD'] = F_KFZYDtmp2;
		data['F_KHDDBH'] = $("#KHDDtxt").val();
		data['F_SHLLR'] = F_SHLLRtmp2;
		data['F_SHRLLFS'] = F_SHRLLFStmp2;
		
		$(this).find("p").addClass("current").parent().siblings().find("p").removeClass("current");
		
		getOrderInfo(data);
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
	 * 查询条件hover事件
	 */
	$("#ConitionKHQSDul").on('mouseover mouseout','li', function(event) {
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
		var F_KFZYD = $($(this).find('.F_KFZYD')[0]).text();
		var F_KHDDBH = $("#KHDDtxt").val();
		var F_SHLLR = $($(this).find('.F_SHLLRVAL')[0]).text();
		var F_SHRLLFS = $($(this).find('.F_SHRLLFSVAL')[0]).text();
		$('.Conition').hide();
		$('.Display').hide();
		var data = {};
		data['F_XMLXBH'] = F_XMLXBH;
		data['F_KFZYD'] = F_KFZYD;
		data['F_KHDDBH'] = F_KHDDBH;
		data['F_SHLLR'] = F_SHLLR;
		data['F_SHRLLFS'] = F_SHRLLFS;
		
		F_XMLXBHtmp = F_XMLXBH;
		F_KFZYDtmp = F_KFZYD;
		F_KHDDBHtmp = F_KHDDBH;
		F_SHLLRtmp = F_SHLLR;
		F_SHRLLFStmp = F_SHRLLFS;
		
		getOrderInfo(data);
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 * 查询条件选中事件
	 */
	$('#ConitionKHQSDul').on('click','li',function() {
		var F_XMLXBH = $($(this).find('.F_XMLXBH')[0]).text();
		var F_KFZYD = $($(this).find('.F_KFZYD')[0]).text();
		var F_KHDDBH = $($(this).find('.F_KHDDBH')[0]).text();
		var F_SHLLR = $($(this).find('.F_SHLLRVAL')[0]).text();
		var F_SHRLLFS = $($(this).find('.F_SHRLLFSVAL')[0]).text();
		$('.Conition').hide();
		$('.Display').hide();
		var data = {};
		data['F_XMLXBH'] = F_XMLXBH;
		data['F_KFZYD'] = F_KFZYD;
		data['F_KHDDBH'] = F_KHDDBH;
		data['F_SHLLR'] = F_SHLLR;
		data['F_SHRLLFS'] = F_SHRLLFS;
		
		F_XMLXBHtmp = F_XMLXBH;
		F_KFZYDtmp = F_KFZYD;
		F_KHDDBHtmp = F_KHDDBH;
		F_SHLLRtmp = F_SHLLR;
		F_SHRLLFStmp = F_SHRLLFS;
		
		getOrderInfo(data);
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
									url : "http://117.79.231.114:8081/new_frame/order/khddbtn",
									dataType : 'jsonp',
									jsonpCallback : 'callback',
									data : {
										'khddbh' : $('#KHDDtxt').val()==null?"无订单":$('#KHDDtxt').val()
									},
									success : function(data) {
										if(data.resultMap.KHDDList.length==0)
										{
											$('.Display').hide();
											$('#NoneKHDDSpan').css("visibility","visible");
											setTimeout(function () {
												$('#NoneKHDDSpan').css("visibility","hidden");
										    }, 2000);
											return false;
										}
										if(data.resultMap.KHDDList.length==1)
										{
											var F_XMLXBHtmp2 = data.resultMap.KHDDList[0]['F_XMLXBH'];
											var F_KFZYDtmp2 = data.resultMap.KHDDList[0]['F_KFZYD'];
											F_XMLXBHtmp = data.resultMap.KHDDList[0]['F_XMLXBH'];
											F_KFZYDtmp = data.resultMap.KHDDList[0]['F_KFZYD'];
											F_KHDDBHtmp = data.resultMap.KHDDList[0]['F_KHDDBH'];
											F_SHLLRtmp = data.resultMap.KHDDList[0]['F_SHLLRVAL'];
											F_SHRLLFStmp = data.resultMap.KHDDList[0]['F_SHRLLFSVAL'];
											var data2 = {};
											data2['F_XMLXBH'] = F_XMLXBHtmp2;
											data2['F_KFZYD'] = F_KFZYDtmp2;
											data2['F_KHDDBH'] = $('#KHDDtxt').val();
											getOrderInfo(data2);
											$('.Conition').hide();
											$('.Display').hide();
											return false;
										}
										
										var str ="";
										$.each(data.resultMap.KHDDList, function(name, value) {
															str = str
																	+ '<li class="ConitionLi"><span>'
																	+ value.F_XMLXMC
																	+ '</span>'
																	+ '<span class="F_XMLXBH" style="display:none">'+value.F_XMLXBH+'</span>'
												+ '<span class="F_KFZYD">'+value.F_KFZYD+'</span> <span class="F_SHLLR">'+value.F_SHLLR+'</span>'
												+ '<span class="F_SHRLLFS">'+value.F_SHRLLFS+'</span>'
												+ '<span class="F_SHLLRVAL" style="display:none">'+value.F_SHLLRVAL+'</span>'
												+ '<span class="F_SHRLLFSVAL" style="display:none">'+value.F_SHRLLFSVAL+'</span>'
												+ '</li>';
										     
										});
										$('#ConitionKHDDul').html(str);
										$('.Conition').show();
									},
									error : function(XMLHttpRequest,
											textStatus, errorThrown) {
									}
								});

					});
	/**
	 * @author LYL
	 * @date 2015年12月20日 客户签收单查询按钮
	 */
	$("#KHQSDbtn")
	.click(
			function() {
				$
						.ajax({
							type : 'post',
							url : "http://117.79.231.114:8081/new_frame/order/khqsdbtn",
							dataType : 'jsonp',
							jsonpCallback : 'callback',
							data : {
								'khqsd' : $('#KHQSDtxt').val()==""?"无签收单":$('#KHQSDtxt').val()
							},
							success : function(data) {
								if(data.resultMap.KHDDList.length==0)
								{
									$('.Display').hide();
									$('#NoneKHQSDSpan').css("visibility","visible");
									setTimeout(function () {
										$('#NoneKHQSDSpan').css("visibility","hidden");
								    }, 2000);
									return false;
								}
								if(data.resultMap.KHDDList.length==1)
								{
									var F_XMLXBHtmp2 = data.resultMap.KHDDList[0]['F_XMLXBH'];
									var F_KFZYDtmp2 = data.resultMap.KHDDList[0]['F_KFZYD'];
									F_XMLXBHtmp = data.resultMap.KHDDList[0]['F_XMLXBH'];
									F_KFZYDtmp = data.resultMap.KHDDList[0]['F_KFZYD'];
									F_KHDDBHtmp = data.resultMap.KHDDList[0]['F_KHDDBH'];
									F_SHLLRtmp = data.resultMap.KHDDList[0]['F_SHLLRVAL'];
									F_SHRLLFStmp = data.resultMap.KHDDList[0]['F_SHRLLFSVAL'];
									var data2 = {};
									data2['F_XMLXBH'] = F_XMLXBHtmp2;
									data2['F_KFZYD'] = F_KFZYDtmp2;
									data2['F_KHQSD'] = $('#KHQSDtxt').val();
									getOrderInfo(data2);
									$('.Conition').hide();
									$('.Display').hide();
									return false;
								}
								
								var str ="";
								$.each(data.resultMap.KHDDList, function(name, value) {
									str = str + '<li class="ConitionLi"><span>'+value.F_XMLXMC+'</span>'+'<span class="F_XMLXBH" style="display:none">'+value.F_XMLXBH+'</span>'
										+ '<span class="F_KFZYD">'+value.F_KFZYD+'</span> <span class="F_SHLLR">'+value.F_SHLLR+'</span>'
										+ '<span class="F_KHDDBH">'+value.F_KHDDBH+'</span>'
										+ '<span class="F_SHRLLFS">'+value.F_SHRLLFS+'</span>'
										+ '<span class="F_SHLLRVAL" style="display:none">'+value.F_SHLLRVAL+'</span>'
										+ '<span class="F_SHRLLFSVAL" style="display:none">'+value.F_SHRLLFSVAL+'</span>'
										+ '</li>';
								     
								});
								$('#ConitionKHQSDul').html(str);
								$('.Conition').show();
							},
							error : function(XMLHttpRequest,
									textStatus, errorThrown) {
							}
						});

			});
});


function getOrderInfo(data)
{
	$.ajax({
		type : 'post',
		url : "http://117.79.231.114:8081/new_frame/order/orderfun",
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
			$("#F_KHDDBHSpan").html(json['resultMap']['KHDD']['F_KHDDBH']);
			$("#F_DDZTSpan").html(json['resultMap']['KHDD']['F_DDZT']);
			var str="";
			$.each(json['resultMap']['KHQSDList'],function(index,value){
				if(value!=null&&index==0)
				{
					str = str + "<li class='newline'><p>"+this['F_KHQSD']+"</p></li>";
				}
				else if(value!=null&&index%7==0)
				{
					str = str + "<li class='track newline'><p>"+this['F_KHQSD']+"</p></li>";
				}
				else if(value!=null)
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
};
function blinkitKHQSD(col) {
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