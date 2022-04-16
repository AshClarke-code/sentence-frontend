import React from 'react';
import ReactDOM from 'react-dom/';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {SentenceProvider} from './contexts/sentence.context';
import {UserProvider} from './contexts/user.context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SentenceProvider>
          <App />
        </SentenceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
