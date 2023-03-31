import React from 'react'
import './Projects.css'
import Cocktail from '../../assets/cocktail.png'
import movieapi from '../../assets/movieapi.png'
import tracker from '../../assets/tracker.png'
import calculator from '../../assets/calculator.png'
import kotha from '../../assets/kothaapp.jpeg'
import { useState,useEffect,useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const initaldata =[
  {
  title :"Digital-Library",
  date :"31 mar 2023",
  description:"cadcas",
 
 },
 {
  title :"Expenses-Tracker ",
  date :"22 Mar 2023",
  description:"cadcas",
  
 },
 {
  title :"Cocktails",
  date :"22 feb 2023",
  description:"cadcas",
 
 },
 {
  title :"Movie Api",
  date :"18 feb 2023",
  description:"cadcas",
  
 },

]

const Projects = () => {
 
  const [data,setData] =useState(initaldata)

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
   <> 
 <h1 className="ProjTitle ">Projects</h1>


<Carousel   swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  autoPlaySpeed={1000}
  transitionDuration={500}
  //removeArrowOnDeviceType={["tablet", "mobile"]}

>

      <section className="section4 flex " id="Projects">
       

        <div className="projects-container grid">

        <div className="project-card flex">
          <div className="topimg">
            <img src={tracker} alt=""/>
          </div>

          <div className="buttontitle">
          <p className='title'>Expenses-Tracker </p>
            <p className='date'>22 Mar 2023</p>
            <p className="description">Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.</p>

            <div className='sites'>
             
              <div className='websitefrm' onClick={(e)=> window.open("https://calculator-js-gules.vercel.app/", "_blank")}>
             
               <span>
               <a className='textweb'>Website</a>&nbsp;&nbsp;
               <i class="fa-solid fa-globe"></i>
                </span> 
           
              </div>
              
              <div className='githubicon'>
                <a href='https://github.com/naginshrestha/Calculator-js'>
                <i class="fa-brands fa-github"></i>
                </a>
              
              </div>

            </div>
          </div>
        </div>


      </div>
      </section>

      <section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={Cocktail} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Cocktails</p>
           <p className='date'>22 feb 2023</p>
           <p className="description">Cocktail Maker is a website that allows users to search for their favourite cocktails.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://calculator-js-gules.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/Calculator-js'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>

     <section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={movieapi} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Movie Api  </p>
           <p className='date'>18 feb 2023</p>
           <p className="description">This website allows users to search and browse through a vast library of movies, TV shows, and other video content.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://calculator-js-gules.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/Calculator-js'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>

     <section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={calculator} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Calculator</p>
           <p className='date'>6 feb 2023</p>
           <p className="description">This website allows users to perform basic mathematical operations.The website includes a user interface with buttons for numbers, decimal point, and mathematical operators such as addition, subtraction, multiplication, and division.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://calculator-js-gules.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/Calculator-js'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>
       
</Carousel>;





 




{/* <section className="section4 flex " id="Projects">
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
      </section> */}
   </>
  )
}

export default Projects