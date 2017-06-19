import uuid from 'uuid/v4';
import { getTypeByIndex, getRandomType } from './misc';

export function createBlock(
  { x = 0, y = 0, id = uuid(), type = getRandomType(), meta }
) {
  meta = meta || getTypeByIndex(type).meta();
  return {
    x,
    y,
    id,
    type,
    meta
  };
}

export function createGrid(width, height) {
  const grid = [];
  for (let x = 0; x < width; x++) {
    const column = [];
    for (let y = 0; y < height; y++) {
      column.push(createBlock({ x, y }));
    }
    grid.push(column);
  }
  return grid;
}

export function createGame(width, height) {
  const grid = createGrid(width, height);
  return {
    grid,
    highlighted: [],
    gridMeta: {
      width,
      height
    }
  };
}
