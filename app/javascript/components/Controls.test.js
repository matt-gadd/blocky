import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import Controls from './Controls';

describe('Controls', function() {
  test('should render with enabled buttons', function() {
    const onUndo = stub();
    const onRedo = stub();
    expect(
      shallow(
        <Controls
          hasUndo={true}
          hasRedo={true}
          onUndo={onUndo}
          onRedo={onRedo}
        />
      ).contains(
        <div className="controls">
          <button disabled={false} onClick={onUndo}>Undo</button>
          <button disabled={false} onClick={onRedo}>Redo</button>
        </div>
      )
    ).toBe(true);
  });

  test('should render with disabled buttons', function() {
    const onUndo = stub();
    const onRedo = stub();
    expect(
      shallow(
        <Controls
          hasUndo={false}
          hasRedo={false}
          onUndo={onUndo}
          onRedo={onRedo}
        />
      ).contains(
        <div className="controls">
          <button disabled={true} onClick={onUndo}>Undo</button>
          <button disabled={true} onClick={onRedo}>Redo</button>
        </div>
      )
    ).toBe(true);
  });
});
