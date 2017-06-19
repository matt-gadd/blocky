import { createBlock, createGrid, createGame } from '../util/create';

test('createBlock', () => {
  expect(
    createBlock({ x: 1, y: 2, id: 'id', type: 0, meta: { foo: 'bar' } })
  ).toEqual({
    x: 1,
    y: 2,
    id: 'id',
    type: 0,
    meta: {
      foo: 'bar'
    }
  });
});

test('createGrid', () => {
  const grid = createGrid(5, 5);
  expect(grid.length).toBe(5);
  grid.forEach(column => {
    expect(column.length).toBe(5);
  });
});

test('createGame', () => {
  const game = createGame(5, 5);
  expect(game.gridMeta).toEqual({ width: 5, height: 5 });
  expect(game.highlighted).toEqual([]);
});
