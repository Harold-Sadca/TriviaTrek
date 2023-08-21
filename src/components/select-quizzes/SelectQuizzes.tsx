// import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { useState } from 'react';
import {
  categories,
  numOfQuestions,
  difficultyLevel,
  quizTypes,
} from '../../utils/variables';
import { TypeQuestion, TypeQuiz } from '../../utils/types';
import '../../App.css';
import './quizzes.css';
import { getQuizzes } from '../../utils/apiService';
import { useDispatch } from 'react-redux';
import { setQuizzes } from '../../redux/features/quizzesSlice';
import { combineAnswers } from '../../utils/functions';

const initialState: TypeQuiz = {
  amount: 0,
  category: 0,
  difficulty: '',
  type: '',
};

function Quizzes() {
  const [selected, setSelected] = useState<TypeQuiz>(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent<HTMLDivElement>, state: string) => {
    const target = e.target as HTMLInputElement;
    setSelected({
      ...selected,
      [state]: target.value,
    });
    console.log(selected, target.value);
  };

  const handleSubmit = async () => {
    const amount = selected.amount ? selected.amount : 10;
    const category = selected.category ? '&category=' + selected.category : '';
    const difficulty = selected.difficulty
      ? '&difficulty=' + selected.difficulty
      : '';
    const type = selected.type ? '&type=' + selected.type : '';
    const url = `https://opentdb.com/api.php?amount=${amount}${category}${difficulty}${type}`;
    let quizzes = await getQuizzes(url);
    quizzes = quizzes.map((quiz: TypeQuestion) => {
      return {
        ...quiz,
        all_answers: combineAnswers(
          quiz.correct_answer,
          quiz.incorrect_answers
        ),
      };
    });
    dispatch(setQuizzes(quizzes));
    navigate('/start-quiz');
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(selected);
  // };

  return (
    <div className='container'>
      <h1>Select Your Quiz</h1>
      <form className='quiz-form'>
        <div>
          <h2>Category</h2>
          <div
            className='options'
            onChange={(e) => {
              handleChange(e, 'category');
            }}
          >
            {Object.entries(categories).map((category) => {
              return (
                <div className='option' key={category[0]}>
                  <input
                    className='radio'
                    type='radio'
                    name={category[0]}
                    value={category[1]}
                    id={category[0]}
                    checked={selected.category == category[1]}
                  />
                  <label htmlFor={category[0]}>{category[0]}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Number Of Questions</h2>
          <div className='options' onChange={(e) => handleChange(e, 'amount')}>
            {Object.entries(numOfQuestions).map((numberOfQuestion) => {
              return (
                <div className='option' key={numberOfQuestion[0]}>
                  <input
                    className='radio'
                    type='radio'
                    name={numberOfQuestion[0]}
                    value={numberOfQuestion[1]}
                    id={numberOfQuestion[0]}
                    checked={selected.amount == numberOfQuestion[1]}
                  />
                  <label htmlFor={numberOfQuestion[0]}>
                    {numberOfQuestion[0]}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Difficulty Level</h2>
          <div
            className='options'
            onChange={(e) => handleChange(e, 'difficulty')}
          >
            {Object.entries(difficultyLevel).map((difficulty) => {
              return (
                <div className='option' key={difficulty[0]}>
                  <input
                    className='radio'
                    type='radio'
                    name={difficulty[0]}
                    value={difficulty[1]}
                    id={difficulty[0]}
                    checked={selected.difficulty == difficulty[1]}
                  />
                  <label htmlFor={difficulty[0]}>{difficulty[0]}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Type Of Quiz</h2>
          <div className='options' onChange={(e) => handleChange(e, 'type')}>
            {Object.entries(quizTypes).map((quizType) => {
              return (
                <div className='option' key={quizType[0]}>
                  <input
                    className='radio'
                    type='radio'
                    name={quizType[0]}
                    value={quizType[1]}
                    id={quizType[0]}
                    checked={selected.type == quizType[1]}
                  />
                  <label htmlFor={quizType[0]}>{quizType[0]}</label>
                </div>
              );
            })}
          </div>
        </div>
      </form>
      <button className='btn-submit' onClick={handleSubmit}>
        Start Quiz
      </button>
    </div>
  );
}

export default Quizzes;
