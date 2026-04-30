"use client";

import React from 'react';
import Link from 'next/link';

const BusinessLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">P</div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">POS Business</span>
                    </div>
                    <img src="/cashier.png" alt="Logo" className='h-10 w-10 object-contain grayscale opacity-50' />
                </div>
            </header>
            
            <main className="flex-grow flex items-center justify-center p-4 lg:p-8">
                <div className="w-full max-w-7xl mx-auto">
                    {children}
                </div>
            </main>

            <footer className="py-6 text-center text-slate-400 text-xs border-t border-slate-200">
                &copy; 2026 Professional POS System. All rights reserved.
            </footer>
        </div>
    );
};

export default BusinessLayout;
