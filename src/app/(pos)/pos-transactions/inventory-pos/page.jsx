"use client";

import React from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';

const PosTransInventory = () => {
    return (
        <div className="container mx-auto">
            <PosTransactionLayout />

            <div className="flex text-xs pt-4 gap-2 items-center">
                <p className="font-medium">Item Code</p>
                <input type="text" name='code' className='border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor w-48'/>
            </div>
            <div className="flex justify-center text-white mt-12 gap-1">
                <button className='bg-[#CEB37F] hover:bg-[#A98540] px-6 py-1 rounded transition-colors font-medium'>Refresh</button>
                <button className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors font-medium'>-</button>
            </div>
        </div>
    );
};

export default PosTransInventory;
