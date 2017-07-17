/**
 * 
 */
app
        .service(
                "milkAttendanceService",
                [
                        "$http",
                        function ($http) {
	                        var config = {
		                        headers : {
			                        'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
		                        }
	                        }
	                        this.createAttendance = function (milkConsumer) {
		                        return $http.post("rest/createMilkAttendance",
		                                JSON.stringify(milkConsumer), config);
	                        }

                        } ]);