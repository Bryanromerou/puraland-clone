import React from 'react';
import About from './pages/About';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Teams/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
