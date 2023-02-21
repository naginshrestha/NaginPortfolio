import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header class="flex primary-header">
<div class="flex logo">
  <h1>Nagin Shrestha</h1>
  <div>
    <h3 class="line">Web Developer</h3>
  </div>
</div>
<div class="right">
  <input type="checkbox" id="check" />
  <label for="check" class="checkBtn">
    <i class="fa-solid fa-bars"></i>
  </label>
  <ul class="flex primary-navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Skill">Skills</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</div>
</header>
    </>
  )
}

export default Header