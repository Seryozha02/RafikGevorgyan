import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar2 from './components/NavBar2';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import OnePointTwo from './pages/OnePointTwo';
import OnePointOne from './pages/OnePointOne';
import TwoPointOne from './pages/TwoPointOne';
import TwoPointTwo from './pages/TwoPointTwo';

function App() {
  return (
    <>
      <NavBar2 />
      <Routes>
          <Route path='/RafikGevorgyan' element={<Home />}></Route>
              <Route path='/onePointOneRF' element={<OnePointOne />}></Route>
              <Route path='/onePointTwoRF' element={<OnePointTwo />}></Route>
              <Route path='/twoPointOneRF' element={<TwoPointOne />}></Route>
              <Route path='/twoPointTwoRF' element={<TwoPointTwo />}></Route>
          <Route path='/aboutRF' element={<About />} />
          <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
