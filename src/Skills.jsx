import './Skills.css'

function Skills() {
  return (
    <section id='skills'>
      <h2 id='skills-header'>Skills</h2>
      <div id='skills-container'>
        <div id='stronger-skills-container'>
          <h3 className='skills-subheader'>Most Used Technologies</h3>
          <ul id='stronger-skills-list' className='skills-list'>
            <li className='skills-list-item'>HTML</li>
            <li className='skills-list-item'>CSS</li>
            <li className='skills-list-item'>Javascript</li>
            <li className='skills-list-item'>ReactJS</li>
            <li className='skills-list-item'>Git</li>
            <li className='skills-list-item'>GitHub</li>
          </ul>
        </div>
        <div id='other-skills-container'>
          <h3 className='skills-subheader'>Other Technologies</h3>
          <ul id='other-skills-list' className='skills-list'>
            <li className='skills-list-item'>NextJS</li>
            <li className='skills-list-item'>Tailwind CSS</li>
            <li className='skills-list-item'>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills