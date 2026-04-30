"use client";

import React from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';

const PosTransCustomerOrder = () => {
    return (
        <div className="container mx-auto">
            <PosTransactionLayout/>

            <div className="flex text-xs pt-6 gap-3 items-center flex-wrap">
                <div className="flex gap-1 items-center">
                    <p className='text-[#8C2C00] font-bold'>Type</p>
                    <select name="action" className="border border-gray-400 rounded px-1 outline-none focus:ring-1 focus:ring-blue-500">
                        <option value="summary">Summary</option>
                        <option value="details">Details</option>
                        <option value="sales-summary">Sales Summary</option>
                    </select>
                </div>
                <div className="flex gap-1 items-center">
                    <p className='text-[#8C2C00] font-bold'>Customer Number</p>
                    <input type="text" name="code" className='border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor w-32'/>
                </div>
                <div className="flex gap-1 items-center">
                    <p className='text-[#8C2C00] font-bold'>From Date</p>
                    <input type="date" className='border border-gray-400 rounded px-1 outline-none'/>
                </div>
                <div className="flex gap-1 items-center">
                    <p className='text-[#8C2C00] font-bold'>To Date</p>
                    <input type="date" className='border border-gray-400 rounded px-1 outline-none'/>
                </div>
                <div className="flex gap-1">
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors font-medium'>
                        <span className='border-b border-white'>S</span>how
                    </button>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors font-medium'>-</button>
                </div>
            </div>
        </div>
    );
};

export default PosTransCustomerOrder;
