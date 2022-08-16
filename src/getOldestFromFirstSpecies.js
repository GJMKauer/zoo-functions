const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id);
  const speciesObject = species.find(
    (element) => element.id === employee.responsibleFor[0],
  );
  const specieSorted = speciesObject.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = specieSorted[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
