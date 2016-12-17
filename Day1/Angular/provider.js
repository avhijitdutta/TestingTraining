angular.module('myApp',[])
.controller('MyCtrl',['$scope','myProvider',function($scope,myProvider){
	$scope.CourseName="We will start learning How to write testable angular code";
	console.log(myProvider.getValue());
}])

.controller('MyCtrl2',['$scope','myProvider',function($scope,myProvider){
	$scope.CourseName="We will start learning How to write testable angular code";
	console.log(myProvider.getValue());
}]);

//provider

/*angular.module('myApp').provider("myProvider",function(){

	this.$get=function(){
		console.log("myProvider: $get Called");
		return "My Value";
	}		
});*/

//Factory

/*function myObject(){

	this.getValue=function(){

		return "my object value";
	}
}


angular.module('myApp').factory("myProvider",function(){
	console.log("my factory :function called");
	return new myObject();	
});

*/


angular.module('myApp').service("myProvider",function(){

	this.getValue=function(){

		return "my object value";
	}
	
});