import React from 'react'
import './Header.css'
import { Link} from 'react-scroll'

const Header = () => {
  return (
    <>
    <header class="flex primary-header" >

<div class="flex logo">
  <h1>Nagin Shrestha</h1>

  <div class='linedis'>
  </div>
  <div>
    <h3 class="line">Front End Developer</h3>
  </div>
</div>


<div class="right">
  <input type="checkbox" id="check" />
  <label for="check" class="checkBtn">
    <i class="fa-solid fa-bars"></i>
  </label>
  <ul class="flex primary-navigation">
    <li>
      <a href="#nav-bar">Home</a>
      {/* <Link to="/" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link> */}
    </li>
    <li>
      <a href="#Skills">Skills</a>
      {/* <Link to="Skills" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Skills</Link> */}
    </li>
    <li>
      <a href="#Projects">Projects</a>
      {/* <Link to="Projects" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Projects</Link> */}
    </li>
    <li>
      <a href="#about">About</a>
      {/* <Link to="about" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>About</Link> */}
    </li>
    <li>
      <a href="#contact">Contact</a>
      {/* <Link to="contact" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link> */}
    </li>
  </ul>
</div>
</header>
    </>
  )
}

export default Header