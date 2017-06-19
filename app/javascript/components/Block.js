import React from 'react';
import BasicBlock from './BasicBlock';
import HorizontalLineBlock from './HorizontalLineBlock';

function getBlockByType(type) {
  switch (type) {
    case 1:
      return HorizontalLineBlock;
    default:
      return BasicBlock;
  }
}

function Block({ x, y, meta, type, onSelect, onHighlight, highlighted }) {
  const classes = highlighted ? 'block highlighted' : 'block';
  const BlockType = getBlockByType(type);
  return (
    <div
      className={classes}
      onClick={() => onSelect(x, y)}
      onMouseOver={() => onHighlight(x, y)}
    >
      <BlockType x={x} y={y} meta={meta} />
    </div>
  );
}

export default Block;
