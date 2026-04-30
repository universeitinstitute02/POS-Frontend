"use client";

import { useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import GlobalItemLayout from '@/components/GlobalItemLayout';

const GlobalItemPage = () => {
    useEffect(() => {
        document.title = "Global Settings Items";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Item Master Registry
            </div>

            <GlobalItemLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 mb-8 flex-wrap gap-px">
                    {["Show", "Clear"].map(btn => (
                        <button key={btn} className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388]">{btn}</button>
                    ))}
                    {["Top", "Previous", "Next", "Bottom"].map(btn => (
                        <button key={btn} className="bg-[#99A940] hover:bg-[#7e8c33] text-black px-4 py-1">{btn}</button>
                    ))}
                    {["Add", "Update", "Delete"].map(btn => (
                        <button key={btn} className="bg-[#A98540] hover:bg-[#8e6f35] text-white px-4 py-1">{btn}</button>
                    ))}
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1'>-</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs">
                            <div className="w-1/3 flex justify-end items-center gap-1 font-bold text-blue-700">
                                <span>Item Code</span>
                                <FcSearch className="text-sm cursor-pointer" />
                            </div>
                            <input type="text" className="w-2/3 border border-gray-300 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className="flex items-center gap-3 text-xs">
                            <label className="w-1/3 text-right font-bold text-red-600">* Description</label>
                            <input type="text" className="w-2/3 border border-gray-300 rounded px-2 py-1 outline-none" required />
                        </div>

                        <div className="flex items-start gap-3 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-700">Long Description</label>
                            <textarea className="w-2/3 border border-gray-300 rounded px-2 py-1 outline-none h-24" />
                        </div>

                        <div className="flex items-center gap-3 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-700">Bar Code</label>
                            <input type="text" className="w-2/3 border border-gray-300 rounded px-2 py-1 outline-none" />
                        </div>

                        <div className="flex items-center gap-3 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-700">Visibility</label>
                            <div className="w-2/3 flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span>Hide Item?</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3 text-xs">
                            <label className="w-1/3 text-right font-bold text-red-600">* Stock Type</label>
                            <div className="w-2/3 grid grid-cols-2 gap-2 bg-gray-50 p-2 rounded border border-gray-100">
                                {["Non-Stock", "Indent", "Manufactured", "Online-Service", "Stock-N-Sell"].map(type => (
                                    <div key={type} className="flex items-center gap-2">
                                        <input type="radio" name="stock_type" value={type} defaultChecked={type === 'Non-Stock'} className="w-3 h-3" />
                                        <span className="scale-90 origin-left">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {[
                            { label: "Stocking Unit", required: true },
                            { label: "Item Group", required: true },
                            { label: "Item Class" },
                            { label: "Item Category" },
                            { label: "Brand" },
                            { label: "Tax Category", required: true },
                        ].map(field => (
                            <div key={field.label} className="flex items-center gap-3 text-xs">
                                <label className={`w-1/3 text-right font-bold ${field.required ? 'text-red-600' : 'text-blue-700'}`}>
                                    {field.required ? '*' : ''} {field.label}
                                </label>
                                <select className="w-2/3 border border-gray-300 rounded px-2 py-1 outline-none">
                                    <option>Select Option</option>
                                </select>
                            </div>
                        ))}

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {[
                                { label: "Opening Qty", val: "0.000" },
                                { label: "Standard Cost", val: "0.000" },
                            ].map(field => (
                                <div key={field.label} className="flex flex-col gap-1 text-[10px]">
                                    <label className="font-bold text-blue-700">{field.label}</label>
                                    <input type="text" defaultValue={field.val} className="border border-gray-300 rounded px-2 py-1 text-center font-mono" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalItemPage;
