$(function() {
	var rightHeight = $("#right").height();
	var leftHeight = $("#left").height();
	// 右侧大于左侧
	if (rightHeight > leftHeight) {
		$("#left").height(rightHeight);
	}
	$(".query,#borderLast,#border").on("mouseover mouseout", function(event) {
		if (event.type == "mouseover") {
			// 鼠标悬浮
			$(this).css("border", "1px solid #434261");
		} else if (event.type == "mouseout") {
			// 鼠标离开
			$(this).css("border", "1px solid #c9c9c9");
		}
	});
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
	// 联系方式
	$(document).ready(
			function() {
				$(".Call li").hover(function() {
					// alert("o");
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

				// 订单跟踪导航
				$(".track li").hover(function() {
					// alert("o");
					$(this).addClass("current")
				}, function() {
					$(this).removeClass("current")
				});
				$(".track li").click(
						function() {
							$(this).find("p").addClass("current").parent()
									.siblings().find("p")
									.removeClass("current");
						});
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

	$(".contentNews.elementTwo").click(
			function() {
				var ll = $(this).find(".change.Title").attr("class");
				if (ll == "change Title") {
					$(this).next(".contentNews.elementOne").addClass("dd");
					$(this).next().next(".contentNews.elementOne").addClass(
							"dd");
					// 2,图标还原
					$(".Route").find("img").attr("src", "images/JT，1.png");
					// 3,颜色还原
					$(".Route").find(".change.Title").addClass("changeColor");
				} else {
					// 点击一个ul时,将所有的样式复原
					// 1,隐藏ul
					$(".contentNews.elementOne").addClass("dd");
					// 2,图标还原
					$(".Route").find("img").attr("src", "images/JT，1.png");
					// 3,颜色还原
					$(".Route").find(".change.Title").addClass("changeColor");
					// 修改当前ul样式
					$(this).find(".changeColor").removeClass("changeColor");
					$(this).find("img").attr("src", "images/JT-1.png");
					// 展示当前ul的后两个ul
					$(this).next(".contentNews.elementOne.dd")
							.removeClass("dd");
					$(this).next().next(".contentNews.elementOne.dd")
							.removeClass("dd");
				}
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
	

	/*
	 * ,function() { $(this).addClass("ConitionCol"); }, function() {
	 * $(this).removeClass("ConitionCol"); // alert('112') }
	 */

	$("#KHDDspan").on("click", function() {
		$("#queryKHDD").removeAttr("hidden");
		$("#queryKHQSD").attr("hidden", "true");
	});

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
	 * 查询条件选中事件
	 */
	$('#ConitionKHDDul').on('click','li',function() {
		$('.Conition').hide();
		$('.Display').hide()
	});
	
	/**
	 * @author LYL
	 * @date 2015年12月20日
	 */
	$("#searchOrder").on("click", function() {
		$.ajax({
			type : 'post',
			url : "http://localhost:8081/new_frame/order/orderfun",
			dataType : 'jsonp',
			jsonpCallback : 'callback',
			data : {
				'name' : name
			},
			success : function(json) {
				console.log(json);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
			}
		});

	})

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
											str = str + '<li class="ConitionLi"><span>'+value.F_XMLXMC+'</span>'
												+ '<span>'+value.F_KHQSD+'</span> <span>'+value.F_KFZYD+'</span> <span>'+value.F_SHLLR+'</span>'
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