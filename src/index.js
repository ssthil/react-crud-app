import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
/** local component */
import App from './components/App';
// import Firebase, { FirebaseContext } from './components/Firebase';
/** css */
import './style.css';

import './utils';
/** data */
import users from './data/users_data.json';
import groups from './data/groups_data.json';
/** set data in localstorage */
localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('groups', JSON.stringify(groups));

ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('app')
);
