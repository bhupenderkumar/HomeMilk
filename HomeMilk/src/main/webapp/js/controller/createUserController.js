/**
 * 
 */
app.controller("createUserController",function($scope){
	
	
	init();
	
	function init() {
		
		$scope.resetMilkConsumer = resetMilkConsumer;
		resetMilkConsumer();
	}
	
	
	function resetMilkConsumer(){
		$("#UserName").focus();
		$scope.milkConsumer = {};
	}
});