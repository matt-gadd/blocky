import React from 'react';
import { shallow } from 'enzyme';

import BasicBlock from './BasicBlock';

describe('BasicBlock', function() {
  test('should render with class from meta', function() {
    const meta = { colour: 'red' };
    expect(
      shallow(<BasicBlock meta={meta} />).contains(<div className="red" />)
    ).toBe(true);
  });
});
