import React, { useState } from 'react';
import './LoginandSignup.css';
import login_img from '../Assets/login.webp';
import signup_img from '../Assets/register.png';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import firebaseConfig from '../Admin/Firebasekeys.js'; // Import your Firebase configuration
import { useNavigate } from "react-router-dom"; // Import useNavigate


// Initialize Firebase app and Realtime Database instance
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app); // Get a reference to the database
// const auth = getAuth(app); // Get a reference to the authentication service

const LoginForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavi

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password using Firebase Auth
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;

    const response =  fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile, password }),
      });

      const result = await response.json();
      if(result.status === true){
        console.log('User signed up and details stored:', result.result.name);
        navigate('/Welcomepage');
      } else {
        console.error('Sign up error:');
      }
        // You can perform further actions here like redirecting to another page, showing a success message, etc.{
      
      // Store user details in Firebase Realtime Database
      // await set(ref(database, `users/${user.uid}`), {
      //   name,
      //   email,
      //   mobile,
      // });

      // console.log('User signed up and details stored:', user);
      // You can perform further actions here like redirecting to another page, showing a success message, etc.
    } catch (error) {
      // Handle errors here
      console.error('Sign up error:');
      // You can display error messages to the user or handle them as needed
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in user with email and password using Firebase Auth
      // const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;

     const response= fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const result = await response.json();
      if(result.status === true){
        console.log('User signed in:', result.result.name);
        navigate('/Homepage');
      } else {
        console.error('Sign in error:',  result.message);
      }
      // console.log('User signed in:', user);
      // Redirect to Homepage after successful sign-in
      
    } catch (error) {
      // Handle errors here
      console.error('Sign in error:', error.code, error.message);
      // You can display error messages to the user or handle them as needed
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignInSubmit} className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" method="post" />
          </form>
          <form onSubmit={handleSignUpSubmit} className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile"></i>
              <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="btn" value="Sign up" method="post" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? 'sign-up-mode' : ''}`}>
          <div className="content">
            <h3>New here ?</h3>
            <p>Register for Join the Best Online coaching</p>
            <button className="toggle-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={login_img} className="image" alt="login image" />
        </div>
        <div className={`panel right-panel ${isSignUpMode ? 'sign-up-mode' : ''}`}>
          <div className="content">
            <h3>One of us ?</h3>
            <p>Login for more details</p>
            <button className="toggle-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={signup_img} className="image" alt="register image" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
