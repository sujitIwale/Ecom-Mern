import React from 'react';
import Navlinks from './Navlinks/Navlinks';
import './Header.css';

const Header = () => {
    return (
        <header className='main-header'>
            <h2 className='app-title'>Ecom.com</h2>
            <div className='navlink'>
                <Navlinks />
            </div>
        </header>
    )
}

export default Header
