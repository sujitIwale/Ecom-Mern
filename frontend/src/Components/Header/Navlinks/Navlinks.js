import React from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';
import Search from './Search';

const Navlinks = () => {
    return (
        <ul className='nav-links'>
           <li>
              <Search />
           </li>
               <li>
                  <div><Categories /></div>
               </li> 
               <li className='primary-orange button ps-right'>
                  <NavLink to='/login'>Login</NavLink>
               </li> 
               <li className='primary-orange button ps-right'>
                  <NavLink to='/register'>Register</NavLink>
               </li> 
        </ul>
    )
}

export default Navlinks;
