import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {
  Provider
} from 'mobx-react';
import store from "./mobx/store";

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
