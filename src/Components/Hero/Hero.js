import React from 'react'
import naginp from '../../assets/naginp.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <section className="grid section1 " id='/'>
        <div className="left">
          <img src={naginp}  alt=""/>
        </div>
        <div className="right flex">
        <div>
          <h2 className="name"> Nagin Shrestha</h2>
          <p className="tag">Front End Developer</p>
        </div>

        {/* <a href="" download=""> */}

        <a href="nagin-resume-for-react-developer.pdf" download="nagin-resume-for-react-developer.pdf">
            <button className="button">
            <div className='download'>
            <p>  Download resume </p>
              <i className="fa-solid fa-download"></i>

          </div>

            </button>   
          </a>
  
        </div>
      </section>
    </>
  )
}

export default Hero