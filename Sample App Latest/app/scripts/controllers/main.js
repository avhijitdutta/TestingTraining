'use strict';

/**
 * @ngdoc function
 * @name contactMgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactMgmtApp
 */
angular.module('contactMgmtApp')
  .controller('MainCtrl', function (loginService,$scope) {
  		$scope.listData=[];

   		loginService.getData().then(function(res){
   			console.log(res.data);
   			$scope.listData=res.data;
   		});

   		$scope.setData = function(data) {

   			loginService.setData(data);
   		};

  });
