import { stub } from 'sinon';

import { highlight, submit } from './';
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

describe('actions', function() {
  test('highlight', () => {
    const dispatch = stub();
    const game = createMockGame(2, 2);
    const getState = stub().returns({
      present: game
    });
    const lazy = highlight(0, 0);
    lazy(dispatch, getState);
    const [action] = dispatch.firstCall.args;
    expect(action.type).toBe('BLOCKS_HIGHLIGHT');
    expect(action.blocks.length).toBe(
      game.gridMeta.width * game.gridMeta.height
    );
  });

  test('submit', () => {
    const dispatch = stub();
    const game = createMockGame(2, 2);
    const getState = stub().returns({
      present: game
    });
    const lazy = submit(0, 0);
    lazy(dispatch, getState);
    const [action] = dispatch.firstCall.args;
    expect(action.type).toBe('BLOCKS_REPLACE');
    expect(action.blocks.length).toBe(
      game.gridMeta.width * game.gridMeta.height
    );
  });
});
