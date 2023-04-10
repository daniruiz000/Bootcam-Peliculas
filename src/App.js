import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import GamePage from './pages/GamePage/GamePage';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/items/:id/:type' element={<ItemDetail />}></Route>
        <Route path='/quiz' element={<GamePage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
