import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Films from './pages/Films/Films';
import Quiz from './pages/Quiz/Quiz';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/films:id' element={<Films />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
