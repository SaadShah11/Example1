import React from 'react';
import './signup.css';


function Signup() {
  return (
    <div className="header">
      <header className="header">
      <div class="login">
    <h1>SignUp</h1>
    <form >
        <input type="text" name="u" placeholder="Full name" required="required" />
        <input type="text" name="num" placeholder="Contact Number" required="required" />
        <input type="text" name="email" placeholder="E-mail" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
    </form>
</div>
      </header>
    </div>
  );
}

export default Signup;
