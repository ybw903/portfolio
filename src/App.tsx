import React, {  useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Archiving from './components/Archiving';
import Projects from './components/Projects';
import Introduce from './components/Introduce';

function App() {
  const itemsRef = useRef<(null|HTMLDivElement)[]>(new Array(4));

  const handleScroll = (i:number) => {
    itemsRef?.current[i]?.scrollIntoView({"behavior": "smooth"});
  }

  const setItemsRef= (i:number, divRef: HTMLDivElement|null) => {
    itemsRef.current[i] = divRef;
  }

  return (
    <div className="App">
      <Header handleScroll={handleScroll}/>
      <Introduce/>
      <AboutMe setItemsRef={setItemsRef}/>
      <Skills setItemsRef={setItemsRef}/>
      <Archiving setItemsRef={setItemsRef}/>
      <Projects setItemsRef={setItemsRef}/>
      <Footer/>
    </div>
  );
}

export default App;
