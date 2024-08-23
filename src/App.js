import React from 'react';
import Header from '../src/Assets/headerr';
import About from '../src/Assets/About';
import Skills from '../src/Assets/Skills';
import Experience from '../src/Assets/Experience';
import Projects from '../src/Assets/Projects';

import '@fortawesome/fontawesome-free/css/all.min.css';

// import Education from '../src/Assets/Education'
import Contact from '../src/Assets/Contact';
import './App.css';
import Footer from '../src/Assets/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
