import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div>
            <nav className='menu'>
                <ul className='menu-list'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Vacancies</NavLink>
                    <NavLink to={'/candidates'} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Candidates</NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
