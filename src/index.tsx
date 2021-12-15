import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
