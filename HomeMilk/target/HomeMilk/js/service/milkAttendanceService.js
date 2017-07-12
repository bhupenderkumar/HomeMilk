/**
 * 
 */
app.service("milkAttendanceService", [ "$http", function ($http) {
	var config = {
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
		}
	}
	this.createAttendance = function (data) {
		var data ={};
		data.milkConsumerId = 12;
		return $http.post("rest/createMilkAttendance", data, config);
	}

} ]);