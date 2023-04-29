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
                sex: { type: "keyword" },
                sexe: { type: "keyword" },
                gender: { type: "keyword" },
                phone: { type: "keyword" },
                phoneNumber: { type: "keyword" },
                name: { type: "text" },
                geopoint: { type: "geopoint" }
              },
            },
            arrays: {
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
                sex: { type: "keyword" },
                sexe: { type: "keyword" },
                gender: { type: "keyword" },
                phone: { type: "keyword" },
                phoneNumber: { type: "keyword" },
                name: { type: "text" },
                geopoint: { type: "geopoint" }
              },
            },
            longs: { type: "long" },
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
            sex: { type: "keyword" },
            sexe: { type: "keyword" },
            gender: { type: "keyword" },
            phone: { type: "keyword" },
            phoneNumber: { type: "keyword" },
            name: { type: "text" },
            geopoint: { type: "geopoint" },
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
          email: expect.stringContaining("@hotmail.com"),
          sex: expect.stringMatching(/male|female/),
          sexe: expect.stringMatching(/male|female/),
          gender: expect.stringMatching(/male|female/),
          phone: expect.any(String),
          phoneNumber: expect.any(String),
          name: expect.any(String),
          geopoint: expect.objectContaining({
            lat: expect.any(String),
            lon: expect.any(String),
          })
        },
        arrays: expect.any(Array),
        longs: expect.any(Array),
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
        email: expect.stringContaining("@hotmail.com"),
        sex: expect.stringMatching(/male|female/),
        sexe: expect.stringMatching(/male|female/),
        gender: expect.stringMatching(/male|female/),
        phone: expect.any(String),
        phoneNumber: expect.any(String),
        name: expect.any(String),
        geopoint: expect.objectContaining({
          lat: expect.any(String),
          lon: expect.any(String),
        })
      },
    ]);
  });
});
