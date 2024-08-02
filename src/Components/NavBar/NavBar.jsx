import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../Assets/menu-icon.png';

const NavBar = () => {
    const [Sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);  

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 600 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu); 
    };

    return (
        <nav className={`container ${Sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='Hero container' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='Programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='About' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='Contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default NavBar;
