"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PosTransactionLayout from '@/components/PosTransactionLayout';

import { HiOutlineLocationMarker, HiOutlineDesktopComputer, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';

const PosTrans = () => {
    const router = useRouter();

    useEffect(() => {
        document.title = "POS Transaction";
    }, []);

    const handleClick = () => {
        router.push('/pos-transactions/pos-order');
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <PosTransactionLayout />

            <div className="flex justify-center py-12">
                <div className="w-full max-w-2xl">
                    <div className="card-modern p-8 lg:p-12 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-50 rounded-full opacity-50"></div>
                        
                        <div className="relative">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-slate-900">Session Configuration</h2>
                                <p className="text-slate-500 mt-2">Select your current location and terminal to begin.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <HiOutlineLocationMarker className="text-indigo-600" />
                                        Location
                                    </label>
                                    <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all">
                                        <option value="chokoria">Chokoria</option>
                                        <option value="koria">Koria</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <HiOutlineDesktopComputer className="text-indigo-600" />
                                        Terminal
                                    </label>
                                    <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all">
                                        <option value="p10">P10</option>
                                        <option value="p20">P20</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <HiOutlineClock className="text-indigo-600" />
                                        Shift
                                    </label>
                                    <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all">
                                        <option value="1stshift">1st Shift</option>
                                        <option value="2ndshift">2nd Shift</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button 
                                    onClick={handleClick}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 group"
                                >
                                    Start Transaction Session
                                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosTrans;
