const { faker } = require("@faker-js/faker");

const generateArray = (propertyName, generator) => {
  if(propertyName.endsWith('s')){
    return [generator()]
  }
  return generator();
}
const generateData = (mappings) => () => {
  const properties = mappings.properties;

  return Object.entries(properties).reduce((acc, [propertyName, configuration]) => {

    if(configuration.properties){
      return {
        ...acc,
        [propertyName]: generateArray(propertyName, generateData(configuration))
      }
    }
    if (["long", "integer", "short", "byte", "double", "half_float", "scaled_float", "unsigned_long"].includes(configuration.type)) {
      return {
        ...acc,
        [propertyName]: generateArray(propertyName, faker.datatype.number),
      };
    }

    if (["float"].includes(configuration.type)) {
      return {
        ...acc,
        [propertyName]: generateArray(propertyName, faker.datatype.float),
      };
    }

    if (["geopoint"].includes(configuration.type)) {
      return {
        ...acc,
        [propertyName]: generateArray(propertyName, () => ({
          lat: faker.address.latitude(),
          lon: faker.address.longitude()
        })),
      };
    }

    const mapping = {
      "email": () => faker.internet.email(undefined, undefined, "hotmail.com"),
      "sex": () => faker.name.sex(),
      "sexe": () => faker.name.sex(),
      "gender": () => faker.name.sex(),
      "phone": () => faker.phone.number(),
      "phoneNumber": () => faker.phone.number(),
    }
    return {
      ...acc,
      [propertyName]: generateArray(propertyName, mapping[propertyName] ?? faker.datatype.string),
    };
  }, {});
}
module.exports = (index) => {
  const mappings = index.mappings;
  
  const generated = generateData(mappings)();

  return [generated];
};
