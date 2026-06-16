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
                <div className="grid grid-cols-2 md:flex text-[11px] gap-2 pt-2 text-[#C5522A] items-end flex-wrap">
                    <button className='text-white bg-blue-600 px-2 py-1 rounded-sm col-span-2 md:col-span-1 md:w-auto h-fit'><span className='border-b border-white'>N</span>ew</button>
                    <div className="flex flex-col gap-1 w-full md:w-auto">
                        <p>Date</p>
                        <input type="date" name="date" className='border-[1px] rounded w-full border-gray-400 text-black px-1 py-0.5 outline-none focus:ring-1 focus:ring-blue-500' />
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-auto">
                        <p>Customer Number</p>
                        <input type="text" className='border-[1px] rounded w-full md:w-28 border-gray-400 text-black px-1 py-0.5 focus:bg-focusColor outline-none' />
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-auto">
                        <p>Disc. Overall(%)</p>
                        <input type="text" className='border-[1px] rounded w-full md:w-16 border-gray-400 text-black px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='0.0' />
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-auto">
                        <p>Disc. Overall- Fixed</p>
                        <input type="text" className='border-[1px] rounded w-full md:w-16 border-gray-400 text-black px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='0.0' />
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-wrap gap-2 mt-2 md:mt-0">
                        <button className='bg-gray-400 px-2 py-1 text-sm text-white rounded-sm'>Change</button>
                        <button className='bg-blue-600 px-2 py-1 text-sm text-white rounded-sm'>Initialize</button>
                        <button className='bg-blue-600 px-2 py-1 text-sm text-white rounded-sm'>Load_Item</button>
                        <button className='bg-blue-600 px-2 py-1 text-sm text-white rounded-sm'>Reset Discount</button>
                    </div>
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
                            <div className="flex gap-4 px-2 pt-3 flex-wrap items-end">
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <span className="text-gray-600">Row</span>
                                    <span className="font-bold border px-2 py-0.5 rounded bg-slate-50">0</span>
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <label>Action</label>
                                    <select name="action" className='rounded w-full border border-gray-400 px-1 py-0.5 outline-none'>
                                        <option value="sales">Sales</option>
                                        <option value="return">Return</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <p>Items Code</p>
                                    <input type="text" className='rounded w-full sm:w-28 border border-gray-400 px-1 py-0.5 focus:bg-focusColor outline-none' autoFocus/>
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <p>Qty</p>
                                    <input type="text" className='rounded w-full sm:w-14 border border-gray-400 px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='1' />
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <p>Unit Price</p>
                                    <input type="text" className='rounded w-full sm:w-14 border border-gray-400 px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='0.000' />
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <p>Disc%</p>
                                    <input type="text" className='rounded w-full sm:w-14 border border-gray-400 px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='0.000' />
                                </div>
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <p>Fixed Disc</p>
                                    <input type="text" className='rounded w-full sm:w-14 border border-gray-400 px-1 py-0.5 focus:bg-focusColor outline-none' defaultValue='0.000' />
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
