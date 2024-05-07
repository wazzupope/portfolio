import './Skills.css'

function Skills() {
  return (
    <section id='skills'>
      <h2 id='skills-header'>Skills</h2>
    <div id='skills-container'>
        <h3 className='skills-subheader'>Technologies Used</h3>
        <ul id='stronger-skills-list' className='skills-list'>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/html5-logo.svg" alt="HTML 5 icon"/>
            <span className='skill-name'>
              HTML
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/css3-logo.svg" alt="CSS 3 icon"/>
            <span className='skill-name'>
              CSS
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/javascript-logo.svg" alt="Javascript icon"/>
            <span className='skill-name'>
              JavaScript
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/react-logo.svg" alt="React icon"/>
            <span className='skill-name'>
              React
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/git-logo.svg" alt="Git icon"/>
            <span className='skill-name'>
              Git
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/github-mark-white.svg" alt="GitHub icon"/>
            <span className='skill-name'>
              GitHub
            </span>
          </li>
          <li className='skills-list-item'>
            <img id='next-logo' className='skill-logo-image' src="../assets/nextjs-logo.svg" alt="Next.js icon"/>
            <span className='skill-name'>
              Next.js
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/node-logo.svg" alt="Node.js icon"/>
            <span className='skill-name'>
              Node.js
            </span>
          </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/tailwind-logo.svg" alt="Tailwind CSS icon"/>
            <span className='skill-name'>
              Tailwind
            </span>
            </li>
          <li className='skills-list-item'>
            <img className='skill-logo-image' src="../assets/firebase-logo.svg" alt="Firebase icon"/>
            <span className='skill-name'>
              Firebase
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills