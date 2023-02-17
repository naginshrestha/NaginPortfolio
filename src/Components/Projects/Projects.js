import React from 'react'
import './Projects.css'
import mba from '../../assets/mbaapp.jpeg'
import pulse from '../../assets/pulse.webp'
import kotha from '../../assets/kothaapp.jpeg'

const Projects = () => {
  return (
   <>
         <section className="section4 flex " id="project">
        <h1 className="ProjTitle">Project</h1>
        <div className="projects-container grid">
        <div className="project-card flex">
          <div className="topimg">
            <img src={kotha} alt=""/>
          </div>

          <div className="buttontitle">
            <p>oct 1,2020</p>
            <p>Kotha Finders</p>
          </div>
        </div>

        <div className="project-card flex">
          <div className="topimg">
            <img src={mba} alt=""/>
          </div>

          <div className="buttontitle">
            <p>Mar 1,2021</p>
            <p>MBA Soiution Nepal</p>
          </div>
        </div>

        <div className="project-card flex">
          <div className="topimg">
            <img src={pulse} alt=""/>
          </div>

          <div className="buttontitle">
            <p>Aug 5,2022</p>
            <p>Pulse Nightlife</p>
          </div>
        </div>
      </div>
      </section>
   </>
  )
}

export default Projects