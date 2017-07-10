/**
 * 
 */

app.controller("removeUserRecordController",["$scope",function($scope){
	
	init();
	function init(){
		$scope.deleteUser = deleteUser;	
	}

	
	function deleteUser(){
		console.log("deleting users");
	}
	
}]);