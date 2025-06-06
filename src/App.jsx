import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectShowcase from './pages/ProjectShowcase';
import NoPage from './pages/NoPage';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="projects/:projectCode" element={<ProjectShowcase />}/>
        <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
  
}

export default App
