var $scope = $('.social');
var $icons = $scope.find(".social-toggle");

$icons.on("click",function(e){
	var img = $(e.currentTarget).find("img");
	var src = $(img).attr("src");
	if(src.indexOf("-on") > 0 ){
		src = src.replace("-on","");
		$(img).css("left",0);
		$(img).siblings("p").text("off");
	}else{
		src = src.replace(".png","-on.png");
		$(img).css("left",270);
		$(img).siblings("p").text("on");
	}
	$(e.currentTarget).find("img").attr("src",src);
});