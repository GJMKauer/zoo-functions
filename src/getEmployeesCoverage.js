const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function findEmployees({ name = 0, id = 0 }) {
  const filteredEmployee = employees.find(
    (element) =>
      element.id === `${id}`
      || `${name}`.includes(element.firstName)
      || `${name}`.includes(element.lastName),
  );
  if (!filteredEmployee) throw new Error('Informações inválidas');

  const rspAnimal = species.filter((animal) => filteredEmployee.responsibleFor.includes(animal.id));
  const responsibleAnimalNames = rspAnimal.map((element) => element.name);
  const responsibleAnimalLocations = rspAnimal.map((element) => element.location);

  return {
    id: filteredEmployee.id,
    fullName: `${filteredEmployee.firstName} ${filteredEmployee.lastName}`,
    species: responsibleAnimalNames,
    locations: responsibleAnimalLocations,
  };
}

function allEmployees() {
  const nigel = findEmployees({ name: 'Nigel' });
  const burl = findEmployees({ name: 'Burl' });
  const ola = findEmployees({ name: 'Ola' });
  const wilburn = findEmployees({ name: 'Wilburn' });
  const stephanie = findEmployees({ name: 'Stephanie' });
  const sharonda = findEmployees({ name: 'Sharonda' });
  const ardith = findEmployees({ name: 'Ardith' });
  const emery = findEmployees({ name: 'Emery' });

  return [nigel, burl, ola, wilburn, stephanie, sharonda, ardith, emery];
}

function getEmployeesCoverage(name, id) {
  if (!name && !id) {
    return allEmployees();
  }
  return findEmployees(name);
}

module.exports = getEmployeesCoverage;
