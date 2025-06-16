import AdminAssets from "../admin/assets";
import AdminAssignments from "../admin/assignments";
import AdminDashboard from "../admin/Dashboard";
import AdminEmployees from "../admin/Employees";
import AdminRequests from "../admin/Requests";
import SectionCard from "../components/SectionCard";

const AdminRoutes = ({ activeRoute }) => {
    switch (activeRoute) {
        case 'dashboard':
            return <AdminDashboard />;
        case 'assets':
            return <AdminAssets />;
        case 'employees':
            return <AdminEmployees />;
        case 'assignments':
            return <AdminAssignments />;
        case 'requests':
            return <AdminRequests />;
        case 'reports':
            return <SectionCard title="Admin Reports"><p>Detailed reports for inventory, utilization, and maintenance.</p></SectionCard>;
        case 'settings':
            return <SectionCard title="Admin Settings"><p>Application settings and configurations.</p></SectionCard>;
        default:
            return <AdminDashboard />;
    }
};
export default AdminRoutes