import React from 'react'
import './Info.css'

const Info = () => {
  return (
   <>
         <section className="flex section2" >
        <div className="flex info-container">
          <div className="flex info-lists">
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div >
              <h5>B.E Computer Engineering</h5>
              <p>Graduate</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-lists flex">
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h5>3+ Projects</h5>
              <p>Completed</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-lists flex">
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h5>1 Yr Coding</h5>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Info