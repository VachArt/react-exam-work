import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='bg-gray-800 flex items-center justify-between h-16 text-white'>
        <div className='navbar-brand p-3 hover:text-pink-400'>
            
        </div>
        <ul className="flex items-center justify-between">
            <li className="px-3 hover:text-pink-400">
                <NavLink 
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li className="px-3 hover:text-pink-400">
                <NavLink 
                    to="/about"
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)