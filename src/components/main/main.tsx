import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../hompage/Homepage';
import Quizzes from '../select-quizzes/SelectQuizzes';
import StartQuiz from '../start-quiz/StartQuiz';
import QuizSummary from '../quiz-summary/QuizSummary';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/select-quizzes' element={<Quizzes />} />
        <Route path='/start-quiz' element={<StartQuiz />} />
        <Route path='/quiz-summary' element={<QuizSummary />} />
      </Routes>
    </Router>
  );
}

export default Main;
