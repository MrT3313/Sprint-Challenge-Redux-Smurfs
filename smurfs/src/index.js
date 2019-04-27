// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// REDUX
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// Dev Tools
  import { compose } from 'redux'

// COMPONENTS
import App from './components/App';

// REDUCERS
import { rootReducer } from './reducers';

// CSS
import './index.css';

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// START -> STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// end -> store enhancers

// START -> CREATE STORE
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)
// end -> create Store

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
