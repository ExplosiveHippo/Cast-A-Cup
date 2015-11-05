$(".side-menu-toggle").on("click",function(e){
	$(".side-menu").addClass("active");
	$(e.currentTarget).hide();
});