import './App.css';
import DarkMode from './Components/DarkMode/DarkMode';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Abouts from './Components/Abouts/Abouts';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import { useState } from 'react';

import Jsonfile from './Data/Jsonfile.json'

function App() {

  //  const[data,setData] =useState({})

  // const jsondat =Jsonfile.map((info)=>{
  //  setData(info)
  // })
  return ( 

    <div className="wrapper">
      <DarkMode/>
      <Header/>
      <Hero/>
      <Info/>
      <Skills/>
      <Projects/>
      <Abouts/>
      <Contacts />
      <Footer/>
      <Scroll/>
    </div>
  
  );
}

export default App;
