import { connect } from 'react-redux';
import Grid from '../components/Grid';

export function mapStateToProps({ present }) {
  return {
    grid: present.grid
  };
}

const GridContainer = connect(mapStateToProps)(Grid);

export default GridContainer;
