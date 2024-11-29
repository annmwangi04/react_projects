import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='#home' className='navbar-link'>Home</a>
                </li>
                <li className='navbar-item'>
                    <a href='#searchBooks' className='navbar-link'>SearchBooks</a>
                </li>
                <li className='navbar-item'>
                    <a href='#Readinglist' className='navbar-link'>Readinglist</a>
                </li>
                <li className='navbar-item'>
                    <a href='#contact' className='navbar-link'>Contact</a>
                </li>
               
            </ul>
        </nav>
    );
}

export default Navbar;