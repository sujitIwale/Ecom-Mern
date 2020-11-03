import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../../UIElemets/BackDrop/BackDrop';
import Search from '../Search/Search';
import SubHeader from '../SubHeader/SubHeader';
import './Header.css';
import Navlinks from './Navlinks/Navlinks';
import SideDrawer from './SideDrawer/SideDrawer';

const Header = () => {
    const [isDraweropen, setisDraweropen] = useState(false);
    const openDrawer = () => {
        setisDraweropen(true)
    }
    const closeDrawer = () => {
        setisDraweropen(false)
    }
    return (
        <Fragment>
            {
                isDraweropen &&
                <SideDrawer className='drawer-nav' show={isDraweropen} onClick={closeDrawer}>
                    <nav>
                        <Navlinks />
                    </nav>
                </SideDrawer>
            }
            {isDraweropen && <BackDrop onClick={closeDrawer} />}
            <header className='main-header'>
                <i className='fa fa-bars fa-lg pointer menu-button' onClick={openDrawer}></i>
                <Link to='/'><h1 className='app-title white td-none center'>DreamKart</h1></Link>
                <div className='header__search-bar'><Search /></div>
                <nav className='navlinks'>
                    <Navlinks />
                </nav>
                <i className='fa fa-shopping-cart fa-lg pointer pa-r-2'></i>
            </header>
            <div className='subheader'>
                <SubHeader />
            </div>
        </Fragment>

    )
}

export default Header;
