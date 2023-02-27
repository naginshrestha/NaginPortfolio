import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
         <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className='left'>
              <h3>LINKS</h3>
              <ul className="flex">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/#Skills">Skills</a>
                </li>
                <li>
                <a href="/#Projects">Projects</a>
                  </li>
                <li>
                <a href="/#about">About</a>

                  </li>
                <li>
                <a href="/#contact">Contact</a>

                  </li>
              </ul>
            </div>

            <div className='right'>
              <h3>EXTERNAL LINKS</h3>
              <ul className="flex"> 
                <li>
                <a href="https://www.linkedin.com/in/naginshrestha/">LinkedIn</a>
                  </li>
                <li>
                <a href="https://github.com/naginshrestha">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <h1>Nagin | Front end Developer</h1>

            <p>&copy; | All right reserved</p>
              
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer