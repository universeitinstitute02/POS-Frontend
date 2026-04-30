"use client";

import React from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';

const DefaultSettingsPage = () => {
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
                <div className="bg-red-50 py-2 mb-8 border-y border-red-100">
                    <p className='text-center text-sm text-red-600 font-bold'>Defaults for CA</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-3/5">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-[11px]">
                            <p className="text-blue-600 underline font-semibold cursor-pointer">Default Document Format</p>
                            <p className="lg:col-span-2 text-gray-700 font-medium">PDF</p>
                            
                            <p className="text-blue-600 underline font-semibold cursor-pointer">Supplier Credit Limit</p>
                            <p className="lg:col-span-2 text-gray-700 font-medium">0</p>
                            
                            <p className="text-blue-600 underline font-semibold cursor-pointer">No Auto-generation of Customer Numbers?</p>
                            <p className="lg:col-span-2"><input type="checkbox" className="w-4 h-4" /></p>
                            
                            <p className='text-blue-600 underline font-semibold cursor-pointer'>Batch Format</p>
                            <p className="lg:col-span-2 text-gray-600 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100 font-mono">
                                comp "| ";;xbatch00 caption(Markings) display(text);;xbatch01 caption(Pallet) display(text);;xbatch02 caption(Batch) display(text)
                            </p>
                            
                            <p className="text-blue-600 underline font-semibold cursor-pointer">No Auto-generation of Supplier Numbers?</p>
                            <p className="lg:col-span-2"><input type="checkbox" className="w-4 h-4" /></p>
                            
                            <p className='text-blue-600 underline font-semibold cursor-pointer'>Customer Credit Limit</p>
                            <p className="lg:col-span-2 text-gray-700 font-bold">100,000</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5 border-l border-gray-100 md:pl-12">
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-[11px]">
                            <p className='text-blue-500 underline font-semibold cursor-pointer'>Security Exempted Fields</p>
                            <div className="flex justify-center"><input type="checkbox" className="w-4 h-4" /></div>
                            
                            <p className='text-blue-500 underline font-semibold cursor-pointer'>Suppress Description</p>
                            <div className="flex justify-center"><input type="checkbox" className="w-4 h-4" /></div>
                            
                            <p className='text-blue-500 underline font-semibold cursor-pointer'>Warehouse</p>
                            <p className='text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded text-center border border-blue-100'>General Store</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded shadow transition-all active:scale-95">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DefaultSettingsPage;
