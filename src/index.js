import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />,
    document.getElementById('root')
  );
};
update();
store.subscribe(update);
