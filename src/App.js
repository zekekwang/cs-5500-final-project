import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './Shopping.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import Shopping from './components/pages/Shopping';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import {startQuiz, loadQuestion} from './Shopping'


function App() {

  const [quizStarted, setQuizStarted] = useState(false);
    const [question, setQuestion] = useState('');

    const handleStartQuiz = () => {
        setQuizStarted(true);
        const questionText = loadQuestion();
        setQuestion(questionText);
    };

    const answerQuestion = (selectedAnswer) => {
        alert("You selected: " + selectedAnswer);
    };

  return (

    <>
      <Router>

        <Navbar />
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='coffee-basics' element={<CoffeeBasics />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='gallery' element={<Gallery />} />
          
        </Routes>




      </Router>
    </>




  );
}

export default App;