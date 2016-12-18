angular.module('myApp',[])
.controller('MyCtrl',['$scope','myFactory',function($scope,myFactory){
	
	$scope.CourseName="We will start learning How to write testable angular code";

	$scope.user={fname:'Avhijit',lname:'Dutta','job':'IT','age':'26'};


	$scope.ChangeName=function(message){
		console.log(message);
	}
	
}]);


/*angular.element(function() {
  angular.bootstrap(document, ['myApp']);
});
*/