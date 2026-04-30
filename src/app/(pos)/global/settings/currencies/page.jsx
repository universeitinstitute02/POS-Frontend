"use client";

import { useEffect } from 'react';
import GlobalSettingsLayout from '@/components/GlobalSettingsLayout';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CurrenciesSettingsPage = () => {
    useEffect(() => {
        document.title = "Global Setting Currencies";
    }, []);

    const currencyList = Array(6).fill({
        code: 'BDT',
        shortName: 'POS402098',
        name: 'Bangladeshi Taka',
        cent: 'paisa',
        cents: 'paisas',
        decimal: 2,
        exchange: '1.0000000000',
        sell: '1.0000000000',
        buy: '1.0000000000',
        active: true
    });

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Global Currencies
            </div>

            <GlobalSettingsLayout />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-4">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-red-600">Currency *</label>
                            <select className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500">
                                <option value="bdt">BDT</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-600">Short Name</label>
                            <input type="text" className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-600">Name</label>
                            <input type="text" defaultValue="Bangladeshi Taka" className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-600">Cent/Cents</label>
                            <div className="w-2/3 flex gap-2">
                                <input type="text" defaultValue="paisa" className="w-1/2 border border-gray-400 rounded px-2 py-1 outline-none" />
                                <input type="text" defaultValue="paisas" className="w-1/2 border border-gray-400 rounded px-2 py-1 outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-600">Decimal Places</label>
                            <input type="number" defaultValue={2} className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none" />
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-red-600">*Exchange Rate</label>
                            <div className="w-2/3 flex gap-2">
                                <input type="text" defaultValue="1.0000000000" className="w-1/2 border border-gray-400 rounded px-2 py-1 outline-none" placeholder="Sell" />
                                <input type="text" defaultValue="1.0000000000" className="w-1/2 border border-gray-400 rounded px-2 py-1 outline-none" placeholder="Buy" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <label className="w-1/3 text-right font-bold text-blue-600">Active</label>
                            <div className="w-2/3 flex items-center gap-2">
                                <input type="checkbox" defaultChecked className="w-4 h-4" />
                                <span>Activate?</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DATA TABLE */}
                <div className="mt-10 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-200 rounded border border-gray-300 bg-white"><FaChevronLeft className="text-blue-600 text-xs" /></button>
                            <input type="text" defaultValue="50" className="w-10 border border-gray-400 rounded text-center text-xs py-0.5" />
                            <button className="p-1 hover:bg-gray-200 rounded border border-gray-300 bg-white"><FaChevronRight className="text-blue-600 text-xs" /></button>
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Currency Registry</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-[10px] border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="bg-[#F4F6F8] text-blue-800 border-b border-gray-200">
                                    <th className="p-2 text-left bg-blue-50">Currency ⇑</th>
                                    <th className="p-2 text-left">Short Name</th>
                                    <th className="p-2 text-left">Name</th>
                                    <th className="p-2 text-left">Cent</th>
                                    <th className="p-2 text-left">Cents</th>
                                    <th className="p-2 text-left">Decimals</th>
                                    <th className="p-2 text-left">Rate</th>
                                    <th className="p-2 text-left">Sell</th>
                                    <th className="p-2 text-left">Buy</th>
                                    <th className="p-2 text-center">Active</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {currencyList.map((c, i) => (
                                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                                        <td className="p-2 font-bold text-blue-600 bg-gray-50">{c.code}</td>
                                        <td className="p-2 text-gray-600">{c.shortName}</td>
                                        <td className="p-2 text-gray-800 font-medium">{c.name}</td>
                                        <td className="p-2 text-gray-500">{c.cent}</td>
                                        <td className="p-2 text-gray-500">{c.cents}</td>
                                        <td className="p-2 text-gray-600 text-center">{c.decimal}</td>
                                        <td className="p-2 font-mono text-gray-600">{c.exchange}</td>
                                        <td className="p-2 font-mono text-gray-600">{c.sell}</td>
                                        <td className="p-2 font-mono text-gray-600">{c.buy}</td>
                                        <td className="p-2 text-center">
                                            <input type="checkbox" defaultChecked={c.active} disabled className="w-3 h-3" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrenciesSettingsPage;
