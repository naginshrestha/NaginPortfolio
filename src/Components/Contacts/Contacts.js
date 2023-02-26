import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
   <>
     <section className="section6 flex" id="contact">
        <h1 className="title">Get in Touch</h1>

        <div className="socials flex">
          <a href="https://www.linkedin.com/in/naginshrestha/"> <i className="fa-brands fa-linkedin"> </i></a>

          <a href="https://github.com/naginshrestha"><i className="fa-brands fa-github"></i></a> 
          <a href='https://www.facebook.com/nagin.sherest.92?mibextid=LQQJ4d'> <i className="fa-brands fa-facebook"></i></a>  
          <a href='https://twitter.com/nagin_shrestha'> <i className="fa-brands fa-twitter"></i></a> 

        </div>

        <h1 className="or">OR</h1>
           <div className="email-section flex">
          <p>reach out over email</p>
          <div className="email">
            
            <a href='nagin.shresthaofficial@gmail.com'>nagin.shresthaofficial@gmail.com
              <i className="fa-solid fa-paper-plane " style={{ color: "white" }} ></i>
            </a>
          </div>
        </div>

      </section>
   </>
  )
}

export default Contacts