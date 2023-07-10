import React from 'react'
import MainHeader from './MainHeader'
import Link from 'react-router-dom/Link'

import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = (props) => {
    return (<>
        <SideDrawer className='main-navigation__drawer-nav'>
            <NavLinks />
        </SideDrawer>
        <MainHeader>
            <button className='main-navigation__menu-btn'>
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