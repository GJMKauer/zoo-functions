const isZooOpen = require('../src/isZooOpen');

const noParamObject = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função isZooOpen', () => {
  it('Testa a função sem argumentos', () => {
    const noParamZoo = isZooOpen();
    expect(noParamZoo).toEqual(noParamObject);
  });

  it('Testa a função com os argumentos "Monday" e "09:00-AM"', () => {
    const mondayNineAmZoo = isZooOpen('Monday', '09:00-AM');
    expect(mondayNineAmZoo).toBe('The zoo is closed');
  });

  it('Testa a função com os argumentos "Tuesday" e "09:00-AM"', () => {
    const tuesdayNineAmZoo = isZooOpen('Tuesday', '09:00-AM');
    expect(tuesdayNineAmZoo).toBe('The zoo is open');
  });

  it('Testa a função com os argumentos "Wednesday" e "09:00-PM"', () => {
    const wednesdayNinePmZoo = isZooOpen('Wednesday', '09:00-PM');
    expect(wednesdayNinePmZoo).toBe('The zoo is closed');
  });

  it('Testa a função com os argumentos "Thu" e "09:00-AM"', () => {
    expect(() => isZooOpen('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Testa a função com os argumentos "Friday" e "09:00-ZM"', () => {
    expect(() => isZooOpen('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa a função com os argumentos "Saturday" e "C9:00-AM"', () => {
    expect(() => isZooOpen('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  it('Testa a função com os argumentos "Sunday" e "09:c0-AM"', () => {
    expect(() => isZooOpen('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });

  it('Testa a função com os argumentos "Monday" e "13:00-AM"', () => {
    expect(() => isZooOpen('Monday', '13:00-AM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Testa a função com os argumentos "Tuesday" e "09:60-AM"', () => {
    expect(() => isZooOpen('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
