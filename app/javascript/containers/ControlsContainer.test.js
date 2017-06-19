import { stub } from 'sinon';

import {
  mapStateToProps,
  mapDispatchToProps
} from '../containers/ControlsContainer';

describe('ControlsContainer', function() {
  test('mapStateToProps', function() {
    const props = mapStateToProps({ past: [1], future: [1] });
    expect(props).toEqual({
      hasUndo: true,
      hasRedo: true
    });
  });

  test('mapDispatchToProps', () => {
    const dispatch = stub();
    const props = mapDispatchToProps(dispatch);
    props.onUndo(1, 1);
    props.onRedo(1, 1);
    expect(dispatch.callCount).toBe(2);
  });
});
