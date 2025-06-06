"use strict";

const create = require("..");

describe("@g-lerna/create", () => {
  it("create", () => {
    expect(create()).toEqual("Hello from create");
  });
});