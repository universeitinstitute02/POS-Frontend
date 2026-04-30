"use client";

import { useEffect } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';

const PosCusDocs = () => {
    useEffect(() => {
        document.title = "POS Customers Docs";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Customer Docs
            </div>

            <PosCustomersLayout />

            <div className="font-semibold border border-gray-300 bg-white rounded shadow-sm pb-4 mt-6">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs border-b border-gray-200 py-1 mb-6 flex-wrap gap-px">
                    {["Show", "Clear"].map(btn => (
                        <button key={btn} className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388] transition-colors border-r border-gray-200">{btn}</button>
                    ))}
                    {["Top", "Previous", "Next", "Bottom"].map(btn => (
                        <button key={btn} className="bg-[#99A940] hover:bg-[#7e8c33] text-black px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    {["Add", "Update", "Delete"].map(btn => (
                        <button key={btn} className="bg-[#A98540] hover:bg-[#8e6f35] text-white px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex-grow md:flex-grow-0'>+</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-2 text-xs">
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right flex items-center justify-end gap-1 text-[#1B71A2] font-semibold">
                            <p>Order Number</p><FcSearch className="text-base" />
                        </div>
                        <div className="w-2/3"><input type="text" defaultValue={0} className='w-24 px-2 py-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor' autoFocus /></div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">File Name</div>
                        <div className="w-2/3">
                            <input type="file" className='w-full text-[10px] border border-gray-400 rounded focus:bg-focusColor' />
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Active</div>
                        <div className="w-2/3 flex items-center gap-1">
                            <input type="checkbox" id="activate" defaultChecked className="w-4 h-4" />
                            <label htmlFor="activate" className="cursor-pointer">Activate?</label>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold">Default Folder</div>
                        <div className="w-2/3">
                            <code className="bg-gray-100 px-2 py-1 rounded text-gray-700 border border-gray-200">docs/x45645346/</code>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center md:col-span-2">
                        <div className="w-1/6 text-right text-[#1B71A2] font-semibold">Link</div>
                        <div className="w-5/6">
                            <input type="url" placeholder="https://..." className='w-full px-2 py-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCusDocs;
