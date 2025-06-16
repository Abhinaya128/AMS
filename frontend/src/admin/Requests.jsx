const AdminRequests = () => {
    return (
        <SectionCard title="Employee Requests">
            <p className="text-gray-600 mb-4">Admins can review and act on requests from employees for new assets or asset returns.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">New Asset Requests</h3>
                    <p className="text-yellow-700 text-sm">5 pending requests.</p>
                    <button className="mt-2 text-sm text-yellow-600 hover:underline">View All</button>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-md p-4">
                    <h3 className="font-semibold text-orange-800 mb-2">Asset Return Issues</h3>
                    <p className="text-orange-700 text-sm">3 pending returns/issues.</p>
                    <button className="mt-2 text-sm text-orange-600 hover:underline">View All</button>
                </div>
            </div>
        </SectionCard>
    );
};
export default AdminRequests