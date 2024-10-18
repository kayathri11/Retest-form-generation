// App.js  
import React from 'react';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import LoginSignupForm from './LoginSignupForm';  
import Dashboard from './Dashboard';  
import './styles.css';

  
const App = () => {  
  return (  
   <BrowserRouter>  
    <Routes>  
      <Route path="/" element={<LoginSignupForm />} />  
      <Route path="/dashboard" element={<Dashboard />} />  
    </Routes>  
   </BrowserRouter>  
  );  
};  
  
export default App;
