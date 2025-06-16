import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import EmployeeRoutes from '../Routes/EmployeeRoute';
const EmployeeLayout = ({ userRole, setUserRole }) => {
    // State to manage the active route within the Employee portal.
    // This simulates routing without a dedicated router library.
    const [activeEmployeeRoute, setActiveEmployeeRoute] = useState('dashboard'); // Default employee route

    // Mock data for employee's assets and requests.
    // In a real application, this data would come from an API or a global state management solution.
    const myAssets = [
        { id: 'LPT001', name: 'Lenovo ThinkPad X1', category: 'Laptop', assignedDate: '2023-01-15' },
        { id: 'MON003', name: 'Dell UltraSharp 27"', category: 'Monitor', assignedDate: '2023-02-20' },
    ];

    const myRequests = [
        { id: 'REQ001', type: 'New Asset', item: 'Ergonomic Keyboard', status: 'Pending', date: '2024-05-10' },
        { id: 'REQ002', type: 'Return', item: 'Old Mouse', status: 'Approved', date: '2024-04-22' },
    ];

    // Navigation items for the Employee sidebar
    const employeeNavItems = [
        { icon: '🏠', text: 'Dashboard', route: 'dashboard' },
        { icon: '💼', text: 'My Assets', route: 'my-assets' },
        { icon: '📝', text: 'My Requests', route: 'my-requests', submenu: ['New Asset Requests', 'Return Issues'] },
        { icon: '❓', text: 'Help & Support', route: 'help-support' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 font-inter antialiased flex flex-col">
            <Navbar userRole={userRole} setUserRole={setUserRole} /> 

            {/* Main content area with responsive layout */}
            <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 flex-grow">
               
                 <Sidebar title="Employee Navigation" navItems={employeeNavItems} setActiveRoute={setActiveEmployeeRoute} />

                {/* Content area where different employee pages are rendered */}
                <div className="lg:w-3/4 flex-grow">
                    <EmployeeRoutes
                        activeRoute={activeEmployeeRoute}
                        myAssets={myAssets}
                        myRequests={myRequests}
                    />
                </div>
            </div>

            {/* Footer component */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-8">
                <p>&copy; {new Date().getFullYear()} Asset Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};
export default EmployeeLayout
