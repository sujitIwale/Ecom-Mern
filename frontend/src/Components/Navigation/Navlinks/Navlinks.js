import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../../Search/Search';

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
        </ul>
    )
}

export default Navlinks;
