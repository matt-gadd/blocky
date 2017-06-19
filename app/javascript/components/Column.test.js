import React from 'react';
import { shallow } from 'enzyme';
import { CSSTransitionGroup } from 'react-transition-group';

import Column from './Column';
import BlockContainer from '../containers/BlockContainer';

describe('Column', function() {
  test('should render', function() {
    const blocks = [{ id: 0 }, { id: 1 }];
    expect(
      shallow(<Column x={1} blocks={blocks} />).contains(
        <div key={1} className="col">
          <CSSTransitionGroup
            transitionName="block"
            transitionEnterTimeout={300}
            transitionLeave={false}
          >
            <BlockContainer key={1} id={1} />
            <BlockContainer key={0} id={0} />
          </CSSTransitionGroup>
        </div>
      )
    ).toBe(true);
  });
});
