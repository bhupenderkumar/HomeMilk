
<html lang="en">
<head>
<title>MilkMan Example</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans:400' -->
<!-- 	rel='stylesheet' type='text/css'> -->
<link rel='stylesheet' type='text/css' href="css/bootstrap.min.css">
<link rel='stylesheet' type='text/css' href="css/styles.css">
<link rel='stylesheet' type='text/css' href="css/openSans.css">

</head>
<body ng-app="milkApp">

	<div ng-controller="milkController">
		<header>
			<h1>MilkMan Records</h1>
			<h2>MilkMan Record</h2>
		</header>

		<nav>
			<ul>
				<li><a href="#" title="left"
					ng-class="{active:transition=='slide-left'}" ui-sref=".createUser"
					data-ui-sref-opts="{reload: true}"> Create User Record </a></li>
				<li><a href="#" title="right"
					ng-class="{'active':transition=='slide-right'}"
					ui-sref=".createMilkAttendance" data-ui-sref-opts="{reload: true}">
						Create Milk Attendance </a></li>
				<li><a href="#" title="top"
					ng-class="{'active':transition=='slide-top'}"
					ui-sref=".removeUserRecord" data-ui-sref-opts="{reload: true}">
						Remove User Record </a></li>
				<li><a href="#" title="bottom"
					ng-class="{'active':transition=='slide-bottom'}"
					ui-sref=".updateUserRecord" data-ui-sref-opts="{reload: true}">
						Update User Data </a></li>
				<li><a href="#" title="bottom"
					ng-class="{'active':transition=='slide-bottom'}"
					ui-sref=".calculateMonthlyBill" data-ui-sref-opts="{reload: true}">
						Calculate Monthly Bill </a></li>

				<li><a href="#" title="bottom"
					ng-class="{'active':transition=='slide-bottom'}"
					ui-sref=".calculateBillForUser" data-ui-sref-opts="{reload: true}">
						Calculate Bill for Particular User</a></li>
			</ul>
		</nav>
		<div class="">
			<div ui-view ng-class="transition">default content</div>
		</div>
	</div>

	<script data-require="angular.js@1.2.10" data-semver="1.2.10"
		src="js/angular.min.js"></script>
	<script src="js/jquery.min.js"></script>

	<script data-require="angular-animate@1.2.11" data-semver="1.2.11"
		src="js/angular-animate.min.js"></script>
	<script src="js/angular-ui-router.min.js"></script>
	<script src="js/app.js"></script>
	<script src="js/controller/calculateMonthlyBillController.js"></script>
	<script src="js/controller/calculateBillForUserController.js"></script>
	<script src="js/controller/createUserController.js"></script>
	<script src="js/controller/milkAttendanceController.js"></script>
	<script src="js/controller/removeUserRecordController.js"></script>
	<script src="js/controller/updateUserDataController.js"></script>
	<script src="js/service/milkAttendanceService.js"></script>
	<script src="js/service/createUserService.js"></script>
	<script src="js/service/removeUserRecordService.js"></script>
	<script src="js/service/common-service.js"></script>
	<script src="js/milkman.common.js"></script>
</body>
</html>