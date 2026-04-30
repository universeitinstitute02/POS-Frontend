"use client";

import React from 'react';
import { 
    HiOutlineShieldCheck, 
    HiOutlineGlobeAlt, 
    HiOutlineChatAlt2, 
    HiOutlineBookOpen, 
    HiOutlineCreditCard, 
    HiOutlineTrendingUp, 
    HiOutlineCube, 
    HiOutlineShoppingBag,
    HiOutlineDocumentReport,
    HiOutlinePlus,
    HiOutlineStar
} from 'react-icons/hi';

const POSHome = () => {
    const toggleVisibility = (value) => {
        sessionStorage.setItem("activeMenu", value);
        window.dispatchEvent(new Event('storage'));
    };

    const modules = [
        {
            category: "Common",
            items: [
                { id: 'systemadministration', name: 'System Admin', description: 'Manage system users, roles, and core security settings.', icon: HiOutlineShieldCheck, color: 'bg-blue-500' },
                { id: 'globalsetting', name: 'Global Settings', description: 'Mandatory setup for customers, suppliers, and essential master data.', icon: HiOutlineGlobeAlt, color: 'bg-indigo-500' },
                { id: 'messaging', name: 'Messaging', description: 'Internal communication system and message management.', icon: HiOutlineChatAlt2, color: 'bg-cyan-500' },
            ]
        },
        {
            category: "Accounts",
            items: [
                { id: 'generalledger', name: 'General Ledger', description: 'Financial statements, journals, and complete accounting books.', icon: HiOutlineBookOpen, color: 'bg-emerald-500' },
                { id: 'accountspayable', name: 'Accounts Payable', description: 'Supplier payments, bill allocations, and debt management.', icon: HiOutlineCreditCard, color: 'bg-amber-500' },
                { id: 'expensemanagement', name: 'Expenses', description: 'Track business expenses and manage operational costs.', icon: HiOutlineTrendingUp, color: 'bg-rose-500' },
            ]
        },
        {
            category: "Distribution",
            items: [
                { id: 'inventory', name: 'Inventory', description: 'Track stock levels, unit costs, and supply commitments.', icon: HiOutlineCube, color: 'bg-purple-500' },
                { id: 'pointofsale', name: 'Point of Sale', description: 'Retail sales management for heavy traffic environments.', icon: HiOutlineShoppingBag, color: 'bg-violet-500' },
                { id: 'reports', name: 'Reports', description: 'Detailed analytical reports and business intelligence.', icon: HiOutlineDocumentReport, color: 'bg-slate-500' },
            ]
        }
    ];

    const stats = [
        { label: 'Today Sales', value: '$12,450', change: '+12.5%', icon: HiOutlineTrendingUp },
        { label: 'New Customers', value: '48', change: '+5.2%', icon: HiOutlinePlus },
        { label: 'Active Orders', value: '156', change: '-2.4%', icon: HiOutlineShoppingBag },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500 mt-1">Welcome back, Admin. Here is what's happening today.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        View Reports
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                        New Transaction
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="card-modern p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                                <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modules Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Business Modules</h2>
                
                <div className="space-y-10">
                    {modules.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="h-px bg-slate-200 flex-1"></div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">{group.category}</span>
                                <div className="h-px bg-slate-200 flex-1"></div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => toggleVisibility(item.id)}
                                        className="group cursor-pointer card-modern p-6 hover:border-indigo-300 hover:ring-4 hover:ring-indigo-50 transition-all"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                            LAUNCH MODULE →
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-modern overflow-hidden">
                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                            <HiOutlineStar className="text-amber-500" />
                            My Favorites
                        </h3>
                        <button className="text-xs text-indigo-600 font-bold hover:underline">Edit</button>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['General Settings', 'Purchase Order', 'POS Transactions', 'Inventory Review'].map((fav) => (
                                <button key={fav} className="text-left px-4 py-3 rounded-xl bg-slate-50 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-transparent hover:border-indigo-100">
                                    {fav}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold">Need Help?</h3>
                        <p className="mt-4 text-indigo-100 leading-relaxed max-w-sm">
                            The POS system is organized hierarchically. Use the breadcrumbs or the sidebar to navigate back. Click "Home" anytime to return here.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                            Open Documentation
                        </button>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute right-4 top-4 w-12 h-12 bg-white/5 rounded-xl rotate-12"></div>
                </div>
            </div>
        </div>
    );
};

export default POSHome;
