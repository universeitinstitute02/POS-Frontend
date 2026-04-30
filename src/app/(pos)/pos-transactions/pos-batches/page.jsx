"use client";

import { useEffect } from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const PosTransBatches = () => {
    useEffect(() => {
        document.title = "POS Batches";
    }, []);

    return (
        <div className="container mx-auto">
            <PosTransactionLayout />

            <div className="flex text-xs gap-1 pt-3 items-center flex-wrap">
                <p className='text-amber-900 font-semibold'>Date</p>
                <input type="date" className='border border-gray-400 rounded px-1' />
                <button className='bg-blue-600 text-white px-2 rounded hover:text-yellow-400 font-semibold transition-colors'>Create</button>
                <p className='text-amber-900 font-semibold ml-2'>POS Batches</p>
                <input type="text" className='border border-gray-400 rounded px-1 focus:bg-focusColor outline-none' />
                <button className='bg-gray-400 text-white px-2 rounded-sm'>Submission</button>
                <button className='bg-gray-400 text-white px-2 rounded-sm'>Collected</button>
                <button className='bg-gray-400 text-white px-2 rounded-sm'>Received</button>
                <button className='bg-gray-400 text-white px-2 rounded-sm'>Post</button>
                <button className='bg-gray-400 text-white px-2 rounded-sm'>Undo</button>
            </div>

            <div className="pt-5 text-xs flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/5">
                    <div className="flex border border-gray-300 gap-1 justify-between items-center py-1 bg-[#F4F6F8] px-2 rounded-t">
                        <FaLessThan className='text-blue-600 cursor-pointer' />
                        <div className="font-semibold text-gray-700">Batches</div>
                        <input type="text" defaultValue='50' className='border border-gray-400 w-10 text-center outline-none' />
                        <FaGreaterThan className='text-blue-600 cursor-pointer' />
                    </div>
                    <div className="grid grid-cols-4 gap-1 bg-[#F4F6F8] p-1 border-x border-b border-gray-300">
                        <p className='bg-[#C6DCDD] px-1 text-blue-700 font-bold'>Date</p>
                        <p className='col-span-2 bg-[#A6BDBD] px-1 text-blue-700 font-bold'>POS Batches</p>
                        <p className='bg-[#C6DCDD] px-1 text-blue-700 font-bold'>Flag</p>
                        
                        {Array.from({ length: 11 }).map((_, i) => (
                            <React.Fragment key={i}>
                                <p className="py-1">12/2/12</p>
                                <p className="bg-[#D4D6D8] text-blue-700 col-span-2 px-1 py-1 cursor-pointer hover:underline">POS402098</p>
                                <p className="py-1">Posted</p>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-6/12">
                    <div className="flex border border-gray-300 gap-1 justify-between items-center py-1 bg-[#F4F6F8] px-2 rounded-t">
                        <FaLessThan className='text-blue-600 cursor-pointer' />
                        <div className="font-semibold text-gray-700">Receipts - for 17/12/2024</div>
                        <div className="flex items-center gap-1">
                            <input type="text" defaultValue='50' className='border border-gray-400 w-10 text-center outline-none' />
                            <FaGreaterThan className='text-blue-600 cursor-pointer' />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 bg-[#F4F6F8] p-1 border-x border-gray-300">
                        <p className='bg-[#A6BDBD] text-blue-700 px-1 font-bold'>Payment Code</p>
                        <p className='col-span-2 bg-[#C6DCDD] text-blue-700 px-1 font-bold'>Name</p>
                        <p className='bg-[#C6DCDD] text-blue-700 px-1 text-right font-bold'>Amt</p>
                        
                        {['Bkash', 'Cash', 'Due', 'Change', 'Discount', 'Bkash', 'Bkash', 'Bkash', 'Bkash'].map((type, i) => (
                            <React.Fragment key={i}>
                                <p className='bg-[#D4D6D8] px-1 py-1'>{type}</p>
                                <p className='col-span-2 px-1 py-1'>Walk In Customer</p>
                                <p className='text-right px-1 py-1'>6200,00</p>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 gap-1 border-x border-b border-gray-300">
                        <p className='bg-[#86ADAF] px-1 py-1 font-bold text-white'>Total</p>
                        <p className='col-span-2 bg-[#AECDCF] py-1'></p>
                        <p className='text-right bg-[#AECDCF] px-1 py-1 font-bold'>12,0000</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                        <button className='bg-[#8440A9] px-3 py-1 text-white font-semibold rounded hover:bg-[#6a3388] transition-colors'>Clear</button>
                        <button className='bg-[#8440A9] px-3 py-1 text-white font-semibold rounded hover:bg-[#6a3388] transition-colors'>Show</button>
                        <button className='bg-[#99A940] px-3 py-1 text-black font-semibold rounded hover:bg-[#7e8c33] transition-colors'>Top</button>
                        <button className='bg-[#99A940] px-3 py-1 text-black font-semibold rounded hover:bg-[#7e8c33] transition-colors'>Prev</button>
                        <button className='bg-[#99A940] px-3 py-1 text-black font-semibold rounded hover:bg-[#7e8c33] transition-colors'>Next</button>
                        <button className='bg-[#99A940] px-3 py-1 text-black font-semibold rounded hover:bg-[#7e8c33] transition-colors'>Bottom</button>
                        <button className='bg-[#A98540] px-3 py-1 text-white font-semibold rounded hover:bg-[#8e6f35] transition-colors'>Refresh</button>
                        <button className='bg-gray-400 px-3 py-1 text-white font-semibold rounded'>Delete</button>
                        <button className='bg-blue-600 px-3 py-1 text-white font-semibold rounded'>-</button>
                    </div>

                    <div className="border border-gray-300 mt-4 rounded p-4 bg-white shadow-sm">
                        <div className="flex justify-center flex-wrap gap-6 text-blue-600 font-bold">
                            <button className="hover:underline">GL Voucher</button>
                            <button className="hover:underline">Invoices</button>
                            <button className="hover:underline">Money Receive</button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[30%]">
                    <div className="border border-green-700 rounded-md p-4 bg-[#FFFFF0] shadow-sm font-semibold text-[10px]">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-sm font-bold text-green-800">Daily Totals</p>
                            <button className='bg-slate-700 text-white px-3 py-1 rounded text-xs hover:bg-slate-800 transition-colors'>Print</button>
                        </div>
                        <div className="text-center space-y-1 mb-6">
                            <p>Date: 17/12/2024 </p>
                            <p>Terminal: Chokoria/P100/1st Shift</p>
                            <div className="flex justify-center py-2">
                                <img src="/cashier.png" alt="logo" className='h-16' />
                            </div>
                            <p className="text-sm font-bold">Gold Mark Shop</p>
                            <p>Thana Raster Matha, Gulsan, Dhaka</p>
                            <p>demosite@gmail.com</p>
                            <p>Telephone 01849590995</p>
                            <p>www.posdemo.com</p>
                            <p>GST Regn No:</p>
                            <p className='pt-4 text-xs font-bold border-t border-gray-300'>== R E C E I P T S ==</p>
                        </div>
                        
                        <div className="space-y-1 border-b border-gray-300 pb-4">
                            <div className="flex justify-between"><span>Total Received</span><span>BDT 0</span></div>
                            <div className="flex justify-between"><span>Less: Amt Returned</span><span>BDT 0</span></div>
                            <div className="flex justify-between pt-2 font-bold text-gray-800"><span>Net Receipts</span><span>BDT 0</span></div>
                            <div className="flex justify-between"><span>Rounded Off</span><span>BDT 0</span></div>
                            <div className="flex justify-between"><span>Unsettled</span><span>BDT 0</span></div>
                            <div className="flex justify-between font-bold"><span>Total</span><span>BDT 0</span></div>
                        </div>

                        <div className="py-4 space-y-1 border-b border-gray-300">
                            <div className="flex justify-center font-bold pb-2">== S A L E S ==</div>
                            <div className="flex justify-between"><span>Transactions</span><span>0</span></div>
                            <div className="flex justify-between"><span>Net Sales</span><span>BDT 0</span></div>
                            <div className="flex justify-between"><span>Cost of Sales</span><span>BDT 0</span></div>
                            <div className="flex justify-between font-bold text-blue-800"><span>Gross Profit</span><span>BDT 0</span></div>
                            <div className="flex justify-between"><span>Gross Margin</span><span>0%</span></div>
                        </div>
                        
                        <div className="pt-4 text-center italic text-gray-500">
                            Printed By: Admin Demo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
export default PosTransBatches;
