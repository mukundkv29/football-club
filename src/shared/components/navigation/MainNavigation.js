import React from 'react'
import MainHeader from './MainHeader'
import Link from 'react-router-dom/Link'

import './MainNavigation.css';

const MainNavigation = (props) => {
    return (
        <MainHeader>
            <button className='main-navigation__menu-btn'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
                <Link to='/' className='main-navigation__logo'>
                    <img alt='football-club' src='https://www.mancity.com/dist/images/logos/crest.svg'/>
                </Link>
            <nav>...</nav>
        </MainHeader>
    )
};

export default MainNavigation ;