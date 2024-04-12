import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

function Nav() {
  return (
    <nav id='nav'>
      <Menu right noOverlay>
        <a id="home-link" className="menu-item" href="/">HOME</a>
        <a id="about-link" className="menu-item" href="#about">ABOUT</a>
        <a id="skills-link" className="menu-item" href="#skills">SKILLS</a>
        <a id="portfolio-link" className="menu-item" href="#portfolio">PORTFOLIO</a>
        <a id="contact-link" className="menu-item" href="#contact">CONTACT</a>
      </Menu>
    </nav>
  )
}

export default Nav