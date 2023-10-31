// src/SignIn.tsx
import React, { useState } from 'react';
import './SignIn.css'; 

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API requests, validation, etc.)
  };

  return (
    <div className="grey">
      

    <div className="sign-in-container">
      <img className="googleimg" src="data:image/png;base64,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" alt="google"></img>
      <p className="bigger">Sign In</p><br />
      <p className="go_up">to continue to gmail</p>

      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <input
            className='box'
            type="email"
            placeholder='Email or phone'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <a className="forgotemail" href="ForgotEmail.html">Forgot email?</a>
        <div >
          <p className="smaller">Not your computer? Use Guest mode to sign in privately.</p>
          <a className="learnmore" href="learnmore">Learn more</a>
        </div>
        <button className="button">Next</button>
        <a className="cacc" href="learnmore">Create account</a>
        </form>

      <div className="nav-links">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div>
    </div>
    
    </div>
  );
};

export default SignIn;
