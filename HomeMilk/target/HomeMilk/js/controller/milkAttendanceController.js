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
	function getMilkConsumers(){
		var arr=[];
		for(count =0;count <1;count++) {
			var json ={};
			json.name = "Test__"+count;
			json.milkQuantity = Math.floor(((count * Math.random()) +1))
			arr.push(json);
		}
		return arr;
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