import React from 'react';

function Controls({ hasUndo, hasRedo, onUndo, onRedo }) {
  return (
    <div className="controls">
      <button disabled={!hasUndo} onClick={onUndo}>Undo</button>
      <button disabled={!hasRedo} onClick={onRedo}>Redo</button>
    </div>
  );
}
export default Controls;
