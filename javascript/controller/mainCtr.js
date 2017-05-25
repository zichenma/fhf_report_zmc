myApp.controller('mainController', function ($scope, $http) {
	$scope.message = "Hello_World";
	$scope.apis = apis;
	$scope.selectedItem = "Current Active Repo Assignments";
	$scope.hasError= { 
					   status: false, 
					   message: "Oops, sorry something wrong with your report!"
					 }

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
				     //console.log(data.items[0]);
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