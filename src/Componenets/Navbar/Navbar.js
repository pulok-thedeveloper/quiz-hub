import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../ideas.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between shadow-md shadow-slate-300 px-20 py-5'>
            <div className='logo-container'>
            <Link className='logo flex items-center' to="/">
                <img className='w-8' src={logo} alt="" />
                <h1 className='text-2xl font-bold ml-3'>Quiz Hub</h1>
            </Link>
            </div>
            <nav>
                <NavLink className={({isActive})=> isActive ? 'active': undefined} to="/">Topics</NavLink>
                <NavLink to="/stats">Statistics</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;