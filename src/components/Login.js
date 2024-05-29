import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      navigate('/')
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  
  const register = async (e) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            navigate('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    
  }
  


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
          <button className='login-signinButton' onClick={signIn} type='submit'><strong>SIGN IN</strong></button>
        </form>
        <p>By signing in you agree to Organic Beauty Store's conditions of Use and Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className='login-registerButton' onClick={register} ><strong>REGISTER NEW ACCOUNT</strong></button>
      </div>
    </div>
  )
}

export default Login 