'use strict';

angular.module('contactMgmtApp').controller('loginCtrl', ['$scope','$location', function($scope,$location){
	
/*	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
	*/

	$scope.loginForm=function(loginForm){
		if(loginForm.$valid){	
			alert("Valid");
			$location.path('/main');
		}else{
			alert("No valid");
			console.warn('login data not valid');
		}
	};

}]);