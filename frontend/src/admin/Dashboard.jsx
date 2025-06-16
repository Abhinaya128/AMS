import MetricCard from "../components/MetricCard";
import SectionCard from "../components/SectionCard";

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Admin Dashboard Overview Section */}
            <SectionCard title="Admin Dashboard Overview">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard title="Total Assets" value="500" icon="📦" />
                    <MetricCard title="Assets in Stock" value="150" icon="✅" />
                    <MetricCard title="Assets Assigned" value="350" icon="➡️" />
                    <MetricCard title="Pending Requests" value="12" icon="⏳" />
                </div>
            </SectionCard>

            {/* Manage Assets Section (CRUD operations) */}
            <SectionCard title="Manage Assets (CRUD)">
                <p className="text-gray-600 mb-4">Here, admins can perform CRUD operations on assets. This section would typically contain a searchable table of all assets with 'Add New', 'Edit', 'Delete', and 'Assign' actions.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex justify-between items-center">
                    <span className="text-blue-700 font-medium">Example: Asset List Table...</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                        Add New Asset
                    </button>
                </div>
                {/* Placeholder for a detailed asset table/list */}
                <div className="mt-4 bg-gray-50 p-4 border border-gray-200 rounded-md">
                    <p className="font-semibold text-gray-700">Asset Table Mockup:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                        <li>Laptop (LPT001) - Assigned to John Doe <span className="float-right text-xs">[Edit | Delete | Return]</span></li>
                        <li>Monitor (MON005) - Available <span className="float-right text-xs">[Edit | Delete | Assign]</span></li>
                        <li>Keyboard (KBD010) - Under Maintenance <span className="float-right text-xs">[Edit | Delete]</span></li>
                    </ul>
                </div>
            </SectionCard>

            {/* Manage Employees Section (CRUD operations) */}
            <SectionCard title="Manage Employees (CRUD)">
                <p className="text-gray-600 mb-4">Admin can manage employee details, add new employees, and view their assigned assets.</p>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex justify-between items-center">
                    <span className="text-green-700 font-medium">Example: Employee List Table...</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                        Add New Employee
                    </button>
                </div>
                {/* Placeholder for a detailed employee table/list */}
                <div className="mt-4 bg-gray-50 p-4 border border-gray-200 rounded-md">
                    <p className="font-semibold text-gray-700">Employee Table Mockup:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                        <li>John Doe (EMP001) - 3 Assets <span className="float-right text-xs">[Edit | Delete | View Assets]</span></li>
                        <li>Jane Smith (EMP002) - 1 Asset <span className="float-right text-xs">[Edit | Delete | View Assets]</span></li>
                    </ul>
                </div>
            </SectionCard>
        </div>
    );
};

export default AdminDashboard
