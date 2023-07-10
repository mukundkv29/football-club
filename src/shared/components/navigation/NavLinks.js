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
            <NavLink to='/'>News</NavLink>
        </li>
        <li>
            <NavLink to='/'>Fixtures</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks;