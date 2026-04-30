"use client";

import { useEffect } from 'react';
import PosTransactionLayout from '@/components/PosTransactionLayout';

const PosTransOrder = () => {
    useEffect(() => {
        document.title = "POS Transaction Order";
    }, []);

    return (
        <div className="container mx-auto">
            <PosTransactionLayout />

            <div className="mt-4">
                <div className="flex text-[11px] gap-1 pt-2 text-[#C5522A] items-center flex-wrap">
                    <button className='text-white bg-blue-600 px-2 rounded-sm'><span className='border-b border-white'>N</span>ew</button>
                    <div className="flex gap-1 items-center">
                        <p>Date</p>
                        <input type="date" name="date" className='border-[1px] rounded border-gray-400 text-black px-1 outline-none focus:ring-1 focus:ring-blue-500' />
                    </div>
                    <div className="flex gap-1 items-center">
                        <p>Customer Number</p>
                        <input type="text" className='border-[1px] rounded border-gray-400 text-black w-28 px-1 focus:bg-focusColor outline-none' />
                    </div>
                    <div className="flex gap-1 items-center">
                        <p>Disc. Overall(%)</p>
                        <input type="text" className='border-[1px] rounded border-gray-400 text-black w-16 px-1 focus:bg-focusColor outline-none' defaultValue='0.0' />
                    </div>
                    <div className="flex gap-1 items-center">
                        <p>Disc. Overall- Fixed</p>
                        <input type="text" className='border-[1px] rounded border-gray-400 text-black w-16 px-1 focus:bg-focusColor outline-none' defaultValue='0.0' />
                    </div>
                    <button className='bg-gray-400 px-2 pb-[1px] text-sm text-white rounded-sm'>Change</button>
                    <button className='bg-blue-600 px-2 pb-[1px] text-sm text-white rounded-sm'>Initialize</button>
                    <button className='bg-blue-600 px-2 pb-[1px] text-sm text-white rounded-sm'>Load_Item</button>
                    <button className='bg-blue-600 px-2 pb-[1px] text-sm text-white rounded-sm'>Reset Discount</button>
                </div>

                <div className="text-xs flex flex-col md:flex-row pt-4 gap-4">
                    <div className="w-full md:w-4/5">
                        <div className="font-semibold border border-gray-300 bg-white p-2 shadow-sm rounded">
                            <div className="flex justify-center flex-wrap gap-1 mb-4">
                                <button className='px-3 py-1 text-white bg-[#8440A9] hover:bg-[#BC90D5] rounded transition-colors'>Clear</button>
                                <button className='px-3 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Top</button>
                                <button className='px-3 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Previous</button>
                                <button className='px-3 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Next</button>
                                <button className='px-3 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Bottom</button>
                                <button className='px-3 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F] rounded transition-colors'>Add</button>
                                <button className='px-3 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F] rounded transition-colors'>Update</button>
                                <button className='px-3 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F] rounded transition-colors'>Delete</button>
                                <button className='px-3 py-1 text-white bg-blue-600 hover:bg-blue-400 rounded transition-colors'>-</button>
                            </div>
                            <div className="flex gap-4 px-2 pt-3 flex-wrap items-center">
                                <div className="flex gap-1 items-center">
                                    <span className="text-gray-600">Row</span>
                                    <span className="font-bold">0</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <label>Action</label>
                                    <select name="action" className='rounded border border-gray-400 px-1 outline-none'>
                                        <option value="sales">Sales</option>
                                        <option value="return">Return</option>
                                    </select>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Items Code</p>
                                    <input type="text" className='rounded border border-gray-400 w-28 px-1 focus:bg-focusColor outline-none' autoFocus/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Qty</p>
                                    <input type="text" className='rounded border border-gray-400 w-14 px-1 focus:bg-focusColor outline-none' defaultValue='1' />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Unit Price</p>
                                    <input type="text" className='rounded border border-gray-400 w-14 px-1 focus:bg-focusColor outline-none' defaultValue='0.000' />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Disc%</p>
                                    <input type="text" className='rounded border border-gray-400 w-14 px-1 focus:bg-focusColor outline-none' defaultValue='0.000' />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Fixed Disc</p>
                                    <input type="text" className='rounded border border-gray-400 w-14 px-1 focus:bg-focusColor outline-none' defaultValue='0.000' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/5">
                        <div className="border border-gray-800 text-2xl bg-[#FFC0CB] text-[#800021] font-bold shadow-md">
                            <div className="flex justify-between border-b border-gray-800 p-2">
                                <p className="text-sm uppercase">Rounded Total</p>
                                <p className='bg-[#F5F5DC] px-2'>0</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 p-2">
                                <p className="text-sm uppercase">Tendered</p>
                                <p className='bg-[#F5F5DC] px-2'>0</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 p-2">
                                <p className="text-sm uppercase">Change</p>
                                <p className='bg-[#F5F5DC] px-2'>0</p>
                            </div>
                            <div className="flex justify-between p-2">
                                <p className="text-sm uppercase">Due</p>
                                <p className='bg-[#F5F5DC] px-2'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosTransOrder;
