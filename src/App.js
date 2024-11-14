import './App.css';
import Candidates from './components/candidates/Candidates';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Vacancies from './components/vacancies/Vacancies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vacancy from './components/vacancies/vacancy/Vacancy';



function App() {
  return (
    <Router>
    <div className="app">
      <header className='header'><Header/></header>
      <aside  className='sideBar'><SideBar/></aside>
      <main className='main'>
          <Routes>
            <Route path="/" element={<Vacancies/>} />
            <Route path="/candidates" element={<Candidates/>} />
            <Route path="/vacancies/:id" element={<Vacancy/>} />
          </Routes>
      </main>
      <footer className='footer'>dfsf</footer>
    </div>
    </Router>
  );
}

export default App;
