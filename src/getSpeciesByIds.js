const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...id) {
  return species.filter((animal) => id.find((passedId) => animal.id === passedId));
}

module.exports = getSpeciesByIds;
