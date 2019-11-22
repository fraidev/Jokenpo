import { Calculator } from './calculator'



describe('calculator', () => {

  let sut: Calculator;
  beforeAll(() => sut = new Calculator());
  
  it('1 + 0 should return 1', () => {
    let result = sut.sum(1, 0);
    expect(result).toBe(1);
  });

  it('1 + 1 should return 2', () => {
    let result = sut.sum(1, 1);
    expect(result).toBe(2);
  });

  it('2 + 2 + 2 should returns 6', () => 
  expect(sut.sum(2,2,2)).toBe(6));


});
