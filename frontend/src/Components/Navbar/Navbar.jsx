import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <section className='navbar'>
    <div className='nav-items-1'>
        <a href=''>Buy</a>
        <a href=''>Rent</a>
        <a href=''>Sell</a>
        <a href=''>Mortgage</a>
    </div>
    <div className='logo'>
        <img src='apartments-for-rent-logo.png' alt='logo' width={150}/>
    </div>
    <div className='nav-items-2'>
        <a href=''>Find Realtors</a>
        <a href=''>Blogs</a>
        <a href=''>Help</a>
        <a href=''>Contact</a>
        
    </div>
    <div className='nav-btn'>
    <button className='log-in'>Log in</button>
    <button className='sign-up'>Sign up</button>
    </div>
    </section>

    
    
    
    </>
  )
}

export default Navbar