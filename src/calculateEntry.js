const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const customersF = countEntrants(entrants);
  const sum = prices.child * customersF.child
    + prices.adult * customersF.adult
    + prices.senior * customersF.senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
