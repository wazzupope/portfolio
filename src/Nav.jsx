import './Nav.css'
import Hamburger from './Hamburger.jsx'

function Nav() {
  return (
    <nav>
      <Hamburger />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav