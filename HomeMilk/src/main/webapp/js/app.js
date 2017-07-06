var app = angular.module('milkApp', [ 'ui.router', 'ngAnimate' ]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/createMilkAttendance');
	$stateProvider.state('createUser', {
	    name : 'createUser',
	    url : '/createUser',
	    templateUrl : 'html/createUser.html',
	    controller : 'createUserController'
	})

	.state('createMilkAttendance', {
	    name : 'createMilkAttendance',
	    url : '/createMilkAttendance',
	    templateUrl : 'html/milkAttendance.html',
	    controller : 'milkAttendanceController'
	})

	.state('removeUserRecord', {
	    name : 'removeUserRecord',
	    url : '/removeUserRecord',
	    templateUrl : 'html/removeUserRecord.html',
	    controller : 'removeUserRecordController'
	})
	.state('calculateMonthlyBill', {
	    name : 'calculateMonthlyBill',
	    url : '/calculateMonthlyBill',
	    templateUrl : 'html/calculateMonthlyBill.html',
	    controller : 'calculateMonthlyBillController'
	})

	.state('calculateBillForUser', {
	    name : 'calculateBillForUser',
	    url : '/calculateBillForUser',
	    templateUrl : 'html/calculateBillForUser.html',
	    controller : 'calculateBillForUserController'
	});
})

.controller('milkController', function ($scope, $window, $state) {
	
});
