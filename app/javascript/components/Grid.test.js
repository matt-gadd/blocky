import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';
import Column from './Column';

describe('Grid', function() {
  test('should render', function() {
    const grid = ['foo', 'bar'];
    expect(
      shallow(<Grid grid={grid} />).contains(
        <div className="grid">
          <Column key={0} x={0} blocks="foo" />
          <Column key={1} x={1} blocks="bar" />
        </div>
      )
    ).toBe(true);
  });
});
