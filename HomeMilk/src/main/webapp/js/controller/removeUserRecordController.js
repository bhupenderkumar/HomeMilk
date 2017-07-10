/**
 * 
 */

app.controller("removeUserRecordController",["$scope","removeUserRecordController",function($scope,removeUserRecordController){
	
	init();
	function init(){
		$scope.deleteUser = deleteUser;	
	}
	
	function deleteUser(){
		console.log("deleting users");
//		removeUserRecordController.deleteUser(data).then(function(response){
//			
//		},function(errorResponse){
//			
//		});
	}
	
}]);