import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/setting' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
