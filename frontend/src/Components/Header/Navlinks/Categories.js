import React from 'react';
import { NavLink } from 'react-router-dom';


const Categories = () => {
    return (
        <div>
            <li>
              <NavLink to='/products'>Categories</NavLink>
           </li> 
        </div>
    )
}

export default Categories
