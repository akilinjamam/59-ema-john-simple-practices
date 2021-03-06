import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordOnBlur = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordOnBlur = (e) => {
        setConfirmpassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault()

        if (password !== confirmpassword) {
            setError('password didn,t matched')
            return
        }

        if (password.length < 6) {
            setError('password must have to be 6 or more charecter');
            return

        }

        createUserWithEmailAndPassword(email, password)


    }



    return (
        <div className='login'>
            <h2> Sign Up</h2>
            <div>
                <form onSubmit={handleCreateUser}>
                    <p>Email :</p>
                    <input onBlur={handleEmailOnBlur} type="email" name="" id="" placeholder='Type your E-mail' required />
                    <br /><br />
                    <p>Password :</p>
                    <input onBlur={handlePasswordOnBlur} type="password" name="" id="" placeholder='Type your password' required />
                    <br /><br />
                    <p style={{ color: 'red', fontSize: '10px' }}>{error}</p>
                    <p>Confirm Password :</p>
                    <input onBlur={handleConfirmPasswordOnBlur} type="password" name="" id="" placeholder='Type your password' required />
                    <br /><br />
                    <input className='submit' type="submit" value="Sign Up" />
                </form>

                <p style={{ width: '80%', fontSize: '12px', margin: 'auto', textAlign: 'center' }}>Already Have an account? <Link style={{ textDecoration: 'none', color: 'orange' }} to='/login'>Login</Link> </p>
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
                    <button style={{ padding: '10px', width: '100%', color: 'gray', cursor: 'pointer', border: 'none' }}>Continue with Google</button>
                </div>
                <br />
            </div>
        </div>
    );
};

export default SignUp;