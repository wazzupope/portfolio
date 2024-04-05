import './Header.css'
import Nav from './Nav.jsx'

function Header() {
  return (
    <header id='header'>
      <a href='/'><img id='white-FWD-logo' src='/assets/FWD-logo-white.jpg' alt='Fairhart Web Development Logo'/></a>
      <Nav />
    </header>
  )
}

export default Header