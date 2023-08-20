import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "../hompage/homepage"
import Quizzes from '../quizzes/quizzes';


function Main() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/select-quizzes' element={<Quizzes />} />
    </Routes>
  </Router>  
  )
}

export default Main