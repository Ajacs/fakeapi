'use strict';

describe('Service: Photo', function () {

  // load the service's module
  beforeEach(module('fakeApiApp'));

  // instantiate service
  var Photo;
  beforeEach(inject(function (_Photo_) {
    Photo = _Photo_;
  }));

  it('should do something', function () {
    expect(!!Photo).toBe(true);
  });

});
