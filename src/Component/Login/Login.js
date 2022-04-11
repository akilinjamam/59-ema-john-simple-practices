import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleEmailBlur = (event) => {

        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {

        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleLoginUser = (event) => {

        event.preventDefault()
        signInWithEmailAndPassword(email, password)


    }

    return (
        <div className='login'>
            <h2> Login</h2>
            <div>
                <form onSubmit={handleLoginUser} >
                    <p>Email :</p>
                    <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Type your E-mail' required />
                    <br /><br />
                    <p>Password :</p>
                    <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Type your password' required />
                    <br /><br />
                    {error?.message}
                    {
                        loading && <p>Loading...</p>
                    }
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