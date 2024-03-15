import React, { useState } from 'react';
import './LoginandSignup.css';
import login_img from '../Assets/login.webp';
import signup_img from '../Assets/register.png';

const LoginForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" method="post" />
          </form>
          <form action="#" className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile"></i>
              <input type="text" placeholder="Mobile" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
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
