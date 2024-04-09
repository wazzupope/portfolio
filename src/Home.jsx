import WordWheel from './WordWheel.jsx'

function Home() {
  
  const sentenceEnders = [
    // if adding more elements to array, need to change conditional in if statement in changeEnd in WordWheel component
    'healthcare.', 'wellness.', 'athletics.', 'sports leagues.', 'tournaments.'
  ]

  return (
    <main id="hero">
      <h1>Fairhart Web Development</h1>
      <h2>
        Your web solution for <WordWheel text={sentenceEnders}/>
      </h2>
    </main>
  )
}

export default Home