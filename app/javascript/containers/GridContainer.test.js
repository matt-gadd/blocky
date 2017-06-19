import { mapStateToProps } from '../containers/GridContainer';

describe('GridContainer', function() {
  test('mapStateToProps', function() {
    const props = mapStateToProps({ present: { grid: [0][1] } });
    expect(props).toEqual({
      grid: [0][1]
    });
  });
});
