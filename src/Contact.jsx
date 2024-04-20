import './Contact.css'

function Contact() {
  return (
    <section id='contact-section'>
      <div id='logo-box'>
        <a href="mailto:johnpaulfairhart@hotmail.com"><img className='contact-links' src="../assets/email-svg-white-lines.svg" alt="email icon"/></a>
        <a href="https://www.linkedin.com/in/jp-fairhart"><img className='contact-links' src="../assets/linkedin-svg-white-letters.svg" alt="linkedin logo"/></a>
        <a href="https://github.com/wazzupope"><img className='contact-links' src="../assets/github-mark-white.svg" alt="github logo"/></a>
      </div>
    </section>
  )
}

export default Contact