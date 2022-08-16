const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getSpecificDay(dayName) {
  if (dayName === 'Monday') {
    return {
      [dayName]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  const day = {
    [dayName]: {
      officeHour: `Open from ${hours[dayName].open}am until ${hours[dayName].close}pm`,
      exhibition: {},
    },
  };
  const filteredDay = species.filter((element) => element.availability.includes(dayName));
  const filteredAnimalsOfDay = filteredDay.map((element) => element.name);
  day[dayName].exhibition = filteredAnimalsOfDay;
  return day;
}

function getSpecificAnimal(animalName) {
  const filteredAnimal = species.find((element) => element.name === animalName);
  const filteredAnimalDays = filteredAnimal.availability;
  return filteredAnimalDays;
}

const { Tuesday } = getSpecificDay('Tuesday');
const { Wednesday } = getSpecificDay('Wednesday');
const { Thursday } = getSpecificDay('Thursday');
const { Friday } = getSpecificDay('Friday');
const { Saturday } = getSpecificDay('Saturday');
const { Sunday } = getSpecificDay('Sunday');

const allDays = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: Tuesday.exhibition,
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: Wednesday.exhibition,
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: Thursday.exhibition,
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: Friday.exhibition,
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: Saturday.exhibition,
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: Sunday.exhibition,
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const validAnimals = species.map((element) => element.name);
  const validDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  if (validAnimals.includes(scheduleTarget)) {
    return getSpecificAnimal(scheduleTarget);
  }
  if (validDays.includes(scheduleTarget)) {
    return getSpecificDay(scheduleTarget);
  }
  return allDays;
}

module.exports = getSchedule;
