import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {FirebaseContext} from './store/firebaseContext'
import {Firebaseapp,db,storage} from './firebase/firebase'
import Context from './store/firebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Firebaseapp,db,storage}}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);