import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import 'primeflex/primeflex.css'

import Home from './pages/Home';
import NewCandidate from './pages/NewCandidate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/new' element={<NewCandidate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
