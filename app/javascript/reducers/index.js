function replaceBlocks({ blocks }, state) {
  const { grid } = state;
  const newGrid = grid.map(columns => columns.map(block => block));
  blocks.forEach(block => {
    const { x, y } = block;
    newGrid[x][y] = block;
  });
  state.grid = newGrid;
  return state;
}

function highlightBlocks({ blocks }, state) {
  state.highlighted = blocks.map(block => block.id);
  return state;
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'BLOCKS_REPLACE':
      return { ...replaceBlocks(action, state) };
    case 'BLOCKS_HIGHLIGHT':
      return { ...highlightBlocks(action, state) };
    default:
      return state;
  }
}
