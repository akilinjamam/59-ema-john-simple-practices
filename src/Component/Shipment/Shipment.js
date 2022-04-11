import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()



    const handleNameOnBlur = (e) => {
        setName(e.target.value)
    }




    const handleAdressOnBlur = (e) => {
        setAdress(e.target.value)
    }
    const handleNumberOnBlur = (e) => {
        setNumber(e.target.value)
    }



    const handleCreateUser = event => {
        event.preventDefault()

        const shipping = { name, email, adress, number };
        console.log(shipping)
    }



    return (
        <div className='login'>
            <h2> Shipment</h2>
            <div>
                <form onSubmit={handleCreateUser}>
                    <p>Name :</p>
                    <input onBlur={handleNameOnBlur} type="text" name="" id="" placeholder='Type your name' required />
                    <br /><br />

                    <p>Email :</p>
                    <input value={user?.email} readOnly type="text" name="" id="" placeholder='Type your Email' required />
                    <br /><br />
                    <p>Adress:</p>
                    <input onBlur={handleAdressOnBlur} type="text" name="" id="" placeholder='Type your adress' required />
                    <br /><br />
                    <p style={{ color: 'red', fontSize: '10px' }}>{error}</p>
                    <p>Number:</p>
                    <input onBlur={handleNumberOnBlur} type="text" name="" id="" placeholder='Type your password' required />
                    <br /><br />
                    <input className='submit' type="submit" value="Shipment" />
                </form>




                <br />
            </div>
        </div>
    );
};

export default Shipment;