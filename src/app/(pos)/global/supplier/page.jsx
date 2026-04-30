"use client";

import { useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import GlobalSupplierLayout from '@/components/GlobalSupplierLayout';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GlobalSupplierPage = () => {
    useEffect(() => {
        document.title = "Global Settings Suppliers";
    }, []);

    const suppliers = [
        { id: 'SUP-000001', name: 'Walk in Customer' },
        { id: 'SUP-000002', name: 'Prime Logistics' },
        { id: 'SUP-000003', name: 'Global Goods Inc' },
    ];

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Supplier Master Registry
            </div>

            <GlobalSupplierLayout />

            <div className="flex flex-col lg:flex-row gap-6 mt-4">
                {/* FORM SECTION */}
                <div className="w-full lg:w-4/5">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        {/* ACTION BAR */}
                        <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 mb-8 flex-wrap gap-px">
                            {["Show", "Clear"].map(btn => (
                                <button key={btn} className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388]">{btn}</button>
                            ))}
                            {["Top", "Previous", "Next", "Bottom"].map(btn => (
                                <button key={btn} className="bg-[#99A940] hover:bg-[#7e8c33] text-black px-4 py-1">{btn}</button>
                            ))}
                            {["Add", "Update", "Delete"].map(btn => (
                                <button key={btn} className="bg-[#A98540] hover:bg-[#8e6f35] text-white px-4 py-1">{btn}</button>
                            ))}
                            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1'>-</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
                            {[
                                { label: "Supplier Number", search: true },
                                { label: "Short Name", search: true },
                                { label: "Name", search: true },
                                { label: "Address 1" },
                                { label: "Address 2" },
                                { label: "City" },
                                { label: "State/Province" },
                                { label: "Zip/Postal Code" },
                                { label: "Country", type: "select", options: ["Bangladesh"] },
                                { label: "Salutation", type: "select", options: ["Mr", "Mrs", "Dr"] },
                                { label: "First Name" },
                                { label: "Middle Name" },
                                { label: "Last Name" },
                                { label: "Email", type: "email" },
                                { label: "Phone" },
                                { label: "Control Account-AP", type: "select", options: ["20101001"], required: true },
                                { label: "Control Account-GIT", type: "select", options: ["20103005"], required: true },
                                { label: "Supplier Group", type: "select", options: ["Trade Creditor", "00005"], required: true },
                                { label: "Tax Scope", type: "select", options: ["Exempted", "Standard"], required: true },
                                { label: "Currency", type: "select", options: ["BDT"], required: true },
                                { label: "Location", type: "select", options: ["Main Warehouse"], required: true },
                                { label: "Credit Limit" },
                                { label: "Buyer" },
                                { label: "Delivery Zone", type: "select", options: ["Zone A", "Zone B"] },
                            ].map((field, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-xs">
                                    <div className="w-1/3 flex justify-end items-center gap-1 font-bold text-blue-700">
                                        <span className={field.required ? 'text-red-600' : ''}>{field.label}</span>
                                        {field.search && <FcSearch className="text-sm cursor-pointer" />}
                                    </div>
                                    <div className="w-2/3">
                                        {field.type === 'select' ? (
                                            <select className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500">
                                                {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                        ) : (
                                            <input type={field.type || 'text'} className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500" />
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-col gap-2 md:col-span-2 xl:col-span-3 mt-4">
                                <div className="flex gap-4 items-start">
                                    <label className="w-20 text-xs font-bold text-blue-700">Remarks</label>
                                    <textarea className="flex-grow border border-gray-300 rounded p-2 text-xs outline-none focus:ring-1 focus:ring-blue-500" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR TABLE */}
                <div className="w-full lg:w-1/5">
                    <div className="bg-gray-100 rounded-lg border border-gray-300 overflow-hidden sticky top-4">
                        <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <button className="p-0.5 hover:bg-gray-300 rounded"><FaChevronLeft className="text-blue-600 text-[10px]" /></button>
                                <input type="text" defaultValue="20" className="w-8 border border-gray-400 rounded text-center text-[10px] py-0.5" />
                                <button className="p-0.5 hover:bg-gray-300 rounded"><FaChevronRight className="text-blue-600 text-[10px]" /></button>
                            </div>
                            <span className="text-[10px] font-bold text-blue-700 uppercase">Suppliers</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-[9px] border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-blue-800 border-b border-gray-200">
                                        <th className="p-1 text-left">Code</th>
                                        <th className="p-1 text-left">Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {suppliers.map((s, i) => (
                                        <tr key={i} className="hover:bg-blue-50 cursor-pointer transition-colors">
                                            <td className="p-1 font-bold text-blue-600 underline">{s.id}</td>
                                            <td className="p-1 text-gray-700 truncate max-w-[120px]">{s.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalSupplierPage;
