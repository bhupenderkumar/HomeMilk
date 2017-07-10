/**
 * 
 */

app.controller("milkAttendanceController",["$scope","milkAttendanceService",function($scope,milkAttendanceService){
	
	
	init();
	
	function init() {
		$scope.form ={};
		$scope.milkConsumers = getMilkConsumers();
		$scope.resetAttendanceForm = resetAttendanceForm;
		$scope.createAttendance = createAttendance
	}
	function createAttendance(){
		console.log($scope.milkConsumers);
		var milkConsumers = angular.copy($scope.milkConsumers);
		var isDataSaved = milkAttendanceService.createAttendance(milkConsumers);
			if(isDataSaved){
			   //clear form show response
				alert("data saved successfully");
				resetAttendanceForm();
			}else
			alert("error in saving ");
		
	}
	
	function resetAttendanceForm(){
		$scope.milkConsumers = getMilkConsumers();
		$scope.form.attendanceForm.submitted=false;
	}
	
}]);