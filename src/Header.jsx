import './Header.css'
import Nav from './Nav.jsx'

function Header() {
  return (
    <header id='header'>
      <img id='white-FWD-logo' src='/assets/FWD-logo-white.jpg' alt='Fairhart Web Development Logo'/>
      <Nav />
    </header>
  )
}

export default Header