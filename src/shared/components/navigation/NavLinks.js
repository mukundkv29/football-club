import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/'>Players</NavLink>
        </li>
        <li>
            <NavLink to='/news'>News</NavLink>
        </li>
        <li>
            <NavLink to='/fixtures'>Fixtures</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks;