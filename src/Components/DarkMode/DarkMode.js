import React from 'react'
import './Darkmode.css'

const DarkMode = () => {
  return (
<>
<input type="checkbox" id="darkMode" class="dark-mode-checkbox" />
    <label for="darkMode">
      {/* <i class="fa-solid fa-circle-half-stroke toggle"></i> */}
    </label>
</>
  )
}

export default DarkMode
