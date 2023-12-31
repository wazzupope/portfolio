import './Portfolio.css'

// wrap h3 and img with link tags that go to https://lfizzle-invitational.web.app/

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <h3>LFizzle Invitational</h3>
        <p>Golf tournament website created using React with live scoring feature.</p>
        <a href="https://lfizzle-invitational.web.app">
          <img id='LFI-screenshot' src='/assets/LFI-screenshot.png' alt='Thumbnail of golf tournament website'></img>
        </a>
      </div>
    </section>
  )
}

export default Portfolio