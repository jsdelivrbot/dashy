import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #252839;
  }
`;

const wrapper = document.getElementById('app');
wrapper &&
    ReactDOM.render(
        <App>
            {' '}
            <GlobalStyle />{' '}
        </App>,
        wrapper,
    );
