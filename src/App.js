import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, AppBar, Toolbar, Anchor } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Home from './components/Home';
import './App.css';
import About from './components/About';
import CryptoPrices from './components/CryptoPrices';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif' !important;
    background-color: #018281
  }
  ${styleReset}
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <About />
      <Home />
      <AppBar className="bottom-sticky">
        <Toolbar style={{ justifyContent: "space-between" }}>
          Powered by <Anchor href="https://newsapi.org/" target="_blank" rel="noreferrer">https://newsapi.org/</Anchor>
        </Toolbar>
      </AppBar>
      <CryptoPrices />
    </ThemeProvider>
  </div>
);

export default App;