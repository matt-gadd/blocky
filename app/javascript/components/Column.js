import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import BlockContainer from '../containers/BlockContainer';

function Column({ x, blocks }) {
  const items = [...blocks].reverse().map(props => {
    return <BlockContainer key={props.id} {...props} />;
  });
  return (
    <div key={x} className="col">
      <CSSTransitionGroup
        transitionName="block"
        transitionEnterTimeout={300}
        transitionLeave={false}
      >
        {items}
      </CSSTransitionGroup>
    </div>
  );
}

export default Column;
