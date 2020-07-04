import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.css';

function App() {

  const [playType, setPlayType] = useState('')

  return (
    <div className="background-screen">
      <Router>
        <Routes playType={playType} setPlayType={setPlayType} />
      </Router>
    </div>
  );
}

export default App;
