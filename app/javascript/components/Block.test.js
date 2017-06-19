import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import Block from './Block';
import BasicBlock from './BasicBlock';
import HorizontalLineBlock from './HorizontalLineBlock';

describe('Block', function() {
  test('should render with a BasicBlock', function() {
    const meta = { colour: 'red' };
    const wrapper = shallow(<Block x={1} y={1} meta={meta} type={0} />);
    expect(
      wrapper.find(BasicBlock).contains(<BasicBlock x={1} y={1} meta={meta} />)
    ).toBe(true);
  });

  test('should render with a HorizontalLineBlock', function() {
    const meta = { colour: 'red' };
    const wrapper = shallow(<Block x={1} y={1} meta={meta} type={1} />);
    expect(
      wrapper
        .find(HorizontalLineBlock)
        .contains(<HorizontalLineBlock x={1} y={1} meta={meta} />)
    ).toBe(true);
  });

  test('should render with a a highlight class when highlighted', function() {
    const meta = { colour: 'red' };
    const wrapper = shallow(
      <Block x={1} y={1} meta={meta} type={1} highlighted={true} />
    );
    expect(wrapper.find('div').hasClass('highlighted')).toBe(true);
  });

  test('onSelect', function() {
    const meta = { colour: 'red' };
    const onSelect = stub();
    const wrapper = shallow(
      <Block
        x={1}
        y={1}
        meta={meta}
        type={0}
        highlighted={true}
        onSelect={onSelect}
      />
    );
    wrapper.find('div').simulate('click');
    expect(onSelect.calledWith(1, 1)).toBe(true);
  });

  test('onHighlight', function() {
    const meta = { colour: 'red' };
    const onHighlight = stub();
    const wrapper = shallow(
      <Block
        x={1}
        y={1}
        meta={meta}
        type={0}
        highlighted={true}
        onHighlight={onHighlight}
      />
    );
    wrapper.find('div').simulate('mouseover');
    expect(onHighlight.calledWith(1, 1)).toBe(true);
  });
});
