'use strict';

angular.module('contactMgmtApp').controller('loginCtrl', ['$scope','loginService', function($scope,loginService){
	
/*	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
	*/
	$scope.ListData=[];
	loginService.getData().then(function(argument) {
			console.log(argument.data);
			$scope.ListData=argument.data;
		}, function(error) {
				console.error(error)
		}
	);

	$scope.loginForm=function(){
	
	};

}]);