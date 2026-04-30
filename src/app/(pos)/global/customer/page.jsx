"use client";

import { useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import GlobalCustomerLayout from '@/components/GlobalCustomerLayout';
import { FaChevronLeft, FaChevronRight, FaPlus, FaSave, FaTrash, FaSearch } from 'react-icons/fa';

const GlobalCustomerPage = () => {
    useEffect(() => {
        document.title = "Customer Master Registry - POS";
    }, []);

    const customers = [
        { id: 'CUS-000001', name: 'Walk in Customer', short: 'WIC', group: 'Retail' },
        { id: 'CUS-000002', name: 'Corporate Client A', short: 'CCA', group: 'Corporate' },
        { id: 'CUS-000003', name: 'Franchise Partner B', short: 'FPB', group: 'Franchise' },
        { id: 'CUS-000004', name: 'Retail Customer C', short: 'RCC', group: 'Retail' },
        { id: 'CUS-000005', name: 'Wholesale Dist', short: 'WHD', group: 'Wholesale' },
        { id: 'CUS-000006', name: 'Local Shop D', short: 'LSD', group: 'Retail' },
    ];

    const fields = [
        { label: "Customer Number", search: true, required: true },
        { label: "Short Name", search: true },
        { label: "Name", search: true, required: true },
        { label: "Address 1" },
        { label: "Address 2" },
        { label: "City" },
        { label: "State/Province" },
        { label: "Zip/Postal Code" },
        { label: "Country", type: "select", options: ["Bangladesh", "USA", "UK"] },
        { label: "Salutation", type: "select", options: ["Mr", "Mrs", "Ms", "Dr"] },
        { label: "First Name" },
        { label: "Middle Name" },
        { label: "Last Name" },
        { label: "Title" },
        { label: "Email", type: "email" },
        { label: "Phone" },
        { label: "Phone-Mobile" },
        { label: "Fax" },
        { label: "Url" },
        { label: "Id" },
        { label: "Tax Number" },
        { label: "Control Account-AR", type: "select", options: ["10204001"], required: true },
        { label: "Customer Group", type: "select", options: ["Corporate", "Franchise", "Retail"], required: true },
        { label: "Price Group", type: "select", options: ["Retails Sales Price", "Corporate Sales Price"] },
        { label: "Tax Scope", type: "select", options: ["Exempted", "Standard"], required: true },
        { label: "Discount %" },
        { label: "Agent" },
        { label: "Credit Limit" },
        { label: "Credit Available" },
        { label: "Credit Rating", type: "select", options: ["A", "B", "C", "D"] },
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 p-4 lg:p-8 font-sans text-gray-800">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Customer Master Registry</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage all your customer profiles, configurations, and settings in one place.</p>
                </div>

                {/* Tabs */}
                <GlobalCustomerLayout />

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-6">
                        
                        {/* Action Bar */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row justify-between items-center gap-4 transition-shadow hover:shadow-md">
                            <div className="flex gap-2">
                                <button className="btn btn-neutral btn-sm px-6 font-medium">Show</button>
                                <button className="btn btn-outline btn-sm px-6 font-medium">Clear</button>
                            </div>
                            
                            <div className="join shadow-sm rounded-lg">
                                <button className="btn btn-sm join-item bg-white hover:bg-gray-50 border-gray-200">Top</button>
                                <button className="btn btn-sm join-item bg-white hover:bg-gray-50 border-gray-200">Prev</button>
                                <button className="btn btn-sm join-item bg-white hover:bg-gray-50 border-gray-200">Next</button>
                                <button className="btn btn-sm join-item bg-white hover:bg-gray-50 border-gray-200">Bottom</button>
                            </div>

                            <div className="flex gap-2">
                                <button className="btn btn-success text-white btn-sm px-5 font-medium shadow-sm shadow-success/30"><FaPlus className="mr-1" /> Add</button>
                                <button className="btn btn-info text-white btn-sm px-5 font-medium shadow-sm shadow-info/30"><FaSave className="mr-1" /> Update</button>
                                <button className="btn btn-error text-white btn-sm px-5 font-medium shadow-sm shadow-error/30"><FaTrash className="mr-1" /> Delete</button>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-6">
                                {fields.map((field, idx) => (
                                    <div key={idx} className="form-control w-full">
                                        <label className="label py-1">
                                            <span className={`label-text font-semibold text-sm ${field.required ? 'text-red-500' : 'text-gray-700'}`}>
                                                {field.label} {field.required && '*'}
                                            </span>
                                            {field.search && (
                                                <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                                    <FaSearch size={12} />
                                                </button>
                                            )}
                                        </label>
                                        {field.type === 'select' ? (
                                            <select className="select select-bordered select-sm w-full bg-gray-50 focus:bg-white transition-colors focus:ring-2 focus:ring-indigo-500/20 text-sm">
                                                <option disabled selected>Select...</option>
                                                {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                        ) : (
                                            <input 
                                                type={field.type || 'text'} 
                                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                                className="input input-bordered input-sm w-full bg-gray-50 focus:bg-white transition-colors focus:ring-2 focus:ring-indigo-500/20 text-sm" 
                                            />
                                        )}
                                    </div>
                                ))}

                                <div className="form-control w-full md:col-span-2 xl:col-span-3 2xl:col-span-4 mt-2">
                                    <label className="label py-1">
                                        <span className="label-text font-semibold text-sm text-gray-700">Remarks</span>
                                    </label>
                                    <textarea 
                                        className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white transition-colors focus:ring-2 focus:ring-indigo-500/20 text-sm h-24 resize-none" 
                                        placeholder="Add any additional notes or remarks here..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / List Section */}
                    <div className="w-full lg:w-1/4 xl:w-1/5">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
                            
                            <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-4 border-b border-gray-100 flex flex-col gap-3">
                                <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    Customers List
                                </h2>
                                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
                                    <button className="btn btn-ghost btn-xs px-2 hover:bg-gray-100"><FaChevronLeft className="text-gray-500" /></button>
                                    <span className="text-xs font-semibold text-gray-600">Showing 20</span>
                                    <button className="btn btn-ghost btn-xs px-2 hover:bg-gray-100"><FaChevronRight className="text-gray-500" /></button>
                                </div>
                            </div>

                            <div className="overflow-y-auto max-h-[600px] hide-scrollbar">
                                <table className="table table-sm table-pin-rows w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-50/50 text-gray-500 border-b border-gray-100">
                                            <th className="font-semibold px-4 py-3">Code</th>
                                            <th className="font-semibold px-4 py-3">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {customers.map((c, i) => (
                                            <tr key={i} className="hover:bg-indigo-50/50 cursor-pointer transition-colors group">
                                                <td className="px-4 py-3">
                                                    <span className="font-bold text-indigo-600 group-hover:text-indigo-700">{c.id}</span>
                                                    <div className="text-[10px] text-gray-400 mt-0.5">{c.group}</div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="font-medium text-gray-800 truncate max-w-[120px]">{c.name}</div>
                                                    <div className="text-[10px] text-gray-500 mt-0.5">{c.short}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default GlobalCustomerPage;
