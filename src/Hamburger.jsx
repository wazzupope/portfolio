import './Hamburger.css'

function Hamburger() {
  let burger = document.getElementsByClassName('hamburger')

  function handleClick() {
    burger.toggleClass('open')
  }

  return (
    <div className="hamburger" onClick={handleClick}>
      <span className="hamburger-bun-top"></span>
      <span className="hamburger-bun-bottom"></span>
    </div>
  )
}

export default Hamburger