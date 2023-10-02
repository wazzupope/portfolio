import { useState } from 'react';
import './Hamburger.css'

function Hamburger() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="hamburger (isActive ? active : null)" onClick={handleToggle}>
      <span className="hamburger-bun-top"></span>
      <span className="hamburger-bun-bottom"></span>
    </div>
  )
}

export default Hamburger