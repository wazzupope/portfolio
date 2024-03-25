import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

function Nav() {
  return (
    <nav id='nav'>
      <Menu right>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="about" className="menu-item" href="/about">ABOUT</a>
        <a id="skills" className="menu-item" href="/skills">SKILLS</a>
        <a id="portfolio" className="menu-item" href="/portfolio">PORTFOLIO</a>
        <a id="contact" className="menu-item" href="/contact">CONTACT</a>
      </Menu>
    </nav>
  )
}

export default Nav