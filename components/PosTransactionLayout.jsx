"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PosTransactionLayout = () => {
    const pathname = usePathname();

    const tabs = [
        { name: 'Order', href: '/pos-transactions/pos-order' },
        { name: 'Unsettled', href: '/pos-transactions/pos-unsetteled' },
        { name: 'Inventory/Prices', href: '/pos-transactions/inventory-pos' },
        { name: 'History', href: '/pos-transactions/pos-history' },
        { name: 'Batches', href: '/pos-transactions/pos-batches' },
        { name: 'Customer Orders', href: '/pos-transactions/pos-customer' },
    ];

    const inactiveTabs = ['Receipt', 'Batches History'];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">Location: <span className="text-indigo-600">Chokoria</span></span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">Terminal: <span className="text-indigo-600">P100</span></span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">Shift: <span className="text-indigo-600">1st Shift</span></span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">New POS Transaction</h2>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="flex overflow-x-auto no-scrollbar border-b border-slate-100 bg-slate-50/50">
                    {tabs.map((tab) => (
                        <Link 
                            key={tab.name}
                            href={tab.href} 
                            className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                                pathname === tab.href 
                                ? 'border-indigo-600 text-indigo-600 bg-white' 
                                : 'border-transparent text-slate-500 hover:text-indigo-600 hover:bg-white/50'
                            }`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                    {inactiveTabs.map((tab) => (
                        <span 
                            key={tab}
                            className="px-6 py-4 text-sm font-semibold text-slate-300 whitespace-nowrap cursor-not-allowed"
                        >
                            {tab}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PosTransactionLayout;
