"use client";

import { useEffect } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';

const PosCustomer = () => {
    useEffect(() => {
        document.title = "POS Customers";
    }, []);

    const datas = [1, 2, 3, 4];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Customer Master</h1>
                    <p className="text-sm text-slate-500">Manage your customer database and credit limits.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">Export</button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all">Save Changes</button>
                </div>
            </div>

            <PosCustomersLayout />

            <div className="flex flex-col xl:flex-row gap-8">
                {/* LEFT SIDE - FORM */}
                <div className="w-full xl:w-3/4 space-y-6">
                    <div className="card-modern overflow-hidden">
                        {/* ACTION BAR */}
                        <div className="flex bg-slate-50/50 border-b border-slate-100 p-2 gap-2 overflow-x-auto no-scrollbar">
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all'>Show</button>
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all'>Clear</button>
                            <div className="w-px bg-slate-200 my-1 mx-1"></div>
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all'>Top</button>
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all'>Prev</button>
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all'>Next</button>
                            <button className='px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all'>Bottom</button>
                            <div className="w-px bg-slate-200 my-1 mx-1"></div>
                            <button className='px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-all'>Add</button>
                            <button className='px-4 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg text-xs font-bold hover:bg-amber-100 transition-all'>Update</button>
                            <button className='px-4 py-1.5 bg-rose-50 text-rose-700 border border-rose-100 rounded-lg text-xs font-bold hover:bg-rose-100 transition-all'>Delete</button>
                        </div>

                        {/* FORM */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                        Customer Number <FcSearch className="text-sm cursor-pointer" />
                                    </label>
                                    <input type="text" defaultValue="CUS-000001" className='w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                        Short Name <FcSearch className="text-sm cursor-pointer" />
                                    </label>
                                    <input type="text" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                        Full Name <span className="text-rose-500">*</span> <FcSearch className="text-sm cursor-pointer" />
                                    </label>
                                    <input type="text" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-semibold' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number <span className="text-rose-500">*</span></label>
                                    <input type="text" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <input type="email" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Customer Group</label>
                                    <select className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer'>
                                        <option value="Retail">Retail Customer</option>
                                        <option value="Corporate">Corporate Client</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 lg:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Address</label>
                                    <input type="text" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all' />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Credit Limit</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                        <input type="number" defaultValue="5000" className='w-full pl-8 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-bold text-indigo-600' />
                                    </div>
                                </div>
                                <div className="md:col-span-3 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Internal Remarks</label>
                                    <textarea rows="3" className='w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none' placeholder="Add any specific notes about this customer..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - LIST */}
                <div className="w-full xl:w-1/4">
                    <div className="card-modern overflow-hidden sticky top-24">
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900 text-sm">Quick Selection</h3>
                            <div className="flex gap-2">
                                <button className="p-1 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all text-indigo-600">
                                    <span className="text-[10px] font-bold">PREV</span>
                                </button>
                                <button className="p-1 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all text-indigo-600">
                                    <span className="text-[10px] font-bold">NEXT</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-2 bg-white border-b border-slate-50">
                            <div className="relative">
                                <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                                <input type="text" placeholder="Filter customers..." className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border-none rounded-lg text-xs focus:ring-1 focus:ring-indigo-500 outline-none" />
                            </div>
                        </div>
                        <div className="overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
                            <table className="w-full text-xs text-left border-collapse">
                                <thead className="sticky top-0 bg-white shadow-sm z-10">
                                    <tr className="text-slate-400 font-bold uppercase tracking-tighter text-[10px]">
                                        <th className="px-4 py-3 border-b border-slate-100">Code</th>
                                        <th className="px-4 py-3 border-b border-slate-100">Name</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                                        <tr key={i} className="hover:bg-indigo-50/50 cursor-pointer transition-colors group">
                                            <td className="px-4 py-3 text-indigo-600 font-bold">CUS-00{i+1}</td>
                                            <td className="px-4 py-3 text-slate-600 font-medium group-hover:text-slate-900">
                                                {i === 0 ? 'Walk in Customer' : `Customer ${i + 1}`}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCustomer;
