/**
 * 
 */

app.controller("removeUserRecordController",["$scope","removeUserRecordController",function($scope,removeUserRecordController){
	
	init();
	function init(){
		$scope.deleteUser = deleteUser;	
		$scope.milkConsumers = getMilkConsumers()
	}
	
	function deleteUser(){
		console.log("deleting users");
		console.log($scope.milkConsumer)
//		removeUserRecordController.deleteUser(data).then(function(response){
//			
//		},function(errorResponse){
//			
//		});
	}
	
}]);