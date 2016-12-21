'use strict';

/**
 * @ngdoc service
 * @name contactMgmtApp.loginService
 * @description
 * # loginService
 * Service in the contactMgmtApp.
 */
angular.module('contactMgmtApp')
  .service('loginService', function ($http) {
    
    this.getData=function(){
    	

    	return $http({
		  method: 'GET',
		  url: 'http://www.json-generator.com/api/json/get/cuaspiexua'
		});
    };

  });
