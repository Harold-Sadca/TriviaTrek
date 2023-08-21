import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../hompage/Homepage';
import Quizzes from '../select-quizzes/SelectQuizzes';
import StartQuiz from '../start-quiz/StartQuiz';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/select-quizzes' element={<Quizzes />} />
        <Route path='/start-quiz' element={<StartQuiz />} />
      </Routes>
    </Router>
  );
}

export default Main;
