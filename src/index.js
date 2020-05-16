import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './homePage';

// import {HashRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

