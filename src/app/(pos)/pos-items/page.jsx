"use client";

import React from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FcSearch } from 'react-icons/fc';

import { HiOutlineSearch, HiOutlinePlus, HiOutlineSave, HiOutlineTrash, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineArchive, HiOutlineDotsVertical } from 'react-icons/hi';

const PosItems = () => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Item Master</h1>
                    <p className="text-slate-500 mt-1">Manage inventory, descriptions, and pricing.</p>
                </div>
                <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                    <button className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-100 transition-all">Form View</button>
                    <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-all">Grid View</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* LEFT FORM SECTION */}
                <div className="w-full lg:w-[450px] space-y-4">
                    <div className="card-modern overflow-hidden">
                        <div className="flex items-center justify-between bg-slate-50/50 px-4 py-3 border-b border-slate-100">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Entry Form</span>
                            <div className="flex gap-2">
                                <button className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 transition-all"><HiOutlinePlus className="w-4 h-4" /></button>
                                <button className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 transition-all"><HiOutlineSave className="w-4 h-4" /></button>
                            </div>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Item Code</label>
                                    <div className="relative group">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <HiOutlineSearch className="w-4 h-4" />
                                        </div>
                                        <input type="text" className="w-full pl-4 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium" placeholder="E.g. 110033" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description <span className="text-rose-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium" placeholder="Main description..." required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Long Description</label>
                                    <textarea rows="3" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium resize-none" placeholder="Extended details..."></textarea>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Type <span className="text-rose-500">*</span></label>
                                        <select className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:border-indigo-500">
                                            <option>Stock-N-Sell</option>
                                            <option>Non-Stock</option>
                                            <option>Manufactured</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category <span className="text-rose-500">*</span></label>
                                        <select className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:border-indigo-500">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-50">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Std. Cost</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] font-bold">$</span>
                                            <input type="number" className="w-full pl-7 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold outline-none" defaultValue="0.00" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Std. Price</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] font-bold">$</span>
                                            <input type="number" className="w-full pl-7 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold outline-none" defaultValue="0.00" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex gap-2">
                            <button className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">Add Item</button>
                            <button className="px-4 py-2.5 bg-white border border-slate-200 text-rose-600 rounded-xl text-xs font-bold hover:bg-rose-50 transition-all"><HiOutlineTrash className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

                {/* RIGHT LIST SECTION */}
                <div className="flex-grow flex flex-col gap-4">
                    <div className="card-modern overflow-hidden flex flex-col h-full">
                        <div className="flex items-center justify-between px-6 py-4 bg-slate-50/50 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                                    <HiOutlineArchive className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-slate-900">Inventory Catalog</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-white border border-slate-200 rounded-lg px-2 py-1 gap-2">
                                    <button className="p-1 hover:text-indigo-600"><HiOutlineChevronLeft /></button>
                                    <span className="text-[10px] font-black text-slate-400">PAGE 1</span>
                                    <button className="p-1 hover:text-indigo-600"><HiOutlineChevronRight /></button>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-slate-600"><HiOutlineDotsVertical /></button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/30 border-b border-slate-100">
                                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Code</th>
                                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Group</th>
                                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Cost</th>
                                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[
                                        { code: '110033', desc: 'Mobile Phone X1', group: 'Finished Goods', cost: '850.00', price: '1200.00' },
                                        { code: '110034', desc: 'Wireless Earbuds', group: 'Accessories', cost: '45.00', price: '99.00' },
                                        { code: '110035', desc: 'Screen Protector', group: 'Parts', cost: '2.50', price: '15.00' },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-indigo-50/20 transition-colors cursor-pointer group">
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.code}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-500 font-medium">{item.desc}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase">{item.group}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-400 text-right">${item.cost}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-slate-900 text-right">${item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-auto p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 3 of 2,900 items</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Valuation:</span>
                                <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-black shadow-lg shadow-indigo-100">$29,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosItems;
