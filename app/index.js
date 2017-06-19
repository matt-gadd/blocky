import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import undoable, { excludeAction } from 'redux-undo';

import './less/main.less';
import Game from './javascript/components/Game';
import { gameReducer } from './javascript/reducers';
import { createGame } from './javascript/util/create';

const initialState = createGame(10, 10);
const store = createStore(
  undoable(gameReducer, {
    limit: 10,
    filter: excludeAction('BLOCKS_HIGHLIGHT')
  }),
  initialState,
  compose(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
