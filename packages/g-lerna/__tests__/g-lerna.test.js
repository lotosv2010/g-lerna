"use strict";

const gLerna = require("..");

describe("@g-lerna/g-lerna", () => {
  it("g-lerna", () => {
    expect(gLerna()).toEqual("Hello from gLerna");
  });
});