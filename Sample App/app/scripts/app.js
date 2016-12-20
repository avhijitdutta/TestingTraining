'use strict';

/**
 * @ngdoc overview
 * @name contactMgmtApp
 * @description
 * # contactMgmtApp
 *
 * Main module of the application.
 */
angular
  .module('contactMgmtApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        class:'login-page'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(['$rootScope',function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.pageClass = current.$$route.class;
    });
  }]);
