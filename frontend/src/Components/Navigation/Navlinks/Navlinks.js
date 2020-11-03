import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
    return (
        <ul className='nav-links'>
            <li>
                <Link>Categories</Link>
            </li>
            <li className='button primary-orange'>
                <Link to='/login'>Login</Link>
            </li>
            <li className='button primary-orange'>
                <Link to='/register'>Register</Link>
            </li>
            {/* <li>
               <i className='fa fa-user-circle size-lg pointer'></i>
           </li> */}
        </ul>
    )
}

export default Navlinks;
