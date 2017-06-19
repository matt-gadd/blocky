import React from 'react';
import { shallow } from 'enzyme';

import Game from './Game';
import GridContainer from '../containers/GridContainer';
import ControlsContainer from '../containers/ControlsContainer';

describe('Game', function() {
  test('should render', function() {
    expect(
      shallow(<Game />).contains(
        <div className="game">
          <GridContainer />
          <ControlsContainer />
        </div>
      )
    ).toBe(true);
  });
});
