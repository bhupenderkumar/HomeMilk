/**
 * 
 */

app.controller("milkAttendanceController", [
        "$scope",
        "milkAttendanceService",
        "milkCommonService",
        function ($scope, milkAttendanceService, milkCommonService) {
	        
	        init();
	        
	        function init() {
		        $scope.form = {};
		        intializeMilkConsumers();
		        // $scope.milkConsumers = milkCommonService.getMilkConsumers();
		        $scope.resetAttendanceForm = resetAttendanceForm;
		        $scope.createAttendance = createAttendance
	        }
	        function intializeMilkConsumers() {
		        var app = milkCommonService.getMilkConsumers();
		        app.then(function (response) {
			        console.log(response)
			        $scope.milkConsumers = response.data;
		        }, function (error) {
			        alert(error)
		        })
	        }
	        
	        function createAttendance() {
		        console.log($scope.milkConsumers);
		        var milkConsumers = angular.copy($scope.milkConsumers);
		        var isDataSaved = milkAttendanceService
		                .createAttendance(milkConsumers);
		        isDataSaved.then(function (response) {
			        console.log(response)
		        }, function (error) {
			        console.log(error)
		        });
		        if (isDataSaved) {
			        // clear form show response
			        alert("data saved successfully");
			        resetAttendanceForm();
		        } else
			        alert("error in saving ");
		        
	        }
	        
	        function resetAttendanceForm() {
		        intializeMilkConsumers()
		        $scope.form.attendanceForm.submitted = false;
	        }
	        
        } ]);