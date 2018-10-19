import 'semantic-ui-css/semantic.min.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #252839;
  }
`;

const wrapper = document.getElementById("app");
wrapper && ReactDOM.render(<App> <GlobalStyle /> </App>, wrapper); 