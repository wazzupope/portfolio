import './Portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 id='portfolio-header'>Portfolio</h2>
      <div>
        <a className='header-link' href='https://lfizzle-invitational.web.app'>
          <h3 className='portfolio-subheader'>LFizzle Invitational</h3>
        </a>
        <a id='LFI-link' className='portfolio-link' href='https://lfizzle-invitational.web.app'>
          <img id='LFI-screenshot' className='portfolio-screenshot' src='/assets/LFI-screenshot.png' alt='Thumbnail of golf tournament website'></img>
        </a>
        <p className='portfolio-description'>Golf tournament website with live scoring feature.</p>
        <p className='portfolio-tech'>Technologies used: React, CSS, Firebase, Git, GitHub</p>
      </div>
    </section>
  )
}

export default Portfolio