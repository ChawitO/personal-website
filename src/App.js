import React from 'react';

import { GlobalStyle } from './styles/globalStyles';
import Navbar from './components/Navbar';
import Socialbar from './components/Socialbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <main>
        <Socialbar />
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
