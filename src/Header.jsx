import './Header.css'
import Nav from './Nav.jsx'

function Header() {
  return (
    <header>
      <img id='white-polaris-logo' src='../assets/Polaris-white.jpg' alt='Polaris Logo'/>
      <Nav />
    </header>
  )
}

export default Header