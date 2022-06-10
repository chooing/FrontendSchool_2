import React, { useState } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import Header from './components/header/Header'

const GlobalStyle = createGlobalStyle`${reset}`

function App() {
  return (
    <div>
      <GlobalStyle/>   
      <Header/>   
    </div>
  );
}

export default App;
