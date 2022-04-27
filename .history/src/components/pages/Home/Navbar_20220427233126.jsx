import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='bg-gray-800 flex items-center justify-around h-16 text-white mx-auto'>
        <div className='navbar-brand p-2'>
            Note App
        </div>
        <ul className="flex items-center justify-between">
            <li className="px-2 hover:">
                <NavLink 
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li className="px-2">
                <NavLink 
                    to="/about"
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)