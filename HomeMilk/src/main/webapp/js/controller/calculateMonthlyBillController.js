/**
 * 
 */

app.controller("calculateMonthlyBillController",["$scope", function ($scope) {
	
	init();
	function init(){
	   $scope.calculateMonthlyBill = calculateMonthlyBill ;	
	}
	
	
	
	function calculateMonthlyBill(){
	   console.log("calculateMonthlyBill");
	   
	   
	}
	
	
}]);