import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassDetails from './ClassDetails';
//import Review from './Review';
//import Home from './Home';
import reportWebVitals from './reportWebVitals';
//import ListOfClasses from './Home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
