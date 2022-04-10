import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <h2> Login</h2>
            <div>
                <form action="">
                    <p>Email :</p>
                    <input type="email" name="" id="" placeholder='Type your E-mail' required />
                    <br /><br />
                    <p>Password :</p>
                    <input type="password" name="" id="" placeholder='Type your password' required />
                    <br /><br />
                    <input className='submit' type="submit" value="Login" />
                </form>

                <p style={{ width: '80%', fontSize: '12px', margin: 'auto' }}>New to Ema John? <Link style={{ textDecoration: 'none', color: 'orange' }} to='/signup'>Create a new account</Link> </p>
                <br />
                <div style={{ display: 'flex', alignContent: 'center' }}>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center', margin: '0 ', }}>or</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>
                <br />
                <div>
                    <button style={{ padding: '10px', width: '100%', color: 'gray' }}>Continue with Google</button>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Login;