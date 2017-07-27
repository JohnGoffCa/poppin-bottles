var assert = require("chai").assert;
var numBottles = require("../index.js");

describe("Bottle recycling program", function() {
  it("should return 17 given an input of 20", function() {
    assert.strictEqual(numBottles(20).totalBottles, 17);
  });

  it("should return 3 given an input of 5", function() {
    assert.strictEqual(numBottles(5).totalBottles, 3);
  });

  it("should return 0 given an input of 'string'", function() {
    assert.strictEqual(numBottles("string").totalBottles, 0);
  });

  it("should return 0 given an input of '123string'", function() {
    assert.strictEqual(numBottles("123string").totalBottles, 0);
  });
});
