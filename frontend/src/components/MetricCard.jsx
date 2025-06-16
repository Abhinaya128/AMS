const MetricCard = ({ title, value, icon }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center shadow-sm flex flex-col items-center justify-center h-full">
        <div className="text-4xl mb-2">{icon}</div> {/* Metric icon */}
        <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">{title}</h3> {/* Metric title */}
        <p className="text-3xl font-bold text-blue-900 mt-1">{value}</p> {/* Metric value */}
    </div>
);
export default MetricCard