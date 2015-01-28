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
			case '/qz' : {
				dropdown = '<li><a href="#">七智</a></li><li><a href="#">业务</a></li><li><a href="#">联系</a></li><li><a href="#">信息</a></li>';
				break;
			}
			case '/qz/international' : {
				dropdown = '<li><a href="/qz/international/china">陶瓷产品</a></li><li><a href="/qz/international/other">其他产品</a></li><li><a href="/qz/international/service">检品服务</a></li>';
				break;
			}
			case '/qz/domestic' : {
				dropdown = '<li><a href="/qz/domestic/mall">商超</a></li><li><a href="/qz/domestic/chain">连锁</a></li><li><a href="/qz/domestic/distribution">移动分销</a></li>';
				break;
			}
			case '/qz/technology' : {
				dropdown = '<li><a href="/qz/technology/instruction">说明</a></li><li><a href="/qz/technology/machinery">陶瓷机械</a></li><li><a href="/qz/technology/other">其他</a></li>';
				break;
			}
		}
		$("#drowdown .nav").html(dropdown);
	});
});