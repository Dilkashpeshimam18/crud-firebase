import React from 'react';
import './App.css';
import Users from './components/users/Users';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Firebase crud</h1>
      <Routes>
        <Route path='/' element={<Users />} />
      </Routes>


    </div>
  );
}

export default App;
