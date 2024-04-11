import './Portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div>
        <h3>LFizzle Invitational</h3>
        <p>Golf tournament website created using React with live scoring feature.</p>
        <a id='LFI-link' href="https://lfizzle-invitational.web.app">
          <img id='LFI-screenshot' src='/assets/LFI-screenshot.png' alt='Thumbnail of golf tournament website'></img>
        </a>
      </div>
    </section>
  )
}

export default Portfolio