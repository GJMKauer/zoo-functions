const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa o argumento "count"', () => {
    const countElephants = handlerElephants('count');
    expect(countElephants).toBe(4);
  });

  it('Testa o argumento "names"', () => {
    const namesElephants = handlerElephants('names');
    expect(namesElephants).toEqual(expect.arrayContaining(['Jefferson']));
  });

  it('Testa o argumento "averageAge"', () => {
    const averageAgeElephant = handlerElephants('averageAge');
    expect(averageAgeElephant).toBe(10.5);
  });

  it('Testa o argumento "location"', () => {
    const locationElephant = handlerElephants('location');
    expect(locationElephant).toBe('NW');
  });

  it('Testa o argumento "popularity"', () => {
    const popularityElephant = handlerElephants('popularity');
    expect(popularityElephant).toBeGreaterThanOrEqual(5);
  });

  it('Testa o argumento "availability"', () => {
    const availabilityElephant = handlerElephants('availability');
    expect(availabilityElephant).not.toEqual(expect.arrayContaining(['Monday']));
  });

  it('Testa a função sem nenhum argumento', () => {
    const noArgumentElephants = handlerElephants();
    expect(noArgumentElephants).toBeUndefined();
  });

  it('Testa o argumento objeto vazio ({})', () => {
    const emptyObjectElephants = handlerElephants({});
    expect(emptyObjectElephants).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa um argumento não existente', () => {
    const nonExistentElephant = handlerElephants('xablau');
    expect(nonExistentElephant).toBeNull();
  });
});
