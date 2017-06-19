import React from 'react';
import { shallow } from 'enzyme';

import HorizontalLineBlock from './HorizontalLineBlock';

describe('HorizontalLineBlock', function() {
  test('should render', function() {
    expect(
      shallow(<HorizontalLineBlock />).contains(
        <div className="horizontalLine">↔</div>
      )
    ).toBe(true);
  });
});
