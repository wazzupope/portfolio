import './About.css'

function About() {
  return (
    <section id='about'>
      <div className='about-content-div'>
        <h2 id='about-header'>About</h2>
        <p className='about-text'>Originally a physical therapist by trade, my skillset is unique to the web development field.</p>
      </div>
      <div className='about-content-div'>
        <h3 className='about-subheader'>Communication</h3>
        <p className='about-text'>A decade interacting with people of all walks of life with their health at stake teaches to you to be an effective communicator.</p>
      </div>
      <div className='about-content-div'>
        <h3 className='about-subheader'>Attention to Detail</h3>
        <p className='about-text'>Following insurance guidelines, making note of every detail of treatments and being able to justify it in written form. This skill has led to my ability to document my code in a clear and concise manner.</p>
      </div>
      <div className='about-content-div'>
        <h3 className='about-subheader'>Leadership</h3>
        <p className='about-text'>Experience in leadership roles throughout my career has given me perspective on how to be a good teammate and employee.</p>
      </div>
    </section>
  )
}

export default About