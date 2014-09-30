'use strict';

describe('Service: Album', function () {

  // load the service's module
  beforeEach(module('fakeApiApp'));

  // instantiate service
  var Album;
  beforeEach(inject(function (_Album_) {
    Album = _Album_;
  }));

  it('should do something', function () {
    expect(!!Album).toBe(true);
  });

});
