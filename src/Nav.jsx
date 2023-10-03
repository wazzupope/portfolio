import { useState } from 'react'
import './Nav.css'
import Hamburger from './Hamburger.jsx'

{/*
Need to debug why passing state as props to Hamburger isn't working properly
Can remove position: absolute in browser devtools to be able to see hamburger element
*/}


function Nav() {
  const [isActive, setActive] = useState(null);

  const handleToggle = () => {
    setActive(isActive ? null : "active");
  };

  if (isActive) {  
    return (
      <nav>
        <Hamburger isOpen='isActive' onClick={handleToggle} />
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
  else {
    return (
      <nav>
        <Hamburger isOpen='isActive' onClick={handleToggle}/>
      </nav>
    )
  }
}

export default Nav