/**
 * 
 */

app.controller("removeUserRecordController", [ "$scope",
        "removeUserRecordController", "milkCommonService",
        function ($scope, removeUserRecordController, milkCommonService) {
	        
	        init();
	        function init() {
		        $scope.deleteUser = deleteUser;
		        $scope.milkConsumers = milkCommonService.getMilkConsumers()
	        }
	        
	        function deleteUser() {
		        console.log("deleting users");
		        console.log($scope.milkConsumer)
		        // removeUserRecordController.deleteUser(data).then(function(response){
		        //			
		        // },function(errorResponse){
		        //			
		        // });
	        }
	        
        } ]);