/**
 * 
 */

app.controller("updateUserDataController", [ "$scope", "milkCommonService",
        function ($scope, milkCommonService) {
	        
	        init();
	        
	        function init() {
		        $scope.milkConsumers = milkCommonService.getMilkConsumers();
		        $scope.getMilkConsumer = getMilkConsumer;
		        $scope.updateMilkConsumer = updateMilkConsumer
	        }
	        // get MilkConumsers
	        function getMilkConsumer() {
		        
	        }
	        // update milkconsumer
	        function updateMilkConsumer() {
		        
	        }
	        
        } ]);