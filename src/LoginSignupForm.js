import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';  
  
const LoginSignupForm = () => {  

  const [regno, setRegno] = useState('');  
  const [password, setPassword] = useState('');  
  const [name, setName] = useState('');  
  const [isLogin, setIsLogin] = useState(true);  
  const [error, setError] = useState('');  
  const navigate = useNavigate();  
  
  

  const login = (regno, password) => {  
   if (regno === '' || password === '') {  
    setError('Please fill in all fields');  
    return;  
   }  
   var userData = JSON.parse(localStorage.getItem(regno));  
   if (userData && userData.password === password) {  
    localStorage.setItem("loggedInUser", JSON.stringify(userData));  
    localStorage.setItem("loggedInRegno", regno);  
    navigate('/dashboard');  
   } else {  
    setError('Invalid Register Number or password');  
   }  
  };  
  
  const signUp = (regno, name, password) => {  
   if (regno === '' || name === '' || password === '') {  
    setError('Please fill in all fields');  
    return;  
   }  
   var userData = { regno, name, password };  
   localStorage.setItem(regno, JSON.stringify(userData));  
   alert('Signup successful!');  
  };  
  
  const handleLogin = () => {  
   login(regno, password);  
  };  
  
  const handleSignup = () => {  
   signUp(regno, name, password);  
  };  
  
  return (  
   <div className="login-container">  
    {isLogin ? (  
      <form className="login-form">  
       <input type="text" value={regno} onChange={(e) => setRegno(e.target.value)} placeholder="Register Number" />  
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />  
       {error && <p style={{ color: 'red' }}>{error}</p>}  
       <button onClick={handleLogin}>Login</button>  
       <p>  
        Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Sign up</a>  
       </p>  
      </form>  
    ) : (  
      <form className="signup-form">  
       <input type="text" value={regno} onChange={(e) => setRegno(e.target.value)} placeholder="Register Number" />  
       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />  
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />  
       {error && <p style={{ color: 'red' }}>{error}</p>}  
       <button onClick={handleSignup}>Sign up</button>  
       <p>  
        Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a>  
       </p>  
      </form>  
    )}  
   </div>  
  );  
};  
  
export default LoginSignupForm;
