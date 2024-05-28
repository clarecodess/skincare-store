import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='login'>
      <Link to='/'>
      <img className='login-logo' src='logo.png'/>
      </Link>

      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <h5>EMAIL</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>PASSWORD</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='login-signinButton'><strong>SIGN IN</strong></button>
        </form>
        <p>By signing in you agree to Organic Beauty Store's conditions of Use and Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className='login-registerButton'><strong>REGISTER NEW ACCOUNT</strong></button>
      </div>
    </div>
  )
}

export default Login 