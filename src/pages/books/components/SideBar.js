import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Make sure to install react-icons package

import 'tailwindcss/tailwind.css';

const Sidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            <button
                className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
            >
                Dropdown
                <FaCaretDown className="fa-caret-down" />
            </button>
            <div className={`dropdown-container ${dropdownOpen ? 'block' : 'hidden'}`}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            <a href="#contact">Search</a>
        </div>
    );
};

export default Sidebar;
