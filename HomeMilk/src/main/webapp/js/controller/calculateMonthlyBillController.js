/**
 * 
 */

app.controller("calculateMonthlyBillController",["$scope", function ($scope) {
	
	init();
	function init(){
	   $scope.calculateMonthlyBill = calculateMonthlyBill ;	
	   $scope.milkConsumers = getMilkConsumers()
	}
	
	
	
	function calculateMonthlyBill(){
	   console.log("calculateMonthlyBill");
	   
	   
	}
	
	
}]);