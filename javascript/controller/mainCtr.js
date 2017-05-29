myApp.controller('mainController', function ($scope, $http) {
	$scope.apis = apis;
	$scope.logics = logics;
	$scope.selectedKeys = ["Current Active Repo Assignments", " ", " "];
	$scope.defaultValue = " ";
	$scope.hasError= { 
					   status: false, 
					   message: "Oops, sorry something wrong with your report!"
					 }

	$scope.reportTitleSelected = function (rpTitle) {
		$scope.selectedKeys[0] = rpTitle;
		$scope.getApi();
		//console.log($scope.selectedKeys);		
	}

	$scope.columnSelected = function (col) {
		$scope.selectedKeys[1] = col;
		// console.log($scope.selectedKeys[1])
	}

	$scope.logicSelected = function (logic) {
		$scope.selectedKeys[2] = logic;
		console.log($scope.selectedKeys[2]);
	}

	$scope.getApi = function () {
        $http.get(
				 apis[$scope.selectedKeys[0]]
			).success(function (data) {
                    $scope.data = data;
				    //console.log(data.items[0]);
				})
             .error(function (error) {
					$scope.hasError.status = true;
					//console.log("something wrong " + $scope.hasError.status);
			});
			$scope.hasError.status = false;
			//console.log(apis[$scope.selectedKeys]);
    };
	 $scope.getApi();
	 $scope.pageSize = 15;
	 $scope.reverseSort = false;

	 $scope.sortData = function (column) {
		 $scope.reverseSort = ($scope.selectedKeys[1] == column) ? !$scope.reverseSort : false;
		 $scope.selectedKeys[1] = column;
		 console.log($scope.selectedKeys[1]);
	 }

	

	 $scope.getSortClass = function (column) {
		 if ($scope.selectedKeys[1] == column) {
			 return $scope.reverseSort ? 'glyphicon glyphicon-triangle-bottom' : 'glyphicon glyphicon-triangle-top'
			
		 }
		 return '';
	 }
});


