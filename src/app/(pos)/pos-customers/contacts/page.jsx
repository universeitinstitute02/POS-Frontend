"use client";

import { useEffect } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';

const PosCusContacts = () => {
    useEffect(() => {
        document.title = "POS Customers Contacts";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4">
                <p className='text-center text-lg'>Customer Contacts</p>
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
                        <input type="number" defaultValue={20} className='w-16 border border-gray-400 rounded px-2 py-0.5 focus:bg-focusColor outline-none' />
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;</button>
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;|</button>
                    </div>
                </div>
            </div>

            {/* FORM */}
            <div className="font-semibold border border-gray-300 bg-white rounded shadow-sm pb-4">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs border-b border-gray-200 py-1 mb-4 flex-wrap gap-1">
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Top</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Previous</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Next</button>
                    <button className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#C7D276] rounded transition-colors'>Bottom</button>
                    <button className='px-4 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F] rounded transition-colors'>Add</button>
                    <button className='px-6 py-1 text-white bg-blue-600 rounded flex-grow md:flex-grow-0'>-</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-6 py-2 text-xs">
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right flex items-center justify-end gap-1 text-[#1B71A2]">
                            <p>Contact Row</p><FcSearch />
                        </div>
                        <div className="w-2/3"><input type="text" defaultValue={0} className='w-24 px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' autoFocus /></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2]"><p>Name *</p></div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' /></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right"><p className='text-customRed'>*Phone</p></div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' /></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2]"><p>Email</p></div>
                        <div className="w-2/3"><input type="email" className='w-full px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' /></div>
                    </div>
                    <div className="flex gap-2 items-center md:col-span-2">
                        <div className="w-[16.5%] text-right text-[#1B71A2]"><p>Address</p></div>
                        <div className="w-[83.5%]"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' /></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2]"><p>City</p></div>
                        <div className="w-2/3"><input type="text" className='w-full px-2 py-1 border border-gray-400 rounded focus:bg-focusColor outline-none' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCusContacts;
