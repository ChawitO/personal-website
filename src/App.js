import React from 'react';

import { GlobalStyle } from './styles/globalStyles';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
