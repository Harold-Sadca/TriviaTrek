import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import he from 'he';
import '../../App.css';
import './quizSummary.css';
import { useNavigate } from 'react-router-dom';

function QuizSummary() {
  const quizzes = useSelector((state: RootState) => state.quizzesReducer.value);
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Summary</h1>
      <div>
        {quizzes.map((quiz, idx) => {
          return (
            <div
              className={`question summary ${
                quiz.answered_correctly ? 'correct' : 'wrong'
              }`}
              key={idx}
            >
              <p>{he.decode(quiz.question)}</p>
              <p>Correct Answer : {he.decode(quiz.correct_answer)}</p>
            </div>
          );
        })}
      </div>
      <button className='btn-submit' onClick={() => navigate('/home')}>
        Start Again
      </button>
    </div>
  );
}

export default QuizSummary;
