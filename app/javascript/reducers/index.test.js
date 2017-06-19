import { gameReducer } from './';
import { createGame } from '../util/create';

function createMockGame(width, height) {
  const game = createGame(width, height);
  game.grid = game.grid.map(column => {
    return column.map(block => {
      block.type = 0;
      block.meta = { colour: 'red' };
      return block;
    });
  });
  return game;
}

describe('gameReducer', function() {
  test('BLOCKS_REPLACE', () => {
    const game = createMockGame(2, 2);
    const block = { id: 'foo', x: 1, y: 1, type: 0, meta: { colour: 'red' } };
    const state = gameReducer(game, {
      type: 'BLOCKS_REPLACE',
      blocks: [block]
    });
    expect(state.grid[1][1]).toBe(block);
  });

  test('BLOCKS_HIGHLIGHT', () => {
    const game = createMockGame(2, 2);
    const block = { id: 'foo', x: 1, y: 1, type: 0, meta: { colour: 'red' } };
    const state = gameReducer(game, {
      type: 'BLOCKS_HIGHLIGHT',
      blocks: [block]
    });
    expect(state.highlighted).toEqual(['foo']);
  });

  test('default', () => {
    const game = createMockGame(2, 2);
    const state = gameReducer(game, {
      type: 'INVALID'
    });
    expect(state).toBe(state);
  });
});
