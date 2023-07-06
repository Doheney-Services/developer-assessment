import React from 'react';
import { Route, Routes } from 'react-router-dom'  
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupPage from './pages/signUp/signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <SignupPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ <Dashboard/>} />
      </Routes>
    </>
   
      
  );
};
export default App;
