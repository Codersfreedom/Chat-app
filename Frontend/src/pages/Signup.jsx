import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import ReactLoading from 'react-loading'

const Signup = () => {
    const [input , setInput] = useState({
        fullname:'',
        username:'',
        password:'',
        cpassword:'',
        gender:'male'

    })
    const {signup,loading} = useSignup();

    const handleSubmit =async (e)=>{
        e.preventDefault();

        // signup hook here
        await signup(input)
        
    }


    return (
        <div>
            <div className="wrapper login">
                <div className="container">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>Welcome!</h2>
                            <p>Already have an account?<br />Login here</p>
                            <Link to='/login' className="btn">Login</Link>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                            <p>
                                    <label htmlFor='fullname'>Full Name<span>*</span></label>
                                    <input type="text" id='fullname' placeholder="Fullname" required 
                                    value={input.fullname}
                                    onChange={(e)=>setInput({...input,fullname:e.target.value})}
                                    />
                                </p>
                                <p>
                                    <label htmlFor='username'>Username<span>*</span></label>
                                    <input type="text" id='username' placeholder="Username" required 
                                    value={input.username}
                                    onChange={(e)=>setInput({...input,username:e.target.value})}
                                    />
                                </p>
                                <p>
                                    <label htmlFor='password'>Password<span>*</span></label>
                                    <input type="password" id='password' placeholder="Password" required 
                                    value={input.password}
                                    onChange={(e)=>setInput({...input,password:e.target.value})}
                                    />
                                </p>
                                <p>
                                    <label htmlFor='cpassword'>Confirm Password<span>*</span></label>
                                    <input type="password" id='cpassword' placeholder="Confirm Password" required 
                                    value={input.cpassword}
                                    onChange={(e)=>setInput({...input,cpassword:e.target.value})}
                                    />
                                </p>
                                <p id='gender'>
                                    <label htmlFor="gender-select">Gender<span>*</span></label>

                                    <select id="gender-select"  onChange={(e)=>setInput({...input,gender:e.target.value})}>
                                        
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>

                                </p>
                                <p>
                                    {loading && <ReactLoading type={"spin"} color={"#0d6efd"} height={20} width={20}  />}
                                    {!loading && <span>Already have an account? <Link to='/login'>Login</Link></span>}
                                    
                                    <input type="submit" value= 'SignUp' />
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
