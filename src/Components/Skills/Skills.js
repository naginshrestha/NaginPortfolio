import React from 'react'
import './Skills.css'
import csharp from '../../assets/csharp.png'
import firebase from '../../assets/firebase.png'

const Skills = () => {
  return (
   <>
         <section className="section3 flex" id="Skill">
        <div className="skills-container flex">
          <div className="flex">
            <i className="fa-brands fa-html5"></i>
            <span>HTML</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-css3"></i>
            <span>CSS</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-js"></i>
            <span>JavaScript</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-react"></i>
            <span>React</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-sass"></i>
            <span>Sass</span>
          </div>
       
          <div className="flex">
            <img src={firebase}  alt=""/>
            <span>Firebase</span>
          </div>

          <div className="flex">
            <img src={csharp}  alt=""/>
            <span>C#</span>
          </div>
        </div>

      </section>
   </>
  )
}

export default Skills