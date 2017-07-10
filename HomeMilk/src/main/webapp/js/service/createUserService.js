/**
 * 
 */
app
        .service(
                "createUserService",
                [
                        "$http",
                        function ($http) {
	                        var config = {
		                        headers : {
			                        'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
		                        }
	                        }
	                        this.createUser = function (data) {
		                        // save this to db
		                        $http.post("createMilkConsumer", data, config)
		                                .success(function (response) {
			                                return response;
		                                }).error(function (errorResponse) {
			                                return errorResponse
		                                })
		                        return true;
	                        }

                        } ]);