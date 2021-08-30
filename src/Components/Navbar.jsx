import React, { useState } from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="#" alt="Logo" />
            </div>
            <div className="navbar-content">
                <ul>
                    <li><a href=".home">Home</a></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
