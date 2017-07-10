/**
 * 
 */

app.controller("updateUserDataController", [ "$scope", function ($scope) {
	
	init();
	
	function init() {
		$scope.milkConsumers = getMilkConsumers();
		$scope.getMilkConsumer = getMilkConsumer ;
		$scope.updateMilkConsumer = updateMilkConsumer
	}
	//get MilkConumsers
	function getMilkConsumer(){
		
	}
	//update milkconsumer
	function updateMilkConsumer(){
		
	}
	
} ]);