'use strict';

describe('Controller: CreatecontactCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var CreatecontactCtrl,
    scope,routeParams,location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$routeParams,$location) {
    scope = $rootScope.$new();
    routeParams=$routeParams;
    location=$location;
    CreatecontactCtrl = $controller('CreatecontactCtrl', {
      $scope: scope,
      $routeParams:routeParams
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    
  });
});
