import  { arrayManipulationV1, arrayManipulation } from './array-manipulation';

describe('arrayManipulation', () => {
  it('should work', () => {
    const input = [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ];
    const actual = arrayManipulation(5, input);
    const actual1 = arrayManipulationV1(5, input);
    expect(actual).toBe(200);
    expect(actual1).toBe(200);
  });
});