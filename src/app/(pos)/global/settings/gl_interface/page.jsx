"use client";

import { useEffect } from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GLInterfaceSettingsPage = () => {
    useEffect(() => {
        document.title = "Global Setting GL Interface";
    }, []);

    const interfaceList = Array(4).fill({
        type: 'Cost of Sales',
        itemGroup: 'Finished Goods',
        group: 'Retail',
        warehouse: 'General Store',
        account: '40101002'
    });

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                GL Interface Mapping
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                <p className='text-center text-xs text-blue-400 font-semibold mb-6 italic'>
                    Click on a Transaction Code to make changes to it. Remember to click on the Save button after making the changes.
                </p>

                {/* ACTION BAR */}
                <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 mb-6 flex-wrap gap-px">
                    {["Show", "Clear"].map(btn => (
                        <button key={btn} className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388] border-r border-gray-200">{btn}</button>
                    ))}
                    {["Top", "Previous", "Next", "Bottom"].map(btn => (
                        <button key={btn} className="bg-[#99A940] hover:bg-[#7e8c33] text-black px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    {["Add", "Update", "Delete"].map(btn => (
                        <button key={btn} className="bg-[#A98540] hover:bg-[#8e6f35] text-white px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex-grow md:flex-grow-0'>+</button>
                </div>

                {/* FORM FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 text-[11px] font-bold text-blue-600">
                    <div className="flex flex-col gap-1">
                        <label>Interface Type</label>
                        <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="costofsale">Cost Of Sale</option>
                            <option value="discount">Discount</option>
                            <option value="returns">Returns</option>
                            <option value="sales">Sales</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Item Group</label>
                        <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 lg:col-span-1">
                        <label>Customer/Supplier Group</label>
                        <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="retail">Retail</option>
                            <option value="corpoate">Corporate</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Warehouse</label>
                        <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="generalstore">General Store</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Account</label>
                        <input type="text" defaultValue="40101002" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                </div>

                {/* DATA TABLE */}
                <div className="mt-10 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-200 rounded border border-gray-300 bg-white"><FaChevronLeft className="text-blue-600 text-xs" /></button>
                            <input type="text" defaultValue="50" className="w-10 border border-gray-400 rounded text-center text-xs py-0.5" />
                            <button className="p-1 hover:bg-gray-200 rounded border border-gray-300 bg-white"><FaChevronRight className="text-blue-600 text-xs" /></button>
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase">GL Mapping Table</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                            <thead>
                                <tr className="bg-[#F4F6F8] text-blue-800 border-b border-gray-200">
                                    <th className="p-2 text-left bg-blue-50">Interface Type ⇑</th>
                                    <th className="p-2 text-left">Item Group</th>
                                    <th className="p-2 text-left">Cust/Supp Group</th>
                                    <th className="p-2 text-left">Warehouse</th>
                                    <th className="p-2 text-left">Account</th>
                                    <th className="p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {interfaceList.map((item, i) => (
                                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                                        <td className="p-2 font-medium text-gray-800">{item.type}</td>
                                        <td className="p-2 text-gray-600">{item.itemGroup}</td>
                                        <td className="p-2 text-gray-600">{item.group}</td>
                                        <td className="p-2 text-gray-600">{item.warehouse}</td>
                                        <td className="p-2 font-mono text-blue-600 font-bold">{item.account}</td>
                                        <td className="p-2 text-center">
                                            <button className="text-red-500 hover:text-red-700 font-bold underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GLInterfaceSettingsPage;
