"use client";

import React, { useEffect } from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';

const VehiclesSettingsPage = () => {
    useEffect(() => {
        document.title = "Global Setting Vehicles";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Vehicle Fleet Management
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                <p className='text-center text-[10px] text-red-500 font-mono mb-6 bg-red-50 p-2 rounded border border-red-100'>
                    ERROR: relation "cavehicle" does not exist (System Database Mismatch)
                </p>

                <div className="border border-gray-300 rounded-lg overflow-hidden pb-6">
                    {/* ACTION BAR */}
                    <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 gap-px">
                        <button className='bg-[#A98540] px-8 py-1 text-white hover:bg-[#8e6f35] font-bold'>Save</button>
                        <button className='bg-[#A98540] px-8 py-1 text-white hover:bg-[#8e6f35] font-bold'>Refresh</button>
                        <button className='bg-blue-600 px-10 py-1 text-white flex-grow md:flex-grow-0'>-</button>
                    </div>

                    <div className="flex flex-col lg:flex-row p-4 gap-6">
                        <div className="w-full lg:w-4/5 border-r border-gray-100 pr-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-[10px] font-bold text-blue-600">
                                <div className="flex flex-col gap-1">
                                    <label>Vehicle</label>
                                    <input type="text" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Description</label>
                                    <input type="text" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Type</label>
                                    <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none">
                                        <option value="truck">Truck</option>
                                        <option value="van">Van</option>
                                        <option value="bike">Bike</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Length</label>
                                    <input type="number" defaultValue="0.000" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Width</label>
                                    <input type="number" defaultValue="0.000" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Height</label>
                                    <input type="number" defaultValue="0.000" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>Budget Cap</label>
                                    <input type="number" defaultValue="0.000" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/5 flex flex-col justify-center items-center gap-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Team Assignment</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow-sm text-xs transition-transform active:scale-95">
                                ASSIGN & SAVE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                    <p className="text-red-500 font-bold text-xl opacity-40 uppercase tracking-widest italic">
                        No Vehicles Found in Registry
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VehiclesSettingsPage;
