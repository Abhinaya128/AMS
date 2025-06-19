import { useNavigate } from "react-router-dom";

const Navbar = ({ userRole, setUserRole }) => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Asset Management System</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm">Logged in as: <span className="font-semibold capitalize">{userRole}</span></span>
                    <select
                        className="bg-white text-blue-800 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                    >
                        <option value="admin">Admin View</option>
                        <option value="employee">Employee View</option>
                    </select>
                </div>
            </div>
        </header>
    );
};
export default Navbar