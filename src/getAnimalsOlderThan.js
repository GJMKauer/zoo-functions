const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const filterByNameResidents = species.find((an) => an.name === animal).residents;
  return filterByNameResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
