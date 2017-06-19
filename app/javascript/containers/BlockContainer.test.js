import { stub } from 'sinon';

import {
  mapStateToProps,
  mapDispatchToProps
} from '../containers/BlockContainer';

describe('BlockContainer', function() {
  test('mapStateToProps', function() {
    const props = mapStateToProps(
      {
        present: {
          highlighted: [1]
        }
      },
      { id: 1 }
    );
    expect(props).toEqual({
      highlighted: true,
      id: 1
    });
  });

  test('mapStateToProps no highlight', function() {
    const props = mapStateToProps(
      {
        present: {
          highlighted: []
        }
      },
      { id: 1 }
    );
    expect(props).toEqual({
      highlighted: false,
      id: 1
    });
  });

  test('mapDispatchToProps', () => {
    const dispatch = stub();
    const props = mapDispatchToProps(dispatch);
    props.onSelect(1, 1);
    props.onHighlight(1, 1);
    expect(dispatch.callCount).toBe(2);
  });
});
