'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('reservedWordsCheckerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of reserved words to the scope', function () {
    expect(angular.isArray(scope.data.sections)).toBe(true);
    expect(scope.data.isReserved).toBe(false);
    expect(scope.data.word).toBe(null);
  });
});
