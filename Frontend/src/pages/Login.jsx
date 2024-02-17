import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div className="wrapper login">
        <div className="container">
            <div className="col-left">
                <div className="login-text">
                    <h2>Welcome!</h2>
                    <p>Create your account.<br/>For Free!</p>
                    <Link to="/signup" className="btn">Sign Up</Link>
                </div>
            </div>
            <div className="col-right">
                <div className="login-form">
                    <h2>Login</h2>
                    <form action="">
                        <p>
                            <label>Username<span>*</span></label>
                            <input type="text" placeholder="Username" required/>
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" placeholder="Password" required/>
                        </p>
                        <p>
                            <input type="submit" value="Sign In"/>
                        </p>
                        <p>
                            <a href="#">Forgot password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
