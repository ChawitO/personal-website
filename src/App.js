import React from 'react';

import { GlobalStyle } from './styles/globalStyles';
import Navbar from './components/Navbar';
import Socialbar from './components/Socialbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

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
      <Footer />
    </>
  )
}

export default App
