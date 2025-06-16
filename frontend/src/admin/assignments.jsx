import React, { useState } from 'react';
const AdminAssignments = () => {
    return (
        <SectionCard title="Asset Assignment & Return Handling">
            <p className="text-gray-600 mb-4">Centralized management for assigning assets to employees and processing returns.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                    Assign Asset
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                    Handle Asset Return
                </button>
            </div>
            <div className="mt-4 bg-gray-50 p-4 border border-gray-200 rounded-md">
                <p className="font-semibold text-gray-700">Assignment/Return Flow:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                    <li>Assignment Form: Select Asset (available), Select Employee, Set Dates, Notes.</li>
                    <li>Return Form: Select Asset (assigned), Set Return Date, Condition, Notes.</li>
                    <li>Lists of "Current Assignments" and "Return Requests" with approval/processing options.</li>
                </ul>
            </div>
        </SectionCard>
    );
};
export default AdminAssignments