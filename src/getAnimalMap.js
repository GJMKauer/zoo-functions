const data = require('../data/zoo_data');

const { species } = data;

const rawFilterByLocation = {
  NE: species.filter((animal) => animal.location === 'NE').map((a) => a.name),
  NW: species.filter((animal) => animal.location === 'NW').map((a) => a.name),
  SE: species.filter((animal) => animal.location === 'SE').map((a) => a.name),
  SW: species.filter((animal) => animal.location === 'SW').map((a) => a.name),
};

const filterByLocationWithName = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name) })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name) })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name) })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name) })),
};

const filterByLocationWithNameSorted = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name).sort() })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name).sort() })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name).sort() })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents.map((an) => an.name).sort() })),
};

const filterByLocationWithNameBySexMale = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name) })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name) })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name) })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name) })),
};

const filterByLocationWithNameBySexFemale = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name) })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name) })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name) })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name) })),
};

const filterByLocationWithNameBySexMaleSorted = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name).sort() })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name).sort() })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name).sort() })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'male').map((ani) => ani.name).sort() })),
};

const filterByLocationWithNameBySexFemaleSorted = {
  NE: species.filter((animal) => animal.location === 'NE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name).sort() })),
  NW: species.filter((animal) => animal.location === 'NW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name).sort() })),
  SE: species.filter((animal) => animal.location === 'SE')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name).sort() })),
  SW: species.filter((animal) => animal.location === 'SW')
    .map((a) => ({ [a.name]: a.residents
      .filter((an) => an.sex === 'female').map((ani) => ani.name).sort() })),
};
function getMaleAnimals(options) {
  const { includeNames, sorted } = options;

  if (includeNames === true && sorted === true) {
    return filterByLocationWithNameBySexMaleSorted;
  }

  return filterByLocationWithNameBySexMale;
}

function getFemaleAnimals(options) {
  const { includeNames, sorted } = options;

  if (includeNames === true && sorted === true) {
    return filterByLocationWithNameBySexFemaleSorted;
  }

  return filterByLocationWithNameBySexFemale;
}

function getAnimals(options) {
  const { sex } = options;

  if (sex === 'male') {
    return getMaleAnimals(options);
  }

  if (sex === 'female') {
    return getFemaleAnimals(options);
  }
}

function getAnimalMap(options) {
  if (!options) return rawFilterByLocation;

  const { includeNames = false, sorted = false, sex } = options;

  if (!includeNames) return rawFilterByLocation;

  if (sex) return getAnimals(options);

  if (sorted === true) return filterByLocationWithNameSorted;

  return filterByLocationWithName;
}

module.exports = getAnimalMap;
