"use client";

import { useEffect } from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';

const PosTransUnsettled = () => {
    useEffect(() => {
        document.title = "Unsettled Transactions";
    }, []);

    return (
        <div className="container mx-auto">
            <PosTransactionLayout />

            <div className="text-xs mt-4">
                <div className="flex gap-2 pt-3 items-center flex-wrap">
                    <p className="font-medium">Customer Number</p>
                    <input type="text" defaultValue="CUS-000001" className='w-28 px-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor' />
                    <p className="font-medium">Walk in Customer</p>
                    <p className='px-2 bg-cyan-600 text-white rounded-sm'>-</p>
                </div>
                
                <div className="mt-4">
                    <div className="border border-gray-300 w-full px-4 py-4 bg-white rounded shadow-sm overflow-x-auto">
                        <p className='text-red-700 font-bold text-xl mb-4'>Unsettled Transactions</p>
                        
                        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-2 min-w-[800px]">
                            {/* Headers */}
                            {[1, 2, 3].map((_, i) => (
                                <React.Fragment key={i}>
                                    <p className='text-[#319797] font-bold'>No</p>
                                    <p className='text-[#319797] font-bold'>Date</p>
                                    <p className='text-[#319797] font-bold'>Total</p>
                                    <p className='text-[#319797] font-bold'>Due</p>
                                </React.Fragment>
                            ))}
                            
                            {/* Mock Data - Repeating to match original structure */}
                            {Array.from({ length: 48 }).map((_, i) => {
                                const items = [
                                    { no: 'POS-20', date: '20/3/4', total: '20,000', due: '10,000' },
                                    { no: 'POS-25', date: '25/3/4', total: '25,000', due: '10,000' },
                                    { no: 'POS-35', date: '10/3/4', total: '70,000', due: '140,000' }
                                ];
                                const item = items[i % 3];
                                return (
                                    <React.Fragment key={i}>
                                        <p className="text-blue-600 hover:underline cursor-pointer">{item.no}</p>
                                        <p className="text-gray-600">{item.date}</p>
                                        <p className="text-gray-600">{item.total}</p>
                                        <p className="text-gray-600 font-medium">{item.due}</p>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react'; // Needed for React.Fragment in the loop
export default PosTransUnsettled;
