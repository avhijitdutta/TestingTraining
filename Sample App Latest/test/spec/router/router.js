'use strict';

describe('router testing', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var location, route, rootScope,$httpBackend;

  beforeEach(inject(
      function( _$location_, _$route_, _$rootScope_ ,_$httpBackend_) {
          location = _$location_;
          route = _$route_;
          rootScope = _$rootScope_;
          $httpBackend=_$httpBackend_;
  }));

  it('should load the login page on successful load of /login', function() {
    
        $httpBackend.when('GET','views/login.html').respond(200,{});
        location.path('/login');
        rootScope.$digest();
        expect(route.current.controller).toBe('loginCtrl');
        $httpBackend.flush();
  });

});
