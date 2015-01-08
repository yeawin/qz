$(function(){
	$("#navbar .nav li").bind("mouseover", function(){
		if ($(this).hasClass("active")) {
			return false;
		} else {
			$("#navbar .nav li").removeClass("active");
			$(this).addClass("active");
		}
		var href = $(this).find("a").attr("href");
		var dropdown = '';
		switch(href) {
			case '#' : {
				dropdown = '<li><a href="#">七智</a></li><li><a href="#">业务</a></li><li><a href="#">联系</a></li><li><a href="#">信息</a></li>';
				break;
			}
			case '#international' : {
				dropdown = '<li><a href="#">陶瓷产品</a></li><li><a href="#">其他产品</a></li><li><a href="#">检品服务</a></li>';
				break;
			}
			case '#domestic' : {
				dropdown = '<li><a href="#">商超</a></li><li><a href="#">连锁</a></li><li><a href="#">移动分销务</a></li>';
				break;
			}
			case '#technology' : {
				dropdown = '<li><a href="#">说明</a></li><li><a href="#">陶瓷机械</a></li><li><a href="#">其他</a></li>';
				break;
			}
		}
		$("#drowdown .nav").html(dropdown);
	});
});