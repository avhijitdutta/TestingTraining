'use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('loginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('init : controller', function () {

    var expectValue={
      email:'',
      password:''
    };

    expect(scope.user).toEqual(expectValue);

  });

  it('init : controller', function () {
    var expectValue={
      email:'',
      password:''
    };
    expect(scope.user).toEqual(expectValue);
  });

});
