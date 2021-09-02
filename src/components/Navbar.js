import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-16 bg-yellow-500 text-gray-600 realtive shadow-sm font-serif font-bold text-2xl' role='navigation'>
            <Link to='/' className='pl-8'>
                CULTFIT
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className ="pr-8 font-mono text-xl md:block hidden ">
               <Link className='p-4' to ='/'>Start your Journey</Link>
               <Link className='p-4' to ='/'>Transform</Link>
               <Link className='p-4' to ='/'>Services</Link>
               <button
                    className='p-4 hover:bg-yellow-400 rounded-lg  realtive shadow-sm' to ='/'>LOGIN
                   </button>
                   
            </div>
        </nav>
    )
}

export default Navbar;
