"use client";

import React, { useState } from "react";
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
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiOutlineExclamationCircle,
  HiOutlinePlus,
  HiOutlineClock,
  HiOutlineArrowUp,
  HiOutlineArrowDown
} from "react-icons/hi";

const POSHome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const toggleVisibility = (value) => {
    sessionStorage.setItem("activeMenu", value);
    window.dispatchEvent(new Event("storage"));
  };

  const modules = [
    {
      id: "inventory",
      name: "Inventory",
      description: "Track stock levels, unit costs, and supply commitments.",
      icon: HiOutlineCube,
      color: "from-purple-500 to-indigo-500",
      shadow: "shadow-purple-500/30",
    },
    {
      id: "pointofsale",
      name: "Point of Sale",
      description: "Retail sales management for heavy traffic environments.",
      icon: HiOutlineShoppingBag,
      color: "from-violet-500 to-fuchsia-500",
      shadow: "shadow-violet-500/30",
    },
    {
      id: "systemadministration",
      name: "System Admin",
      description: "Manage system users, roles, and core security settings.",
      icon: HiOutlineShieldCheck,
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/30",
    },
    {
      id: "globalsetting",
      name: "Global Settings",
      description:
        "Mandatory setup for customers, suppliers, and essential master data.",
      icon: HiOutlineGlobeAlt,
      color: "from-indigo-500 to-blue-500",
      shadow: "shadow-indigo-500/30",
    },
    {
      id: "messaging",
      name: "Messaging",
      description: "Internal communication system and message management.",
      icon: HiOutlineChatAlt2,
      color: "from-cyan-500 to-teal-500",
      shadow: "shadow-cyan-500/30",
    },
    {
      id: "generalledger",
      name: "General Ledger",
      description:
        "Financial statements, journals, and complete accounting books.",
      icon: HiOutlineBookOpen,
      color: "from-emerald-500 to-green-500",
      shadow: "shadow-emerald-500/30",
    },
    {
      id: "accountspayable",
      name: "Accounts Payable",
      description: "Supplier payments, bill allocations, and debt management.",
      icon: HiOutlineCreditCard,
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-amber-500/30",
    },
    {
      id: "expensemanagement",
      name: "Expenses",
      description: "Track business expenses and manage operational costs.",
      icon: HiOutlineTrendingUp,
      color: "from-rose-500 to-pink-500",
      shadow: "shadow-rose-500/30",
    },
    {
      id: "reports",
      name: "Reports",
      description: "Detailed analytical reports and business intelligence.",
      icon: HiOutlineDocumentReport,
      color: "from-slate-500 to-gray-500",
      shadow: "shadow-slate-500/30",
    },
  ];

  const recentTransactions = [
    { id: "TRX-8921", customer: "Walk-in Customer", amount: 145.50, status: "Completed", time: "10 mins ago" },
    { id: "TRX-8920", customer: "Acme Corp", amount: 1250.00, status: "Pending", time: "1 hour ago" },
    { id: "TRX-8919", customer: "Sarah Jenkins", amount: 89.99, status: "Completed", time: "2 hours ago" },
    { id: "TRX-8918", customer: "Tech Solutions Inc.", amount: 3450.00, status: "Completed", time: "3 hours ago" },
    { id: "TRX-8917", customer: "Walk-in Customer", amount: 12.50, status: "Completed", time: "5 hours ago" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl">
            Welcome back, Admin. Monitor your business performance, manage inventory, and oversee daily operations from your central command center.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <HiOutlineDocumentReport className="w-5 h-5 text-indigo-600" />
            Export Report
          </button>
          <button onClick={() => toggleVisibility('pointofsale')} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
            <HiOutlinePlus className="w-5 h-5" />
            New Sale
          </button>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="card-modern p-6 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">$24.50</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
              <HiOutlineCurrencyDollar className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
            <HiOutlineArrowUp className="w-4 h-4" />
            <span>+14.5% from last week</span>
          </div>
        </div>

        {/* Orders Card */}
        <div className="card-modern p-6 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Orders</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">142</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
              <HiOutlineShoppingBag className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded-md">
            <HiOutlineArrowUp className="w-4 h-4" />
            <span>+5% today</span>
          </div>
        </div>

        {/* Customers Card */}
        <div className="card-modern p-6 relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Customers Today</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">89</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner">
              <HiOutlineUsers className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-rose-500 bg-rose-50 w-fit px-2 py-1 rounded-md">
            <HiOutlineArrowDown className="w-4 h-4" />
            <span>-2% from yesterday</span>
          </div>
        </div>

        {/* Alerts Card */}
        <div className="card-modern p-6 relative overflow-hidden group cursor-pointer border-l-4 border-l-rose-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Inventory Alerts</p>
              <h3 className="text-3xl font-black text-rose-600 mt-2 tracking-tight">12</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shadow-inner">
              <HiOutlineExclamationCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-rose-600">
            <span>Items running low</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Modules Grid (Takes up 2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HiOutlineCube className="w-6 h-6 text-indigo-600" />
              Core Modules
            </h2>
            <div className="flex bg-slate-200/50 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${activeTab === 'overview' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('favorites')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${activeTab === 'favorites' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Favorites
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleVisibility(item.id)}
                className="group cursor-pointer card-modern bg-white p-6 hover:border-indigo-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex-shrink-0 flex items-center justify-center shadow-lg ${item.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar (Takes up 1/3 width on large screens) */}
        <div className="space-y-8">
          
          {/* Recent Transactions */}
          <div className="card-modern bg-white overflow-hidden flex flex-col h-[500px]">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HiOutlineClock className="w-5 h-5 text-indigo-600" />
                Recent Activity
              </h2>
              <button onClick={() => toggleVisibility('pointofsale')} className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">View All</button>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar p-2">
              <ul className="space-y-2">
                {recentTransactions.map((trx, idx) => (
                  <li key={idx} className="p-3 hover:bg-slate-50 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">{trx.id}</span>
                      <span className="font-black text-sm text-slate-900">${trx.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-500">{trx.customer}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${trx.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                        {trx.status}
                      </span>
                    </div>
                    <div className="mt-2 text-[10px] text-slate-400 font-semibold">{trx.time}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card-modern bg-gradient-to-br from-slate-900 to-slate-800 p-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <h2 className="text-lg font-bold text-white mb-4 relative z-10">Quick Actions</h2>
            <div className="space-y-3 relative z-10">
              <button onClick={() => toggleVisibility('pointofsale')} className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white font-medium transition-colors">
                <span className="flex items-center gap-3"><HiOutlineShoppingBag className="w-5 h-5 text-indigo-400" /> Open Register</span>
                <span>&rarr;</span>
              </button>
              <button onClick={() => toggleVisibility('inventory')} className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white font-medium transition-colors">
                <span className="flex items-center gap-3"><HiOutlineCube className="w-5 h-5 text-purple-400" /> Add Inventory</span>
                <span>&rarr;</span>
              </button>
              <button onClick={() => toggleVisibility('globalsetting')} className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white font-medium transition-colors">
                <span className="flex items-center gap-3"><HiOutlineUsers className="w-5 h-5 text-emerald-400" /> New Customer</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default POSHome;
