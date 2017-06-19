import React from 'react';
import Column from '../components/Column';

function Grid({ grid }) {
  const columns = grid.map((blocks, x) => {
    return <Column key={x} x={x} blocks={blocks} />;
  });
  return (
    <div className="grid">
      {columns}
    </div>
  );
}

export default Grid;
