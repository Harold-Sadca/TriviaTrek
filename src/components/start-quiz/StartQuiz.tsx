// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { combineAnswers } from '../../utils/functions';
import he from 'he';
import '../../App.css';
import './startQuiz.css';

function StartQuiz() {
  // const navigate = useNavigate();

  const quizzes = useSelector((state: RootState) => state.quizzesReducer.value);
  const handleSubmit = () => {
    console.log('clicked');
  };

  return (
    <div className='container quizzes-container'>
      <h1>Questions ({quizzes.length})</h1>
      <div className='questions'>
        {quizzes.map((quiz, idx) => {
          return (
            <div className='question' key={idx}>
              <p>{quiz.category}</p>
              <p>{he.decode(quiz.question)}</p>
              <p>{quiz.difficulty}</p>
              <p className='answers'>
                {quiz.correct_answer &&
                  combineAnswers(
                    quiz.correct_answer,
                    quiz.incorrect_answers
                  ).map((answer) => {
                    return <button className='btn-2'>{answer}</button>;
                  })}
              </p>
            </div>
          );
        })}
      </div>
      <button className='btn-submit' onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
