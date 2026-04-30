"use client";

import React from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';

const PosTransHistory = () => {
    return (
        <div className="container mx-auto">
            <PosTransactionLayout />

            <div className="flex gap-2 text-xs pt-4 items-center">
                <input type="text" name="code" placeholder="Search by code..." className='border border-gray-400 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:bg-yellow-100 outline-none w-64' />
                <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition-colors font-medium'>Search</button>
            </div>

            <div className="pt-6 text-xs overflow-x-auto">
                <div className="border border-gray-300 w-full p-4 bg-white rounded shadow-sm min-w-[1000px]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-[#319797] p-2 text-left">No</th>
                                <th className="p-2 text-left">Customer Number</th>
                                <th className="text-[#319797] p-2 text-left">Date</th>
                                <th className="text-[#319797] p-2 text-left">Total</th>

                                <th className="text-[#319797] p-2 text-left border-l border-gray-200">No</th>
                                <th className="p-2 text-left">Customer Number</th>
                                <th className="text-[#319797] p-2 text-left">Date</th>
                                <th className="text-[#319797] p-2 text-left">Total</th>

                                <th className="text-[#319797] p-2 text-left border-l border-gray-200">No</th>
                                <th className="p-2 text-left">Customer Number</th>
                                <th className="text-[#319797] p-2 text-left">Date</th>
                                <th className="text-[#319797] p-2 text-left">Total</th>

                                <th className="text-[#319797] p-2 text-left border-l border-gray-200">No</th>
                                <th className="text-[#319797] p-2 text-left">DUE</th>
                                <th className="text-[#319797] p-2 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1, 2, 3].map((i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="text-blue-600 p-2 font-medium cursor-pointer">POS-20</td>
                                    <td className='p-2'> CUS-31</td>
                                    <td className="p-2">20/3/4</td>
                                    <td className="p-2">20,000</td>
                                    
                                    <td className="text-blue-600 p-2 font-medium cursor-pointer border-l border-gray-200">POS-20</td>
                                    <td className='p-2'> CUS-31</td>
                                    <td className="p-2">25/3/4</td>
                                    <td className="p-2">25,000</td>
                                    
                                    <td className="text-blue-600 p-2 font-medium cursor-pointer border-l border-gray-200">POS-35</td>
                                    <td className='p-2'> CUS-32</td>
                                    <td className="p-2">10/3/4</td>
                                    <td className="p-2">140,000</td>
                                    
                                    <td className="text-blue-600 p-2 font-medium cursor-pointer border-l border-gray-200">POS-35</td>
                                    <td className="p-2">{6000 + (i-1)*1000}</td>
                                    <td className="p-2">140,000</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PosTransHistory;
