'use strict';

describe('Service: Comment', function () {

  // load the service's module
  beforeEach(module('fakeApiApp'));

  // instantiate service
  var Comment;
  beforeEach(inject(function (_Comment_) {
    Comment = _Comment_;
  }));

  it('should do something', function () {
    expect(!!Comment).toBe(true);
  });

});
