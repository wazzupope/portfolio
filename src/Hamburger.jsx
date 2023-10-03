/* eslint-disable react/prop-types */
import './Hamburger.css'

function Hamburger({ isOpen }) {
  let burgerOpen = isOpen;

  return (
    <div className={burgerOpen ? "hamburger active" : "hamburger"}>
      <span className="hamburger-bun-top"></span>
      <span className="hamburger-bun-bottom"></span>
    </div>
  )
}

export default Hamburger