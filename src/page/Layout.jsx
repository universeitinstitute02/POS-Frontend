import { useEffect, useState } from 'react';
import logo from '../../public/cashier.png'
import pos from '../../public/pos.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';

const Layout = () => {

    // State to store active menu
    const [activeMenu, setActiveMenu] = useState(sessionStorage.getItem('activeMenu'));

    // Update the state whenever sessionStorage changes
    useEffect(() => {
        // Add an event listener to monitor changes to sessionStorage
        const handleStorageChange = () => {
            setActiveMenu(sessionStorage.getItem('activeMenu'));
        };

        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // const activeMenu = sessionStorage.getItem('activeMenu');

    const location = useLocation();
    const isCustomerActive = location.pathname.startsWith("/pos-customers/");


    // global_setting
    const global_setting =  window.location.pathname.startsWith('/global/settings')
    const global_customer = window.location.pathname.startsWith('/global/customer')
    const global_supplier  = window.location.pathname.startsWith('/global/supplier')
    const global_item  = window.location.pathname.startsWith('/global/item')
    const global_list  = window.location.pathname.startsWith('/global/list')
    const global_utilities  = window.location.pathname.startsWith('/global/utilities')
    const global_price_discount  = window.location.pathname.startsWith('/global/price&discount')

    return (
        <>
            <div className="container mx-auto lg:w-[65rem] w-full">
                {/* <div className="container mx-auto w-full"> */}
                <div className="flex justify-between mt-3">
                    <div className="px-1">
                        <img src={pos} alt="" className='h-12 aspect-[2/1]' />
                        <div className="flex gap-1">
                            <NavLink to='/pos-home' className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold' : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600')}>Home</NavLink>
                            {/* System Administration */}
                            {(activeMenu === 'systemadministration') && (
                                <>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Business, Modules and Models

                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Portals
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Users and Security
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Automation and Resources
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Data Tools

                                    </p>

                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Logs and Lists
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Settings
                                    </p>
                                </>
                            )}
                            {/* Global Setting */}
                            {(activeMenu === 'globalsetting') && (
                                <>
                                    <NavLink
                                        to="/global/settings/default"
                                        className={() => (
                                                global_setting
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Settings
                                    </NavLink>
                                    <NavLink
                                        to="/global/customer"
                                        className={() => (
                                            global_customer
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Customers
                                    </NavLink>
                                    <NavLink
                                        to="/global/supplier"
                                        className={() => (
                                            global_supplier
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Suppliers
                                    </NavLink>
                                    <NavLink
                                        to="/global/item"
                                        className={() => (
                                            global_item
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Items
                                    </NavLink>
                                    <NavLink
                                        to="/global/price&discount"
                                        className={() => (
                                            global_price_discount
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Prices and Discounts
                                    </NavLink>
                                    <NavLink
                                        to="/global/list"
                                        className={() => (
                                            global_list
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Lists
                                    </NavLink>
                                    <NavLink
                                        to="/global/utilities"
                                        className={() => (
                                            global_utilities
                                                ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold'
                                                : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'
                                        )}
                                    >
                                        Utilities
                                    </NavLink>
                                    

                                </>
                            )}
                            {/* Messages */}
                            {(activeMenu === 'messaging') && (
                                <>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Messages
                                    </p>
                                </>
                            )}
                            {/* General Ledger */}
                            {(activeMenu === 'generalledger') && (
                                <>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Transactions
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        GL Reports
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        AR Reports
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        AP Reports
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Project Accounting Reports
                                    </p>

                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Settings
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Load Data
                                    </p>
                                </>
                            )}

                            {/* Expense Management & Accounts Payable  */}
                            {(activeMenu === 'expensemanagement' || activeMenu === 'accountspayable') && (
                                <>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Payments
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Allocations
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Reports
                                    </p>

                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Settings
                                    </p>

                                </>
                            )}
                            {/* Inventory */}
                            {(activeMenu === 'inventory') && (
                                <>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Transactions
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Batch Processes
                                    </p>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        GL Interface
                                    </p>

                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600'>
                                        Settings
                                    </p>
                                </>
                            )}
                            {/* Point of sale */}
                            {(activeMenu === 'pointofsale') && (
                                <>
                                    <NavLink to='/pos-transactions' className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs  text-customRed font-semibold' : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500')} >
                                        POS Transactions
                                    </NavLink>
                                    <NavLink to='/pos-items' className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs  text-customRed font-semibold' : "border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500")}>
                                        Items
                                    </NavLink>
                                    <NavLink to='/pos-customers/customer' className={() => (isCustomerActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs  text-customRed font-semibold' : "border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500")}>
                                        Customers
                                    </NavLink>
                                    <NavLink to="/sales-analysis" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold' : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500')} >
                                        Sales Analysis
                                    </NavLink>
                                    <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'>
                                        Settings
                                    </p>
                                    <NavLink to='/change-password' className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-customRed font-semibold' : 'border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500')} >
                                        Change Password
                                    </NavLink>
                                </>
                            )}
                            <p className='border-t-[1px] border-l-[1px] px-1 border-[#4F4F4F] text-xs text-blue-600 hover:text-orange-500'>Log Out</p>
                        </div>
                    </div>
                    <div className="">
                        <img src={logo} alt="" className='h-12 aspect-[1/1]' />
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="border-b border-black pt-1"></div>
                    <div className="flex justify-between mt-5 text-xs">
                        <p className='text-blue-700 cursor-pointer hover:text-blue-300'>Main Menu</p>
                        <div className="flex items-center gap-2">
                         <p>Admin@gmail.com <span>For E bussiness </span> </p>
                          <IoSettingsSharp  className='text-4xl' />

                        </div>
                    </div>
                    <Outlet />
                    <div className="border-b border-black pt-4"></div>
                </div>
            </div>
        </>
    );
};

export default Layout;