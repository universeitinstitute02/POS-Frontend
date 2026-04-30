"use client";

import { useEffect } from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';

const HolidaySettingsPage = () => {
    useEffect(() => {
        document.title = "Global Setting Holiday";
    }, []);

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Holiday Calendar
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                <p className='text-center text-xs text-blue-400 font-semibold mb-6 italic'>
                    Manage global holidays and non-working days.
                </p>

                {/* ACTION BAR */}
                <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 mb-6 flex-wrap gap-px">
                    {["Show", "Clear"].map(btn => (
                        <button key={btn} className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388] border-r border-gray-200">{btn}</button>
                    ))}
                    {["Top", "Previous", "Next", "Bottom"].map(btn => (
                        <button key={btn} className="bg-[#99A940] hover:bg-[#7e8c33] text-black px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    {["Add", "Update", "Delete"].map(btn => (
                        <button key={btn} className="bg-[#A98540] hover:bg-[#8e6f35] text-white px-4 py-1 border-r border-gray-200">{btn}</button>
                    ))}
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex-grow md:flex-grow-0'>+</button>
                </div>

                {/* FORM FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8 text-[11px] font-bold text-blue-600 items-start">
                    <div className="flex flex-col gap-1">
                        <label className="text-red-500">Locate</label>
                        <select className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Date</label>
                        <input type="date" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Available %</label>
                        <input type="number" className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500" placeholder="100" />
                    </div>
                    <div className="flex flex-col gap-1 lg:col-span-5">
                        <label>Notes</label>
                        <textarea className="border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500 h-10 w-full" placeholder="Holiday description..."></textarea>
                    </div>
                </div>

                <div className="mt-12 text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                    <p className="text-gray-400 font-medium">Select a location and date to view or add holidays.</p>
                </div>
            </div>
        </div>
    );
};

export default HolidaySettingsPage;
