const SectionCard = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">{title}</h2> {/* Section title */}
        {children} {/* Content within the section */}
    </div>
);
export default SectionCard