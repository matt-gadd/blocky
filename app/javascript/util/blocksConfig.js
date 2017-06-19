export const basicBlock = {
  meta() {
    const colours = ['red', 'blue', 'green', 'yellow'];
    const colour = colours[Math.floor(Math.random() * colours.length)];
    return { colour };
  },
  matches(a, b) {
    return a.meta.colour === b.meta.colour;
  },
  validate(results) {
    return results.length > 1;
  },
  surrounding({ x, y }, grid, { width, height }) {
    const minX = Math.max(x - 1, 0);
    const maxX = Math.min(x + 1, width - 1);
    const minY = Math.max(y - 1, 0);
    const maxY = Math.min(y + 1, height - 1);
    const set = new Set();
    set.add(grid[minX][y]);
    set.add(grid[x][minY]);
    set.add(grid[x][maxY]);
    set.add(grid[maxX][y]);
    return [...set];
  }
};

export const horizontalLineBlock = {
  ...basicBlock,
  meta() {
    return {};
  },
  matches(a, b) {
    return a.y === b.y;
  }
};

export const blocksConfig = [
  { type: basicBlock, frequency: 100 },
  { type: horizontalLineBlock, frequency: 1 }
];
