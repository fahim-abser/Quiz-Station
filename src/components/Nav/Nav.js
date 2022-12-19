import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='headername container'>
            <h2>Quiz-Station</h2>
            <nav className='header '>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Nav;