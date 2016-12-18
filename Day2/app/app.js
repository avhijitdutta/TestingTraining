angular.module('myApp',[])
.controller('MyCtrl',['$scope','myFactory',function($scope,myFactory){

	console.log(myFactory.getName());
	
	$scope.CourseName="We will start learning How to write testable angular code";
}]);


/*angular.element(function() {
  angular.bootstrap(document, ['myApp']);
});
*/