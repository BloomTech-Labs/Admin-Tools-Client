import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers, window.__REDUX_DEVTOOLS_EXTENSION__())} >
    <Router>
      <div>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/pull-requests" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
