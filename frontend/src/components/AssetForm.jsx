const AssetForm = () => {
    return (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add/Edit Asset Form</h3>
            <form className="space-y-4">
                <div>
                    <label htmlFor="assetName" className="block text-sm font-medium text-gray-700">Asset Name</label>
                    <input type="text" id="assetName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="e.g., MacBook Pro 16-inch" />
                </div>
                <div>
                    <label htmlFor="assetTag" className="block text-sm font-medium text-gray-700">Asset Tag</label>
                    <input type="text" id="assetTag" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="e.g., LPT-MBP-001" />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select id="category" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2">
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="office-equipment">Office Equipment</option>
                        <option value="software">Software</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" placeholder="Enter asset description..."></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105">Save Asset</button>
            </form>
        </div>
    );
};
export default AssetForm