import React from 'react';
import GridContainer from '../containers/GridContainer';
import ControlsContainer from '../containers/ControlsContainer';

function Game() {
  return (
    <div className="game">
      <GridContainer />
      <ControlsContainer />
    </div>
  );
}

export default Game;
