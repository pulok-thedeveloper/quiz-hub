import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import logo from '../../ideas.png';
import './Navbar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex items-center relative justify-between shadow-md shadow-slate-300 px-10 md:px-20 py-5'>
            <div className='logo-container'>
                <Link className='logo flex items-center' to="/">
                    <img className='w-8' src={logo} alt="" />
                    <h1 className='text-2xl font-bold m-0 ml-3'>Quiz Hub</h1>
                </Link>
            </div>
            <div onClick={()=> setOpen(!open)} className="md:hidden h-6 w-6 text-yellow-400">
            {
                open ? 
                <XMarkIcon />
                : <Bars3Icon/>
            }
            </div>
            
            <nav className={`flex w-full md:w-auto z-10 flex-col md:flex-row duration-500 absolute left-0 md:static ${open ? 'top-20 bg-slate-700 text-white py-5' :'top-[-180px]' }`}>
                <NavLink className={({ isActive }) => isActive ? 'active': undefined} to="/home">Home</NavLink>
                <NavLink to="/topics">Topics</NavLink>
                <NavLink to="/stats">Statistics</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;