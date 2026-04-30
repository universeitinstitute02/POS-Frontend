"use client";

import React, { useEffect } from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';

const TransactionSettingsPage = () => {
    useEffect(() => {
        document.title = "Global Setting Transaction";
    }, []);

    const transactionList = [
        { type: 'Customer Number', desc: 'Employee Purchase Scheme', code: 'DRS', details: '1 1 DRS, HO' },
        { type: 'Customer Number', desc: 'Employee Purchase Scheme', code: 'BOG', details: '1 1 BOG,HO' },
        { type: 'Customer Number', desc: 'Employee Purchase Scheme', code: 'DSM', details: '1 1 DSM, HO' },
        { type: 'Customer Number', desc: 'Employee Purchase Scheme', code: 'BOG', details: '1 1 BOG,HO' },
        { type: 'Customer Number', desc: 'Employee Purchase Scheme', code: 'DSM', details: '1 1 DSM, HO' },
    ];

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                General Settings for Cross Application
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                <p className='text-center text-xs text-blue-400 font-semibold mb-6 italic'>
                    Click on a Transaction Code to make changes to it. Remember to click on the Save button after making the changes.
                </p>

                <div className="border border-gray-300 rounded-lg overflow-hidden pb-6">
                    {/* ACTION BAR */}
                    <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 gap-px">
                        <button className='bg-[#A98540] px-6 py-1 text-white hover:bg-[#8e6f35] font-bold'>Save</button>
                        <button className='bg-[#A98540] px-6 py-1 text-white hover:bg-[#8e6f35] font-bold'>Refresh</button>
                        <button className='bg-blue-600 px-8 py-1 text-white flex-grow md:flex-grow-0'>-</button>
                    </div>

                    <div className="p-4 overflow-x-auto">
                        <div className="min-w-[800px]">
                            <div className="grid grid-cols-11 gap-2 mb-4 text-[10px] font-bold text-blue-600 whitespace-nowrap">
                                <p className='col-span-2 px-2'>Transaction Type</p>
                                <p>Code</p>
                                <p className='col-span-2 px-2'>Description</p>
                                <p>Starting</p>
                                <p>Increment</p>
                                <p>Prefix</p>
                                <p>Suffix</p>
                                <p>Alt Code</p>
                                <p>Active</p>

                                <select className='col-span-2 border border-gray-400 rounded px-1 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500'>
                                    <option value="region">Region</option>
                                    <option value="role">Role</option>
                                    <option value="siccode">SIC Code</option>
                                </select>

                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='col-span-2 border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />
                                <input type="text" className='border border-gray-400 rounded px-1 py-1 text-black font-normal' />

                                <div className="flex items-center gap-1 text-black font-normal">
                                    <input type="checkbox" className="w-3 h-3" />
                                    <span>Act</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className='text-center text-md text-red-600 font-bold mb-4 bg-red-50 py-1 border-y border-red-100'>
                        Transaction Codes for CA
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-blue-800 border-b border-gray-300">
                                    <th className="p-2 text-left">Type</th>
                                    <th className="p-2 text-left">Description</th>
                                    <th className="p-2 text-left">Code</th>
                                    <th className="p-2 text-left">Details</th>
                                    <th className="p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {transactionList.map((item, i) => (
                                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                                        <td className="p-2 text-red-600 font-medium">{item.type}</td>
                                        <td className="p-2 text-gray-600">{item.desc}</td>
                                        <td className="p-2 font-bold text-gray-800">{item.code}</td>
                                        <td className="p-2 text-gray-500">{item.details}</td>
                                        <td className="p-2 text-center">
                                            <button className="text-orange-600 hover:text-red-700 font-bold underline decoration-dotted">Delete</button>
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

export default TransactionSettingsPage;
