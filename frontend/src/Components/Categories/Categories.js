import React from 'react';
import { NavLink } from 'react-router-dom';


const Categories = () => {
    return (
        <div><NavLink to='/products'>
            <p className='td-none white categories'>
              Categories
           </p> </NavLink>
        </div>
    )
}

export default Categories
