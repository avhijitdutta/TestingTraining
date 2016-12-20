angular.module('myApp',[])
.controller('MyCtrl',['$scope',function($scope){

	$scope.CourseName="We will start learning How to write testable angular code";

	$scope.user={fname:'Avhijit',lname:'Dutta','job':'IT'};


	$scope.changeValue=function(message){
		alert("sss");
	}
	
}]);
