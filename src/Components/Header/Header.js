import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header class="flex primary-header">

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
      <a href="/">Home</a>
    </li>
    <li>
      <a href="#Skills">Skills</a>
    </li>
    <li>
      <a href="#Projects">Projects</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>
</header>
    </>
  )
}

export default Header