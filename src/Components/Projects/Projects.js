import React from 'react'
import './Projects.css'
import mba from '../../assets/mbaapp.jpeg'
import pulse from '../../assets/pulse.webp'
import kotha from '../../assets/kothaapp.jpeg'

const Projects = () => {
 
  return (
   <>
     {/* <section className="section4 flex " id="project">
        <h1 className="ProjTitle">Project</h1>

        <div className="projects-container grid">
        <div className="project-card flex">
          <div className="topimg">
            <img src={kotha} alt=""/>
          </div>

          <div className="buttontitle">
            <p>{mydata.data}</p>
            <p>{mydata.Name}</p>
          </div>
        </div>


      </div>
      </section> */}

<section className="section4 flex " id="project">
        <h1 className="ProjTitle">Projects</h1>

        <div className="projects-container grid">

        <div className="project-card flex">
          <div className="topimg">
            <img src={kotha} alt=""/>
          </div>

          <div className="buttontitle">
          <p className='title'>Kotha Finders</p>
            <p className='date'>oct 1,2020</p>
            <p className="description">Rent, house, flat, shop or office without brokerage or brokers all over Nepal. Get the best home, shop, or office in no time. No Broker means no brokerage! Get rental agreement, home.</p>
            <a href='https://play.google.com/store/apps/details?id=com.kothafinders&hl=en_AU&gl=US'><p className='read'>Read More...</p></a>
          </div>
        </div>

        <div className="project-card flex">
          <div className="topimg">
            <img src={mba} alt=""/>
          </div>

          <div className="buttontitle">
          <p className='title'>MBA Soiution Nepal</p>
            <p className='date'>Mar 1,2021</p>
            <p className="description">This app is completely free for the students and lecturers feel free to use the contents.</p>

            <a href='https://apkcombo.com/mba-solutions-nepal/com.mbasolutions/'><p className='read'>Read More...</p></a>
          </div>
        </div>

        <div className="project-card flex">
          <div className="topimg">
            <img src={pulse} alt=""/>
          </div>

          <div className="buttontitle">
          <p className='title'>Pulse Nightlife</p>
            <p className='date'> Aug 5,2022</p>
            <p className="description">Pulse is an innovative event sharing platform that connects party lovers to local events around them.</p>

            <a href='https://apps.apple.com/ca/app/pulse-nightlife/id1620073274'><p className='read'>Read More...</p></a>
          </div>
        </div>
      </div>
      </section>
   </>
  )
}

export default Projects