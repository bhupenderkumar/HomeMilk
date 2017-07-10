/**
 * 
 */

app.service("removeUserRecordController", [ "$http", function ($http) {
	
	
	
	this.deleteUser = function (data) {
		$http.post("", data, config).then(function (response) {
		}, function (errorResponse) {
			
		});
	}
} ]);