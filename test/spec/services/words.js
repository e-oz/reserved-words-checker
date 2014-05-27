'use strict';

describe('Service: words', function () {

  // load the service's module
  beforeEach(module('reservedWordsCheckerApp'));

  // instantiate service
  var words;
  beforeEach(inject(function (_words_) {
    words = _words_;
  }));

  it('should be an object', function () {
    expect(angular.isObject(words)).toBe(true);
  });

});
