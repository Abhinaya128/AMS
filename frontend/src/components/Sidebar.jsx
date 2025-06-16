
//import React, { useState } from 'react';
import NavItem from "./NavItem";
const Sidebar = ({ title, navItems, setActiveRoute }) => {
    return (
        <nav className="lg:w-1/4 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">{title}</h2>
            <ul className="space-y-2">
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        submenu={item.submenu}
                        onClick={() => setActiveRoute(item.route)} // Callback to change the active route in the parent layout
                    />
                ))}
            </ul>
        </nav>
    );
};
export default Sidebar