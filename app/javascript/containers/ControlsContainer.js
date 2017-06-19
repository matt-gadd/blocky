import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { ActionCreators } from 'redux-undo';

export function mapStateToProps({ past, future }) {
  return {
    hasUndo: !!past.length,
    hasRedo: !!future.length
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())
  };
}

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Controls
);
export default ControlsContainer;
