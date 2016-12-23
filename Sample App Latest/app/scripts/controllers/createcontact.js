'use strict';

/**
 * @ngdoc function
 * @name contactMgmtApp.controller:CreatecontactCtrl
 * @description
 * # CreatecontactCtrl
 * Controller of the contactMgmtApp
 */
angular.module('contactMgmtApp')
  .controller('CreatecontactCtrl', function ($scope, loginService,$routeParams) {
  		console.log($routeParams);
   
   		$scope.details = loginService.getDetails();
   		console.log($scope.details);

  });
