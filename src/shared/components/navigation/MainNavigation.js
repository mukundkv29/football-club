import React, { useState } from 'react'
import MainHeader from './MainHeader'
import Link from 'react-router-dom/Link'

import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false);
    const openDrawHandler = () =>{
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler = () =>{
        setDrawerIsOpen(false);
    }
    return (<>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        {drawerIsOpen && <SideDrawer className='main-navigation__drawer-nav'>
            <NavLinks />
        </SideDrawer>}
        <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openDrawHandler}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
                <Link to='/' className='main-navigation__logo'>
                    <img alt='football-club' src='https://www.mancity.com/dist/images/logos/crest.svg'/>
                </Link>
            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
        </MainHeader>
    </>
    )
};

export default MainNavigation ;