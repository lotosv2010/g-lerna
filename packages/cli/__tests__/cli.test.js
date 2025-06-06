"use strict";

const cli = require("..");

describe("@g-lerna/cli", () => {
  it("cli", () => {
    expect(cli()).toEqual("Hello from cli");
  });
});