myApp.controller('mainController', function ($scope, $http) {
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
			//console.log(apis[$scope.selectedItem]);
    };
	 $scope.getApi();
	 $scope.pageSize = 15;
<<<<<<< HEAD
	 $scope.sortColumn= "";
	 $scope.reverseSort = false;

	 $scope.sortData = function (column) {
		 $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		  $scope.sortColumn = column;
		 console.log($scope.sortColumn);
	 }

	 $scope.getSortClass = function (column) {
		 if ($scope.sortColumn == column) {
			 return $scope.reverseSort ? 'glyphicon glyphicon-triangle-bottom' : 'glyphicon glyphicon-triangle-top'
			
		 }
		 return '';
	 }
});
=======
});
>>>>>>> b3ecee6be7e2ed85d4cc1e80719e72e9fc42caea
