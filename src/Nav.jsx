import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="skills" className="menu-item" href="/skills">Skills</a>
        <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    </nav>
  )
}

export default Nav