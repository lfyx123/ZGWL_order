$(function() {
	$(function() {
		// (new SlideClass("ejSlide")).Init();
		$("#ejSlide .list ul li img").each(function() {
			$(this).css("margin-left", -($(this).attr("oldW") / 2));
		})
	});

	$(function() {
		var rightHeight = $("#right").height();
		var leftHeight = $("#left").height();
		// 右侧大于左侧
		if (rightHeight > leftHeight) {
			$("#left").height(rightHeight);
		}
	})

	/**
	 * @author mike
	 * @date 2015年12月20日
	 */
	$("#searchOrder").on("click", function() {

		var dataTmp = {};
		

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
});

function button_onclick(col) {
	col.style.background = "#434261";
};
function button_on(col) {
	col.style.background = "#fff";
};
function blinkit(col) {
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
$(document).ready(
		function() {
			$("#query,#borderLast,#border").on("mouseover mouseout",
					function(event) {
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

			/*
			 * $(".track p").on("mouseover mouseout",function(event){
			 * if(event.type == "mouseover"){ //鼠标悬浮
			 * $(this).addClass("current"); }else if(event.type == "mouseout"){
			 * //鼠标离开 $(this).removeClass("current"); } });
			 * 
			 * $(".track li").click(function(){ $(this).addClass("current");
			 * $(this).prevAll().removeClass("current");
			 * $(this).nextAll().removeClass("current"); });
			 */
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
									$(this).find("p").addClass("current")
											.parent().siblings().find("p")
											.removeClass("current");
								});
					});
			$(".contentNews.elementTwo").click(
					function() {
						var ll = $(this).find(".change.Title").attr("class");
						if (ll == "change Title") {
							$(this).next(".contentNews.elementOne").addClass(
									"dd");
							$(this).next().next(".contentNews.elementOne")
									.addClass("dd");
							// 2,图标还原
							$(".Route").find("img").attr("src",
									"images/JT，1.png");
							// 3,颜色还原
							$(".Route").find(".change.Title").addClass(
									"changeColor");
						} else {
							// 点击一个ul时,将所有的样式复原
							// 1,隐藏ul
							$(".contentNews.elementOne").addClass("dd");
							// 2,图标还原
							$(".Route").find("img").attr("src",
									"images/JT，1.png");
							// 3,颜色还原
							$(".Route").find(".change.Title").addClass(
									"changeColor");
							// 修改当前ul样式
							$(this).find(".changeColor").removeClass(
									"changeColor");
							$(this).find("img").attr("src", "images/JT-1.png");
							// 展示当前ul的后两个ul
							$(this).next(".contentNews.elementOne.dd")
									.removeClass("dd");
							$(this).next().next(".contentNews.elementOne.dd")
									.removeClass("dd");
						}
					});

		});