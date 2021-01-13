import React from 'react';
import About from './pages/About';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Teams from './pages/Teams';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Teams/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
