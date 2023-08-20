import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "../hompage"


function Main() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  </Router>  
  )
}

export default Main