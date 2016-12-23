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
    
    this._data = {};

    this.getData=function(){
    	return $http({
		  method: 'GET',
		  url: 'http://www.json-generator.com/api/json/get/cuaspiexua'
		});
    };

    this.setData = function(data) {
    	this._data = data;

    };

    this.getDetails = function() {
    	return this._data;
    };

  });
