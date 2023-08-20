// import { useNavigate } from 'react-router-dom'
import '../../App.css'
import './quizzes.css'
import { categories } from '../../utils/variables'

function Quizzes() {

  const entries = Object.entries(categories)
  console.log(entries[0])
  return (
    <div className='container'>
      <h1>Select Your Quiz</h1>
      <div>
        <h2 className='categories'>Category</h2>
        <div className='category'>
          {Object.entries(categories).map((category) => {
            return (
            <div key={category[0]}>
                <input type="radio" name={category[0]} value={category[1]} id={category[0]} />
                <label htmlFor={category[0]}>{category[0]}</label>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Quizzes