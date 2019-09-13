import React from 'react';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Views from './components/Views';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> I am the App component </h1>
      <LogIn />
      <Register />
      <Views />
    </div>
  );
}

export default App;
