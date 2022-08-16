const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const filteredBySpecie = species.map((specie) => ({ [specie.name]: specie.residents.length }));
    const filteredBySpecieAssign = Object.assign({}, ...filteredBySpecie);
    return filteredBySpecieAssign;
  }
  if (animal.sex) {
    const filteredAll = species.find((nome) => nome.name === animal.specie);
    const { residents } = filteredAll;

    const filteredBySex = residents.filter((gender) => gender.sex === animal.sex);
    return filteredBySex.length;
  }
  const filteredAll = species.find((nome) => nome.name === animal.specie);
  return filteredAll.residents.length;
}

module.exports = countAnimals;
