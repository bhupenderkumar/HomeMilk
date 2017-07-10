/**
 * 
 */

app.controller("updateUserDataController", [ "$scope", function ($scope) {
	
	init();
	
	function init() {
		$scope.milkConsumers = getMilkConsumers();
	}
} ]);