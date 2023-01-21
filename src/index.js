const { faker } = require("@faker-js/faker");

module.exports = (index) => {
  const mappings = index.mappings;
  const properties = mappings.properties;

  const generated = Object.entries(properties).reduce((acc, [propertyName, configuration]) => {
    if (configuration.type === "integer") {
      return {
        ...acc,
        [propertyName]: faker.datatype.number(),
      };
    }
    return {
      ...acc,
      [propertyName]: faker.datatype.string(),
    };
  }, {});

  return [generated];
};
