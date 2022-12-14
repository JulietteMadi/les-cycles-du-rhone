import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/style.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/Home';
import Footer from './Modules/Footer';
import Header from './Modules/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HomePage />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
