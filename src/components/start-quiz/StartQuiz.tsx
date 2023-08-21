import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { combineAnswers, extractQuestions } from '../../utils/functions';
import { MouseEvent, useState } from 'react';
import { setQuizzes } from '../../redux/features/quizzesSlice';
import he from 'he';
import '../../App.css';
import './startQuiz.css';

function StartQuiz() {
  let quizzes = useSelector((state: RootState) => state.quizzesReducer.value);
  const questionsObject = extractQuestions(quizzes);
  const [answersState, setAnswersState] = useState(questionsObject);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    quizzes = quizzes.map((quiz) => {
      if (quiz.correct_answer === answersState[quiz.question]) {
        return {
          ...quiz,
          answered_correctly: true,
        };
      } else {
        return {
          ...quiz,
          answered_correctly: false,
        };
      }
    });
    dispatch(setQuizzes(quizzes));
    navigate('/check-answers');
  };

  const handleChange = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    question: string
  ) => {
    const target = e.target as HTMLInputElement;
    setAnswersState((prevState: object) => ({
      ...prevState,
      [question]: target.value,
    }));
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
                    return (
                      <button
                        className={`btn-2 ${
                          answersState[quiz.question] == answer
                            ? 'btn-2-clicked'
                            : ''
                        }`}
                        value={answer}
                        onClick={(e) => {
                          handleChange(e, quiz.question);
                        }}
                      >
                        {answer}
                      </button>
                    );
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
