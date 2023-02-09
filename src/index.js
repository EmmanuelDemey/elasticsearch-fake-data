const { faker } = require("@faker-js/faker");

const generateData = (mappings) => {
  const properties = mappings.properties;

  return Object.entries(properties).reduce((acc, [propertyName, configuration]) => {

    if(configuration.properties){
      return {
        ...acc,
        [propertyName]: generateData(configuration)
      }
    }
    if (["long", "integer", "short", "byte", "double", "half_float", "scaled_float", "unsigned_long"].includes(configuration.type)) {
      return {
        ...acc,
        [propertyName]: faker.datatype.number(),
      };
    }

    if (["float"].includes(configuration.type)) {
      return {
        ...acc,
        [propertyName]: faker.datatype.float(),
      };
    }

    return {
      ...acc,
      [propertyName]: faker.datatype.string(),
    };
  }, {});
}
module.exports = (index) => {
  const mappings = index.mappings;
  
  const generated = generateData(mappings)

  return [generated];
};
