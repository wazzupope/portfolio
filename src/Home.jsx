function Home() {
  setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 2000)
  
  return (
    <main id="hero">
      <h1>Fairhart Web Development</h1>
      <h2>Your web solution for
        <div className='mask'>
          <span data-show>healthcare.</span>
          <span>wellness.</span>
          <span>athletics.</span>
          <span>sports leagues.</span>
          <span>tournaments.</span>
        </div>
      </h2>
    </main>
  )
}

export default Home