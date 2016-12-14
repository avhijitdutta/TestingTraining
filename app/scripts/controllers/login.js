'use strict';

angular.module('contactMgmtApp').controller('loginCtrl', ['$scope','$location','login', function($scope,$location,login){
	
	$scope.user={
		email:'',
		password:''
	};


	$scope.loginForm=function(loginForm){
		if(loginForm.$valid){
			login.loginUser($scope.user).then(function(argument) {
					console.log(argument);
					$location.path('/main');
				}, function(error) {
      				console.error(error)
    		});
			
		}else{
			console.warn('login data not valid');
		}
	};

}]);