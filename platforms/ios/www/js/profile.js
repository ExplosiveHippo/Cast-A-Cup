var $scope = $('.profile');
var $profileBlock = $scope.find('.profile-hero .status');

$profileBlock.on("touchstart",function(e){
	var text = $(e.currentTarget).text();
	$(e.currentTarget).text(
		text == "Status: Inactive" ? "Status: Active" : "Status: Inactive"
	);
	$(e.currentTarget).closest(".profile-hero").toggleClass("in-active");
});