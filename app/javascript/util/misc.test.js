import { getTypeByIndex, getRandomType } from './misc';
import { basicBlock, horizontalLineBlock } from './blocksConfig';
import { stub } from 'sinon';

describe('misc', () => {
  test('getTypeByIndex', () => {
    expect(getTypeByIndex(0)).toBe(basicBlock);
    expect(getTypeByIndex(1)).toBe(horizontalLineBlock);
  });

  test('getRandomType', () => {
    stub(Math, 'random').returns(0.999);
    expect(getRandomType()).toBe(1);
    Math.random.restore();

    stub(Math, 'random').returns(0.1);
    expect(getRandomType()).toBe(0);
    Math.random.restore();
  });
});
