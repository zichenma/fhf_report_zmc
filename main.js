
var myApp = angular.module('myReport', ['angularUtils.directives.dirPagination'])

.controller('mainController', function ($scope, $http) {
	$scope.apis = apis;
	$scope.selectedItem = "Call Vol Over Time";
	$scope.hasError= {status: false, 
		message: "Oops, sorry something wrong with your report!"}
	
	

	$scope.itemSelected = function(item){
		$scope.selectedItem = item;
		$scope.getApi();
		//console.log($scope.selectedItem);		
	}
	$scope.getApi = function () {
        $http.get(
				 apis[$scope.selectedItem]
			).success(function (data) {
                    $scope.data = data;
				    // console.log(data);
				})
             .error(function (error) {
					$scope.hasError.status = true;
					//console.log("something wrong " + $scope.hasError.status);
			});
			$scope.hasError.status = false;
			// console.log(apis[$scope.selectedItem]);
    };
	 $scope.getApi();
	 $scope.pageSize = 15;
});


