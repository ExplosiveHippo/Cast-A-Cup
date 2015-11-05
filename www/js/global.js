$(".side-menu-toggle").on("click",function(e){
	$(".side-menu").addClass("active");
	$(e.currentTarget).hide();
	$(".app").find("div:not(.side-menu)").hide();
});