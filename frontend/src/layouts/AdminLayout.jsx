import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminRoutes from '../Routes/AdminRoutes';


const AdminLayout = ({ userRole, setUserRole }) => {
    const [activeAdminRoute, setActiveAdminRoute] = useState('dashboard'); // Default admin route

    // Navigation items for the Admin sidebar
    const adminNavItems = [
        { icon: '📊', text: 'Dashboard', route: 'dashboard' },
        { icon: '💻', text: 'Assets', route: 'assets', submenu: ['All Assets', 'Add New Asset', 'Categories', 'Locations', 'Maintenance'] },
        { icon: '👥', text: 'Employees', route: 'employees', submenu: ['All Employees', 'Add New Employee', 'Departments'] },
        { icon: '🤝', text: 'Assignments', route: 'assignments', submenu: ['Current', 'History', 'Pending'] },
        { icon: '📬', text: 'Requests', route: 'requests', submenu: ['New Asset Requests', 'Return Requests'] },
        { icon: '📈', text: 'Reports', route: 'reports', submenu: ['Inventory', 'Utilization', 'Maintenance', 'Employee Assets'] },
        { icon: '⚙️', text: 'Settings', route: 'settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 font-inter antialiased flex flex-col">
            <Navbar userRole={userRole} setUserRole={setUserRole} />

            
            <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 flex-grow">
                 <Sidebar title="Admin Navigation" navItems={adminNavItems} setActiveRoute={setActiveAdminRoute} />

                {/* Content area where different admin pages are rendered */}
                 <div className="lg:w-3/4 flex-grow">
                    <AdminRoutes activeRoute={activeAdminRoute} />
                </div> 
            </div>

            {/* Footer component */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-8">
                <p>&copy; {new Date().getFullYear()} Asset Management System. All rights reserved.</p>
            </footer>
        </div>
    );
}
export default AdminLayout;