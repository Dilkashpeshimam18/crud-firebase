import React from 'react';
import './App.css';
import Users from './components/users/Users';
import { Routes, Route } from 'react-router-dom'
import Hobbies from './components/hobbies/Hobbies';
import Auth from './components/authentication/Auth';


function App() {

  return (
    <div className="App">
      <h1>Firebase crud</h1>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>


    </div>
  );
}

export default App;
