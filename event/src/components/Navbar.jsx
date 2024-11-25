import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='#agenda' className='navbar-link'>Agenda</a>
                </li>
                <li className='navbar-item'>
                    <a href='#speakers' className='navbar-link'>Speakers</a>
                </li>
                <li className='navbar-item'>
                    <a href='#registration' className='navbar-link'>Registration</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
