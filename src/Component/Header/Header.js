import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {

        signOut(auth)
    }
    return (
        <nav className='header'>

            <img src={logo} alt='' />
            <div>

                <Link to="/shop">Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/review'>Review</Link>
                <Link to='/manage'>Manage</Link>
                <Link to='/inventory'>Inventory</Link>
                {
                    user ? <button onClick={handleSignOut}>SignOut</button> : <Link to='/login'>Login</Link>
                }







            </div>
        </nav>
    );
};

export default Header;