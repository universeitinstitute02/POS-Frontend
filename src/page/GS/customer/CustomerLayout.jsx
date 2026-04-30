import React from 'react'
import { NavLink } from 'react-router-dom'
const CustomerLayout = () => {
    return (
        <>
            <div className="flex gap-[.10rem] font-semibold mb-4">
                <NavLink
                    to="/global/customer"
                    className={({ isActive }) => (
                        isActive
                            ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]'
                            : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A] py-1 text-xs text-blue-600 hover:text-white cursor-pointer'
                    )}
                >
                    Customer	
                </NavLink>

                <NavLink to="/global/codes" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Delivery Address</NavLink>{/* 2 */}
                <NavLink to="/global/transaction" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Milestones</NavLink>
                <NavLink to="/global/currencies" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Prices</NavLink>
                <NavLink to="/global/gl_interface" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Discounts</NavLink>
                <NavLink to="/global/message" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Payment Methods</NavLink>
        
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer'>Shipping Methods</p>{/* 5 */}
                <NavLink to="/pos-customers/contacts" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Contacts</NavLink>{/* 1 */}
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer'>Credit</p>{/* 3 */}
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer'>Limit</p>{/* 6 */}
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer'>Docs</p>
                <NavLink to="/global/holiday" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Activities</NavLink>
                <NavLink to="/global/vehicles" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Orders	</NavLink>
                <NavLink to="/global/vehicles" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Consignments</NavLink>
        
             
            </div>
        </>
    )
}

export default CustomerLayout