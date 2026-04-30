"use client";

import { useEffect } from 'react';

const GlobalUtilitiesPage = () => {
    useEffect(() => {
        document.title = "Utilities";
    }, []);

    const sections = [
        {
            title: "Data Loading",
            items: ["Load Items", "Update Items", "Load Stock", "Load Customers", "Load Suppliers"]
        },
        {
            title: "System Setup",
            items: ["Load Chart of Account", "Load GL Interface", "Load Zones", "Remove Items", "PR Old to New"]
        },
        {
            title: "Maintenance",
            items: ["Miscellaneous", "Miscellaneous-Post", "Correct Tax", "Auto Allocate-AR", "Correct IMTRN-YW"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-center text-2xl font-bold text-blue-700 mb-12 uppercase tracking-wide border-b-2 border-blue-100 pb-4'>
                System Utilities & Data Tools
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all">
                        <h2 className="text-red-600 font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-red-600 rounded-full"></span>
                            {section.title}
                        </h2>
                        <ul className="space-y-4">
                            {section.items.map((item, iIdx) => (
                                <li key={iIdx}>
                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm underline decoration-blue-200 hover:decoration-blue-500 transition-all">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-red-50 p-8 rounded-2xl border border-red-100 max-w-2xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-full text-white font-bold text-xl">!</div>
                    <div>
                        <h3 className="text-red-800 font-bold">Caution</h3>
                        <p className="text-red-700 text-sm">
                            These utilities perform bulk data operations. Ensure you have a database backup before proceeding with any "Load" or "Remove" operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalUtilitiesPage;
