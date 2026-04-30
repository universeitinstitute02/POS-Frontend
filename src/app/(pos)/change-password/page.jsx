"use client";

import React from 'react';

import { HiOutlineLockClosed, HiOutlineCheckCircle } from 'react-icons/hi';

const PosChangePassword = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="w-full max-w-md">
                <div className="card-modern p-8 lg:p-10">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-4">
                            <HiOutlineLockClosed className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">Change Password</h1>
                        <p className="text-slate-500 mt-2 text-sm">Update your credentials to keep your account secure.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Password</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                    <HiOutlineLockClosed className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Confirm New Password</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                    <HiOutlineLockClosed className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 group">
                            <HiOutlineCheckCircle className="w-5 h-5" />
                            Update Password
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <div className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0"></div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                <span className="font-bold text-slate-700 block mb-0.5">Security Tip:</span>
                                Use a combination of uppercase, lowercase, numbers, and symbols for a stronger password.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosChangePassword;
