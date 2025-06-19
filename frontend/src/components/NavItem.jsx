import React, { useState } from 'react';
const NavItem = ({ icon, text, submenu, onClick }) => {
    // State to control the visibility of the submenu
    const [isOpen, setIsOpen] = useState(false);

    // Handles click events on the navigation item
    const handleClick = () => {
        if (submenu) {
            setIsOpen(!isOpen); 
        }
        if (onClick) {
            onClick(); /
        }
    };

    return (
        <li>
            <button
                className="flex items-center w-full text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600 py-2 px-3 rounded-md transition duration-150 ease-in-out"
                onClick={handleClick}
            >
                <span className="mr-3 text-lg">{icon}</span> {/* Icon for the navigation item */}
                <span className="flex-grow">{text}</span> {/* Text for the navigation item */}
                {submenu && (
                    <span className="text-xs ml-auto">
                        {isOpen ? '▲' : '▼'} {/* Arrow indicator for submenu */}
                    </span>
                )}
            </button>
            {submenu && isOpen && (
                <ul className="ml-8 mt-1 space-y-1 text-sm bg-gray-50 rounded-md py-2 px-3 shadow-inner">
                    {submenu.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="block text-gray-600 hover:text-blue-500 py-1 transition duration-150 ease-in-out">
                                {item} 
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
export default NavItem