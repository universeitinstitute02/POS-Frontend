"use client";

import { useEffect } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';

const PosCusShippingMethods = () => {
    useEffect(() => {
        document.title = "POS Customers Shipping Methods";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4">
                <p className='text-center text-lg'>Customer Shipping Method</p>
            </div>

            <PosCustomersLayout />

            {/* TOP BAR */}
            <div className="bg-gray-100 mb-2 border border-gray-300 rounded shadow-sm overflow-hidden">
                <div className="flex justify-center items-center text-blue-600 gap-1 text-[11px] font-medium underline py-1 border-b border-gray-200 bg-white flex-wrap px-2">
                    {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((item, i) => (
                        <span key={i} className='hover:text-red-600 cursor-pointer p-0.5'>{item}</span>
                    ))}
                </div>

                <div className="flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-1">
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">|&lt;</button>
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&lt;</button>
                    </div>

                    <div className="flex items-center gap-1">
                        <input type="number" defaultValue={20} className='w-16 border border-gray-400 rounded px-2 py-0.5 focus:bg-focusColor outline-none' readOnly />
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;</button>
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;|</button>
                    </div>
                </div>
            </div>

            {/* FORM */}
            <div className="font-semibold border border-gray-300 bg-white rounded shadow-sm pb-6">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs border-b border-gray-200 py-1 mb-6 flex-wrap gap-1">
                    <button className='px-4 py-1 text-white bg-[#8440A9] hover:bg-[#6a3388] rounded transition-colors'>Clear</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Top</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Previous</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Next</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Bottom</button>
                    <button className='px-4 py-1 text-white bg-[#A98540] hover:bg-[#8e6f35] rounded transition-colors'>Add</button>
                    <button className='px-6 py-1 text-white bg-blue-600 rounded flex-grow md:flex-grow-0'>-</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-2 text-xs">
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right flex items-center justify-end gap-1 text-[#1B71A2] font-semibold">
                            <p>Method</p><FcSearch />
                        </div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor' autoFocus /></div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Code</div>
                        <div className="w-2/3">
                            <select className='w-full px-2 py-1 border border-gray-400 rounded outline-none'>
                                <option>Select</option>
                                <option>DHL</option>
                                <option>Pickup</option>
                                <option>Van</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Product</div>
                        <div className="w-2/3">
                            <select className='w-full px-2 py-1 border border-gray-400 rounded outline-none'>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Contact</div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded outline-none focus:bg-focusColor' /></div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Phone</div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded outline-none focus:bg-focusColor' /></div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Email</div>
                        <div className="w-2/3"><input type="email" className='w-full px-2 py-1 border border-gray-400 rounded outline-none focus:bg-focusColor' /></div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right font-semibold"><p className='text-customRed'>*Country</p></div>
                        <div className="w-2/3">
                            <select className='w-full px-2 py-1 border border-gray-400 rounded outline-none'>
                                <option>Bangladesh</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center md:col-span-2 px-4">
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" /> <span className="text-[#1B71A2]">Residence?</span>
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" /> <span className="text-[#1B71A2]">Saturday Delivery?</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCusShippingMethods;
