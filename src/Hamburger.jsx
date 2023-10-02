import { useState } from 'react';
import './Hamburger.css'

function Hamburger() {
  const [isActive, setActive] = useState(null);

  const handleToggle = () => {
    setActive(isActive ? null : "active");
  };

  return (
    <div className={isActive ? "hamburger active" : "hamburger"} onClick={handleToggle}>
      <span className="hamburger-bun-top"></span>
      <span className="hamburger-bun-bottom"></span>
    </div>
  )
}

export default Hamburger