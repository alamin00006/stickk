import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo-commit.svg' 

const Navbar = () => {
    return (
    <div className=''>
<div class="navbar bg-base-100 ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className='my-2'>HOW IT WORKS</Link></li>
        <li><Link className='my-2'>ABOUT US</Link></li>
        <li><Link className='my-2'>HELP CENTER</Link></li>
        <li><Link className='btn btn-outline btn-warning rounded-full'>SIGN IN</Link></li>
        <li><Link className='btn bg-orange-500 rounded-full my-2'>Register</Link></li>
      </ul>
    </div>
    <img to="/" className='mx-16 my-10' src={Logo} alt=".."/>
  </div>
  <div class="navbar-end mx-16 my-10 hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link>HOW IT WORKS</Link></li>
      <li><Link>ABOUT US</Link></li>
      <li><Link>HELP CENTER</Link></li>
      <Link className='border-2 border-orange-500  rounded-full mx-5 p-2.5'>SIGN IN</Link>
    </ul>
    <Link class="btn bg-orange-500 rounded-full">Register</Link>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;