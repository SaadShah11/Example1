import React from 'react';
import './login.css';


function Login() {
  
  return (
    <div className="header">
      <header className="header">
      <div class="login">
    <h1>Login</h1>
    <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
    </form>
</div>
      </header>
    </div>
  );
}

export default Login;
