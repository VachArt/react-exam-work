import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='bg-gray-800'>
        <div className='navbar-brand p-2'>
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/about"
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)