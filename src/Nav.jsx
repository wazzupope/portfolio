import { useState, useRef } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

function Nav() {
  // handlers for closing nav when a link within the nav is clicked or when there is a click outside the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const navMenu = useRef(null)
  const closeOpenMenu = (e) => {
    if (navMenu.current && !navMenu.current.contains(e.target)) {
      setIsMenuOpen(false)
    }
  }
  document.addEventListener('mousedown', closeOpenMenu)

  return (
    <nav id='nav' ref={navMenu}>
      {/* menu for screen sizes less than 768px */}
      <div id='burger-container'>
        <Menu
        right
        isOpen={isMenuOpen}
        onOpen={handleMenuOpen}
        onClose={handleMenuOpen}
        >
          <a id="home-link" className="menu-item" href="/">HOME</a>
          <a onClick={closeMenu} id="portfolio-link" className="menu-item" href="#portfolio">PORTFOLIO</a>
          <a onClick={closeMenu} id="about-link" className="menu-item" href="#about">ABOUT</a>
          <a onClick={closeMenu} id="skills-link" className="menu-item" href="#skills">SKILLS</a>
          <a onClick={closeMenu} id="contact-link" className="menu-item" href="#contact">CONTACT</a>
        </Menu>
      </div>
    </nav>
  )
}

export default Nav