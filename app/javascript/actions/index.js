import { getResults, getReplacementBlocks } from '../util/matching';

function replaceBlocks(blocks) {
  return {
    type: 'BLOCKS_REPLACE',
    blocks
  };
}

function highlightBlocks(blocks) {
  return {
    type: 'BLOCKS_HIGHLIGHT',
    blocks
  };
}

export function highlight(x, y) {
  return (dispatch, getState) => {
    const { present: { grid, gridMeta } } = getState();
    const results = getResults(x, y, grid, gridMeta) || [];
    dispatch(highlightBlocks(results));
  };
}

export function submit(x, y) {
  return (dispatch, getState) => {
    const { present: { grid, gridMeta } } = getState();
    const results = getResults(x, y, grid, gridMeta);

    if (results) {
      const blocks = getReplacementBlocks(results, grid, gridMeta);
      dispatch(replaceBlocks(blocks));
    }
  };
}
