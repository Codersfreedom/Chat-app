import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useLogin();
    const handleLogin = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    return (
        <div>
            <div className="wrapper login">
                <div className="container">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>Welcome!</h2>
                            <p>Create your account.<br />For Free!</p>
                            <Link to="/signup" className="btn">Sign Up</Link>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <p>
                                    <label>Username<span>*</span></label>
                                    <input type="text" placeholder="Username" required
                                        value={username}
                                        onChange={(e) => { setUsername(e.target.value) }}
                                    />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <input type="submit" value="Sign In" />
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
