// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { combineAnswers, extractQuestions } from '../../utils/functions';
import { MouseEvent, useState } from 'react';
import he from 'he';
import '../../App.css';
import './startQuiz.css';

function StartQuiz() {
  const quizzes = useSelector((state: RootState) => state.quizzesReducer.value);
  const questionsObject = extractQuestions(quizzes);
  // const navigate = useNavigate();
  const [answersState, setAnswersState] = useState(questionsObject);

  const handleSubmit = () => {
    console.log('clicked');
  };

  const handleChange = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    state: string
  ) => {
    const target = e.target as HTMLInputElement;
    console.log(target);
    setAnswersState({
      ...answersState,
      [state]: target.value,
    });
    console.log(answersState, target.value);
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
