import { createBlock } from '../util/create';
import { getTypeByIndex } from '../util/misc';

export function getResults(x, y, grid, gridMeta) {
  const selectedBlock = grid[x][y];
  const results = getMatches(selectedBlock, grid, gridMeta);
  const { validate } = getTypeByIndex(selectedBlock.type);

  if (validate(results)) {
    return results;
  }
  return false;
}

export function getMatches(selectedBlock, grid, gridMeta) {
  const { surrounding, matches } = getTypeByIndex(selectedBlock.type);
  const results = [selectedBlock];
  const blocksToCheck = surrounding(selectedBlock, grid, gridMeta);
  const checkedBlocks = [selectedBlock];

  while (blocksToCheck.length) {
    const block = blocksToCheck.pop();
    if (!checkedBlocks.includes(block) && matches(selectedBlock, block)) {
      results.push(block);
      blocksToCheck.push(...surrounding(block, grid, gridMeta));
    }

    checkedBlocks.push(block);
  }

  return results;
}

export function getNonOrphanedBlocks(x, y, grid, results, gridMeta) {
  const elems = [];
  for (let i = y; i < gridMeta.height; i++) {
    if (!results.includes(grid[x][i])) {
      elems.push(grid[x][i]);
    }
  }
  return elems;
}

export function getReplacementBlocks(results, grid, gridMeta) {
  const blocks = [];
  const min = new Map();
  results.forEach(block => {
    const y = min.get(block.x);
    if (y === undefined || block.y < y) {
      min.set(block.x, block.y);
    }
  });
  min.forEach((y, x) => {
    const elems = getNonOrphanedBlocks(x, y, grid, results, gridMeta);
    for (let i = elems.length + y; i < gridMeta.height; i++) {
      blocks.push(createBlock({ x, y: i, type: 0 }));
    }
    elems.forEach((elem, i) => {
      const { type, meta, id } = elems[i];
      blocks.push(createBlock({ x, y: y + i, id, type, meta }));
    });
  });
  return blocks;
}
