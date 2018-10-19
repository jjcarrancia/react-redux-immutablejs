import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import reducers from './js/reducers';
import Main from './screens/Main.react';
import './App.css';

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const reduxLogger = createLogger({
  collapsed: true,
  stateTransformer,
});

const store = createStore(reducers, applyMiddleware(reduxLogger));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
