import { connect } from 'react-redux';
import Block from '../components/Block';
import { submit, highlight } from '../actions';

export function mapStateToProps({ present }, ownProps) {
  let highlighted = false;
  if (present.highlighted.includes(ownProps.id)) {
    highlighted = true;
  }
  return { ...ownProps, highlighted };
}

export function mapDispatchToProps(dispatch) {
  return {
    onSelect: (x, y) => dispatch(submit(x, y)),
    onHighlight: (x, y) => dispatch(highlight(x, y))
  };
}

const BlockContainer = connect(mapStateToProps, mapDispatchToProps)(Block);
export default BlockContainer;
