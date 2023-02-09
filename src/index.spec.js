const generate = require("./index");

describe("main", () => {
  it("should return true", () => {
    expect(
      generate({
        mappings: {
          properties: {
            object: {
              properties: {
                long: { type: "long" },
                integer: { type: "integer" },
                short: { type: "short" },
                byte: { type: "byte" },
                double: { type: "double" },
                float: { type: "float" },
                half_float: { type: "half_float" },
                scaled_float: { type: "scaled_float" },
                unsigned_long: { type: "unsigned_long" },
                email: { type: "keyword" },
                name: { type: "text" },
              },
            },
            long: { type: "long" },
            integer: { type: "integer" },
            short: { type: "short" },
            byte: { type: "byte" },
            double: { type: "double" },
            float: { type: "float" },
            half_float: { type: "half_float" },
            scaled_float: { type: "scaled_float" },
            unsigned_long: { type: "unsigned_long" },
            email: { type: "keyword" },
            name: { type: "text" },
          },
        },
      })
    ).toEqual([
      {
        object: {
          long: expect.any(Number),
          integer: expect.any(Number),
          short: expect.any(Number),
          byte: expect.any(Number),
          double: expect.any(Number),
          float: expect.any(Number),
          half_float: expect.any(Number),
          scaled_float: expect.any(Number),
          unsigned_long: expect.any(Number),
          integer: expect.any(Number),
          email: expect.any(String),
          name: expect.any(String),
        },
        long: expect.any(Number),
        integer: expect.any(Number),
        short: expect.any(Number),
        byte: expect.any(Number),
        double: expect.any(Number),
        float: expect.any(Number),
        half_float: expect.any(Number),
        scaled_float: expect.any(Number),
        unsigned_long: expect.any(Number),
        integer: expect.any(Number),
        email: expect.any(String),
        name: expect.any(String),
      },
    ]);
  });
});
