import React from 'react'
import Scroll from '../../Components/Scroll/Scroll';
import DarkMode from '../../Components/DarkMode/DarkMode';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';




const Layout = ({children}) => {
  return (
    <div>

    <DarkMode/>
    <div className="wrapper">
      
      <Header/>
     

      {children}
      <Footer/>

      <Scroll/>
    </div>
    </div>
  )
}

export default Layout