"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GlobalSupplierLayout = () => {
    const pathname = usePathname();

    const tabs = [
        { name: 'Supplier', href: '/global/supplier' },
    ];

    const inactiveTabs = ['Prices', 'Discounts', 'Contacts', 'Credit Limit', 'Docs', 'Activities', 'POs'];

    return (
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
    );
};

export default GlobalSupplierLayout;
