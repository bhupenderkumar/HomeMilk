/**
 * 
 */
app.controller("createUserController", [
        "$scope",
        "createUserService",
        "$filter",
        "milkCommonService",
        function ($scope, createUserService, $filter,milkCommonService) {
	        init();
	        function init() {
		        $scope.resetMilkConsumer = resetMilkConsumer;
		        resetMilkConsumer();
		        $scope.createUser = createUser;
		        initializeMilkConsumer()
		        $scope.milkConsumers = milkCommonService.getMilkConsumers()
		        $scope.form = {};
	        }
	        function initializeMilkConsumer() {
		        $scope.milkConsumer = {};
		        $scope.milkConsumer.joiningDate = $filter('date')(new Date(),
		                'yyyy-MM-dd');
	        }
	        /**
			 * to createUser Milk User
			 * 
			 * @returns
			 */
	        function createUser() {
		        var userObject = angular.copy($scope.milkConsumer);
		        createUserService.createUser(userObject).then(
		                function (response) {
		                }, function (errorResponse) {
			                
		                });
		        
	        }
	        
	        function resetMilkConsumer() {
		        $("#UserName").focus();
		        $scope.milkConsumer = {};
	        }
        } ]);