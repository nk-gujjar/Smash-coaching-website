import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Welcomepage} from './pages/Welcomepage';
import LoginAndSignup from './pages/LoginandSignup';
import {Homepage }from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login" element={<LoginAndSignup />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
