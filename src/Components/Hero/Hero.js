import React from 'react'
import naginpp from '../../assets/Nagin.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
          <section className="grid section1 ">
        <div className="left">
          <img src={naginpp}  alt=""/>
          

        </div>
        <div className="right flex">
        <div>
          <h2 className="name"> Nagin Shrestha</h2>
          <p className="tag">Web front end developer</p>
        </div>
    
          <a href="" download="">
            <button className="button">
              Download resume
              <i className="fa-solid fa-download"></i>
            </button>   
          </a>
  
        </div>
      </section>
    </>
  )
}

export default Hero