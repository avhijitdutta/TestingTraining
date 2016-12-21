'use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var LoginCtrl,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope,$controller) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('loginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('init : controller', function () {

  });
});
