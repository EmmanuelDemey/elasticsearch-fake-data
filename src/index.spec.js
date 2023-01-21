const generate = require("./index");

describe("main", () => {
  it("should return true", () => {
    expect(
      generate({
        mappings: {
          properties: {
            age: { type: "integer" },
            email: { type: "keyword" },
            name: { type: "text" },
          },
        },
      })
    ).toEqual([
      {
        age: expect.any(Number),
        email: expect.any(String),
        name: expect.any(String),
      },
    ]);
  });
});
