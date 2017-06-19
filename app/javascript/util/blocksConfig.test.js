import { basicBlock, horizontalLineBlock } from '../util/blocksConfig';

describe('basicBlock', () => {
  test('matches', () => {
    expect(
      basicBlock.matches(
        {
          meta: {
            colour: 'red'
          }
        },
        {
          meta: {
            colour: 'red'
          }
        }
      )
    ).toBe(true);
    expect(
      basicBlock.matches(
        {
          meta: {
            colour: 'red'
          }
        },
        {
          meta: {
            colour: 'blue'
          }
        }
      )
    ).toBe(false);
  });

  test('validate', () => {
    expect(basicBlock.validate([])).toBe(false);
    expect(basicBlock.validate([1])).toBe(false);
    expect(basicBlock.validate([1, 2])).toBe(true);
  });
});

describe('horizontalLineBlock', () => {
  test('extends basicBlock', () => {
    expect(horizontalLineBlock.validate).toBe(basicBlock.validate);
    expect(horizontalLineBlock.surrounding).toBe(basicBlock.surrounding);
  });
  test('meta', () => {
    expect(horizontalLineBlock.meta()).toEqual({});
  });

  test('matches', () => {
    expect(horizontalLineBlock.matches({ y: 2 }, { y: 2 })).toBe(true);
    expect(horizontalLineBlock.matches({ y: 2 }, { y: 3 })).toBe(false);
  });
});
