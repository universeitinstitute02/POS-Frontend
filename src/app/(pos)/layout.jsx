"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    HiOutlineHome, 
    HiOutlineUserGroup, 
    HiOutlineCube, 
    HiOutlinePresentationChartBar, 
    HiOutlineLockClosed,
    HiOutlineCog,
    HiOutlineLogout,
    HiOutlineMenuAlt2,
    HiOutlineBell,
    HiOutlineSearch
} from 'react-icons/hi';
import { IoSettingsSharp } from 'react-icons/io5';

const Layout = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const menu = sessionStorage.getItem('activeMenu');
        setActiveMenu(menu);

        const handleStorageChange = () => {
            setActiveMenu(sessionStorage.getItem('activeMenu'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const navLinkClass = (isActive) => 
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
            isActive 
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
            : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
        }`;

    const sidebarItems = [
        { name: 'Home', href: '/', icon: HiOutlineHome, active: pathname === '/' },
        ...(activeMenu === 'globalsetting' ? [
            { name: 'Settings', href: '/global/settings/default', icon: HiOutlineCog, active: pathname.startsWith('/global/settings') },
            { name: 'Customers', href: '/global/customer', icon: HiOutlineUserGroup, active: pathname.startsWith('/global/customer') },
            { name: 'Suppliers', href: '/global/supplier', icon: HiOutlineUserGroup, active: pathname.startsWith('/global/supplier') },
            { name: 'Items', href: '/global/item', icon: HiOutlineCube, active: pathname.startsWith('/global/item') },
        ] : []),
        ...(activeMenu === 'pointofsale' ? [
            { name: 'Transactions', href: '/pos-transactions', icon: HiOutlinePresentationChartBar, active: pathname === '/pos-transactions' },
            { name: 'Items', href: '/pos-items', icon: HiOutlineCube, active: pathname === '/pos-items' },
            { name: 'Customers', href: '/pos-customers/customer', icon: HiOutlineUserGroup, active: pathname.startsWith('/pos-customers/') },
            { name: 'Sales Analysis', href: '/sales-analysis', icon: HiOutlinePresentationChartBar, active: pathname === '/sales-analysis' },
        ] : []),
        { name: 'Change Password', href: '/change-password', icon: HiOutlineLockClosed, active: pathname === '/change-password' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">POS System</span>
                    </div>

                    <nav className="flex-1 px-4 space-y-1">
                        {sidebarItems.map((item) => (
                            <Link key={item.name} href={item.href} className={navLinkClass(item.active)}>
                                <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'}`} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-slate-100">
                        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                            <HiOutlineLogout className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
                {/* Header */}
                <header className="sticky top-0 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-slate-100 lg:hidden">
                            <HiOutlineMenuAlt2 className="w-6 h-6" />
                        </button>
                        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-3 py-1.5 gap-2 w-64">
                            <HiOutlineSearch className="w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Search..." className="bg-transparent border-none focus:ring-0 text-sm w-full" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 relative">
                            <HiOutlineBell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-200 mx-1"></div>
                        <div className="flex items-center gap-3 pl-1">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-slate-900 leading-tight">Admin User</p>
                                <p className="text-xs text-slate-500">Business Owner</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
                                <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center font-bold text-indigo-600 text-sm">AU</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="p-4 lg:p-8 flex-grow">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

                <footer className="px-8 py-4 text-center text-slate-400 text-xs border-t border-slate-100">
                    &copy; 2026 Professional POS System. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Layout;
