import React from 'react';
import logo from './logo.svg';

import { GlobalStyle } from './styles/globalStyles';
import Home from './components/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <img src={logo}/> */}
      <Home />
    </>
  )
}

export default App;
