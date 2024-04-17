import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

function App() {
  return (
    <section id='page-container'>
      <section id='content-container'>
        <Home />
        <Portfolio />
        <About />
        <Skills />
        <div id='contact-container'>
          <Contact />
        </div>
      </section>
      <Header />
    </section>
  )
}

export default App
