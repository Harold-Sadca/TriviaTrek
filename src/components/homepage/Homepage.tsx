import { useNavigate } from 'react-router-dom'
import '../../App.css'
import './homepage.css'

function Homepage() {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <h1>Trivia Trek</h1>
      <p>Welcome to TriviaTrek, your journey through knowledge and fun! Embark on an exciting quest to test your wits and challenge your intellect. Dive into a world of captivating questions from various categories and explore the realms of trivia. Whether you're a seasoned quizmaster or a curious explorer, TriviaTrek offers an adventure that will entertain and enlighten. Get ready to embark on a captivating journey where learning meets excitement. Begin your TriviaTrek today!</p>
      <button className='btn-submit' onClick={() => navigate('/select-quizzes')}>Start</button>
    </div>
  )
}

export default Homepage