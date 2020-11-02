import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../../UIElemets/BackDrop/BackDrop';
import Search from '../Search/Search';
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
                <i className='fa fa-bars fa-2x pointer menu-button' onClick={openDrawer}></i>
                    <Link to='/'><h1 className='app-title white td-none'>DreamKart</h1></Link>
                    <div><Search /></div>
                <nav className='navlinks'>
                    <Navlinks />
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;
