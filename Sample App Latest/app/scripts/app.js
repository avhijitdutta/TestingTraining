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
      .when('/reg', {
        templateUrl: 'views/reg.html',
        controller: 'RegCtrl',
        class:'login-page'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        class:'layout-top-nav'
      })
      .when('/createContact/:id', {
        templateUrl: 'views/createContact.html',
        controller: 'CreatecontactCtrl',
        class:'layout-top-nav'
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