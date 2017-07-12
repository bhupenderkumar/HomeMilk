/**
 * 
 */

app.controller("calculateMonthlyBillController",["$scope", "milkCommonService",function ($scope,milkCommonService) {
	
	init();
	function init(){
	   $scope.calculateMonthlyBill = calculateMonthlyBill ;	
	   $scope.milkConsumers = milkCommonService.getMilkConsumers()
	}
	
	
	
	function calculateMonthlyBill(){
	   console.log("calculateMonthlyBill");
	   
	   
	}
	
	
}]);