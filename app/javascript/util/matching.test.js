import { getResults } from './matching';
import { createGame } from './create';

function createMockGame(width, height) {
  const game = createGame(width, height);
  game.grid = game.grid.map(column => {
    return column.map(block => {
      block.type = 0;
      block.meta = { colour: 'yellow' };
      return block;
    });
  });
  return game;
}

function setBlock(x, y, grid, values) {
  grid[x][y] = { ...grid[x][y], ...values };
  return grid;
}

describe('matching', () => {
  test('getResults', () => {
    const game = createMockGame(5, 5);
    setBlock(2, 2, game.grid, { meta: { colour: 'red' } });
    setBlock(2, 3, game.grid, { meta: { colour: 'red' } });
    setBlock(2, 4, game.grid, { meta: { colour: 'red' } });
    const results = getResults(2, 2, game.grid, game.gridMeta);
    expect(results.length).toBe(3);
  });

  test('getResults - no results', () => {
    const game = createMockGame(5, 5);
    setBlock(2, 2, game.grid, { meta: { colour: 'na' } });
    const results = getResults(2, 2, game.grid, game.gridMeta);
    expect(results).toBe(false);
  });
});
