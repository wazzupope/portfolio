import './Portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 id='portfolio-header'>Portfolio</h2>
      <div>
        <h3 className='portfolio-subheader'>LFizzle Invitational</h3>
        <p className='portfolio-description'>Golf tournament website created using React with live scoring feature.</p>
        <a id='LFI-link' className='portfolio-link' href="https://lfizzle-invitational.web.app">
          <img id='LFI-screenshot' className='portfolio-screenshot' src='/assets/LFI-screenshot.png' alt='Thumbnail of golf tournament website'></img>
        </a>
      </div>
    </section>
  )
}

export default Portfolio