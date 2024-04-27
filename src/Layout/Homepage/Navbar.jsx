import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItem = <>
        <li className='trirong-font font-medium'><NavLink to='/'>Home</NavLink></li>
        <li className='trirong-font '><NavLink to='/all-list'>All Art & Craft List</NavLink></li>
        <li className='trirong-font '><NavLink to='/add-new'>Add New Craft</NavLink></li>
        <li className='trirong-font '><NavLink to='/my-list'>My Art & Craft List</NavLink></li>

    </>

    return (
        <div className="navbar bg-[#faf7f2] fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    </ul>
                </div>
                <Link to='/' className="text-2xl outfit-medium font-bold text-[#b18b5e]">Esha's Craft</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to='/login'><button className='bg-[#b18b5e] text-white outfit-font px-3 py-2' >Login</button></Link>
                <Link to='/register'><button className='bg-[#b18b5e] text-white outfit-font px-3 py-2' >Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;