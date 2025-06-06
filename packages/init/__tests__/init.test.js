'use strict';

const init = require("..");

describe("@g-lerna/init", () => {
  it("init", () => {
    expect(init()).toEqual("Hello from init");
  });
});
