/**
 * 
 */

app.controller("calculateBillForUserController", [ "$scope",
        "milkCommonService", function ($scope, milkCommonService) {
	        
	        init();
	        function init() {
		        $scope.calculateUserBill = calculateUserBill;
		        $scope.milkConsumers = milkCommonService.getMilkConsumers()
	        }
	        
	        function calculateUserBill() {
		        console.log("calculateUserBill")
	        }
	        
        } ])