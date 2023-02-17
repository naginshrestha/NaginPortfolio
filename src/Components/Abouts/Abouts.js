import React from 'react'
import './Abouts.css'
import naginpp from '../../assets/Nagin.png'


const Abouts = () => {
  return (
    <>
     <section className="section5 flex" id="about">
        <h1 className="about-title">About Me</h1>

        <div className="about-container flex">

          <div className="left flex">
            <div className="bg"></div>
            <img src={naginpp} alt=""/>
          </div>

          <div className="right flex">
            <h1>Nagin Shrestha</h1>
            <p>It's me Nagin.I grew up in Nepal and currently located in sydney, Australia.</p>
            <p>Sydney,Australia</p>

            <a href="">Connect with me</a>

            <div className="flex">
              <div className="tag">Intrest</div>

              <div>
                <span>Coding</span>
                <span>Reading</span>
                <span>Sports</span>
                <span>Traveling</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Abouts