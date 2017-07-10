/**
 * 
 */

app.controller("calculateBillForUserController", [ "$scope", function ($scope) {
	
	init();
	function init() {
		$scope.calculateUserBill = calculateUserBill;
	}
	
	function calculateUserBill() {
		console.log("calculateUserBill")
	}
	
} ])