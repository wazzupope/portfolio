import './Header.css'
import Nav from './Nav.jsx'
import Contact from './Contact.jsx'

function Header() {
  return (
    <header id='header'>
      <a href='/'>
        <img id='white-FWD-logo' src='/assets/FWD-logo-white.jpg' alt='Fairhart Web Development Logo'/>
        <img id='black-FWD-logo' src='/assets/FWD-logo-black.jpg' alt='Fairhart Web Development Logo'/>
      </a>
      {/* menu for screen sizes 768px or greater */}
      <div id='sidebar-container'>
        <a id="home-link" className="menu-item" href="/">HOME</a>
        <a id="portfolio-link" className="menu-item" href="#portfolio">PORTFOLIO</a>
        <a id="about-link" className="menu-item" href="#about">ABOUT</a>
        <a id="skills-link" className="menu-item" href="#skills">SKILLS</a>
        <a id="contact-link" className="menu-item" href="#contact">CONTACT</a>
      </div>
      <Contact />
      {/* menu for screen sizes less than 768px */}
      <Nav />
    </header>
  )
}

export default Header