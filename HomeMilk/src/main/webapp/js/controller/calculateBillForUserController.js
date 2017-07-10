/**
 * 
 */

app.controller("calculateBillForUserController", [ "$scope", function ($scope) {
	
	init();
	function init() {
		$scope.calculateUserBill = calculateUserBill;
		$scope.milkConsumers = getMilkConsumers()
	}
	
	function calculateUserBill() {
		console.log("calculateUserBill")
	}
	
} ])