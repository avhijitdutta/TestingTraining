'use strict';

/**
 * @ngdoc overview
 * @name contactMgmtApp
 * @description
 * # contactMgmtApp
 *
 * Main module of the application.
 */
  angular.module('contactMgmtApp', ['ngRoute'])

 .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        class:'login-page'
        
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])

  .run(['$rootScope',function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.class;
    });
  }]);