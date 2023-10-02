import { useState } from 'react';
import './Hamburger.css'

function Hamburger() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="hamburger {isActive ? active : inactive}" onClick={ToggleClass}>
      <span className="hamburger-bun-top"></span>
      <span className="hamburger-bun-bottom"></span>
    </div>
  )
}

export default Hamburger