"use client";

import React from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';

const CodesSettingsPage = () => {
    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                General Settings for Cross Application
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
                <p className='text-center text-xs text-blue-400 font-semibold mb-6 italic'>
                    Click on a Parameter to make changes to it. Remember to click on the Save button after making changes or adding a new parameter.
                </p>

                <div className="border border-gray-300 rounded-lg overflow-hidden pb-6">
                    {/* ACTION BAR */}
                    <div className="flex justify-center text-xs py-1 border-b border-gray-200 bg-gray-50 gap-px">
                        <button className='bg-[#A98540] px-6 py-1 text-white hover:bg-[#8e6f35] font-bold'>Save</button>
                        <button className='bg-[#A98540] px-6 py-1 text-white hover:bg-[#8e6f35] font-bold'>Refresh</button>
                        <button className='bg-blue-600 px-8 py-1 text-white flex-grow md:flex-grow-0'>-</button>
                    </div>

                    <div className="p-4">
                        <div className="grid grid-cols-6 gap-4 mb-8 text-[11px] font-bold text-blue-600">
                            <p className='px-2'>Code Type</p>
                            <p>Code</p>
                            <p className='col-span-2'>Detailed Description</p>
                            <p>Alternate Code</p>
                            <p>Active</p>

                            <select className='border border-gray-400 rounded px-1 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500'>
                                <option value="region">Region</option>
                                <option value="role">Role</option>
                                <option value="siccode">SIC Code</option>
                                <option value="salespersion">Sales Person</option>
                                <option value="section">Section</option>
                                <option value="shippingcode">Shipping Code</option>
                                <option value="shippingproduct">Shipping Product</option>
                            </select>

                            <input type="text" className='border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500' />
                            <input type="text" className='border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500 col-span-2' />
                            <input type="text" className='border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500' />

                            <div className="flex items-center gap-2 text-black font-normal">
                                <input type="checkbox" className="w-4 h-4" />
                                <p>Activate</p>
                            </div>
                        </div>

                        <hr className="my-6 border-gray-100" />

                        <div className="grid grid-cols-6 gap-4 text-[11px] font-bold text-blue-600">
                            <p className='px-2'>Team</p>
                            <p className='col-span-4 text-right'>Property List</p>
                            <p></p>

                            <select className='border border-gray-400 rounded px-1 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500'>
                                <option value="region">Region</option>
                                <option value="role">Role</option>
                                <option value="siccode">SIC Code</option>
                                <option value="salespersion">Sales Person</option>
                                <option value="section">Section</option>
                                <option value="shippingcode">Shipping Code</option>
                                <option value="shippingproduct">Shipping Product</option>
                            </select>

                            <textarea className='border border-gray-400 rounded px-2 py-1 text-black font-normal outline-none focus:ring-1 focus:ring-blue-500 col-span-4 h-24'></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                    <p className='text-xl text-red-500 font-bold opacity-50'>
                        No Codes for CA Found
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CodesSettingsPage;
