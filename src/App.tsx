import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';
import Projects from './components/Projects';
import Introduce from './components/Introduce';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Introduce/>
      <AboutMe/>
      <Skills/>
      <Archiving/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
