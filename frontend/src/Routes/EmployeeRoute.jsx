import SectionCard from "../components/SectionCard";
import EmployeeDashboard from "../pages/employee/Dashboard";
import EmployeeMyAssets from "../pages/employee/Myassets";
import EmployeeRequestAsset from "../pages/employee/RequestAsset";
import EmployeeRequests from "../pages/employee/Requests";

const EmployeeRoutes = ({ activeRoute, myAssets, myRequests }) => {
    switch (activeRoute) {
        case 'dashboard':
            return <EmployeeDashboard myAssets={myAssets} myRequests={myRequests} />;
        case 'my-assets':
            return <EmployeeMyAssets myAssets={myAssets} />;
        case 'my-requests':
            return <EmployeeRequests myRequests={myRequests} />;
        case 'request-asset': // A potential sub-route if needed
            return <EmployeeRequestAsset />;
        case 'help-support':
            return <SectionCard title="Help & Support"><p>Find answers to common questions or contact support here.</p></SectionCard>;
        default:
            return <EmployeeDashboard myAssets={myAssets} myRequests={myRequests} />;
    }
};
export default EmployeeRoutes