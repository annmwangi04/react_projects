import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='#home' className='navbar-link'>Home</a>
                </li>
                <li className='navbar-item'>
                    <a href='#about' className='navbar-link'>About</a>
                </li>
                <li className='navbar-item'>
                    <a href='#services' className='navbar-link'>Services</a>
                </li>
                <li className='navbar-item'>
                    <a href='#portfolio' className='navbar-link'>Portfolio</a>
                </li>
                <li className='navbar-item'>
                    <a href='#bulk-sms' className='navbar-link'>Bulk Sms</a>
                </li>
                <li className='navbar-item'>
                    <a href='#contact' className='navbar-link'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;