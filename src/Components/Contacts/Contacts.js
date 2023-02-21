import React from 'react'
import Layout from '../Layout/Layout'
import './Contacts.css'

const Contacts = () => {
  return (
   <>
   <Layout>
     <section className="section6 flex" id="contact">
        <h1 className="title">Get in Touch</h1>

        <div className="socials flex">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>

        </div>

        <h1 className="or">OR</h1>

        <div className="email-selection flex">
          <p>reach out over email</p>

          <div className="email">
            <a href="nagin.shresthaofficial@gmail.com">nagin.shresthaofficial@gmail.com</a>
            <div className="send">
              <i className="fa-solid fa-paper-plane"></i>

            </div>
          </div>
        </div>

      </section>
      </Layout>
   </>
  )
}

export default Contacts