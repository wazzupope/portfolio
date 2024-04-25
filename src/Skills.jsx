import './Skills.css'

function Skills() {
  return (
    <section id='skills'>
      <h2 id='skills-header'>Skills</h2>
      <div id='skills-container'>
        <div id='stronger-skills-container'>
          <h3 className='skills-subheader'>Most Used Technologies</h3>
          <ul id='stronger-skills-list' className='skills-list'>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/html5-logo.svg" alt="HTML 5 icon"/>
              <span>
                HTML
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/css3-logo.svg" alt="CSS 3 icon"/>
              <span>
                CSS
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/javascript-logo.svg" alt="Javascript icon"/>
              <span>
                JavaScript
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/react-logo.svg" alt="React icon"/>
              <span>
                React
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/git-logo.svg" alt="Git icon"/>
              <span>
                Git
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/github-mark-white.svg" alt="GitHub icon"/>
              <span>
                GitHub
              </span>
            </li>
          </ul>
        </div>
        <div id='other-skills-container'>
          <h3 className='skills-subheader'>Other Technologies</h3>
          <ul id='other-skills-list' className='skills-list'>
            <li className='skills-list-item'>
              <img id='next-logo' className='skill-logo-image' src="../assets/nextjs-logo.svg" alt="Next.js icon"/>
              <span>
                Next.js
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/node-logo.svg" alt="Node.js icon"/>
              <span>
                Node.js
              </span>
            </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/tailwind-logo.svg" alt="Tailwind CSS icon"/>
              <span>
                Tailwind CSS
              </span>
              </li>
            <li className='skills-list-item'>
              <img className='skill-logo-image' src="../assets/firebase-logo.svg" alt="Firebase icon"/>
              <span>
                Firebase
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills