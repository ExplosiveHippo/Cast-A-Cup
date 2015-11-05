var $scope = $(".profile");
var $profileBlock = $scope.find(".profile-block");

$profileBlock.on("click",function(e){
	var src = $(e.currentTarget).attr("src");
	if(src == "images/profile-block.jpg"){
		src = "images/profile-graph.png";
	}else{
		src = "images/profile-block.jpg";
	}

	$(e.currentTarget).attr("src",src);
});