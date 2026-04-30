import React from 'react'
import { NavLink } from 'react-router-dom'

const SuppliesLayout = () => {
    return (
        <>
            <div className="flex gap-[.10rem] font-semibold mb-4">
                <NavLink
                    to="/global/supplier"
                    className={({ isActive }) => (
                        isActive
                            ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]'
                            : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A] py-1 text-xs text-blue-600 hover:text-white cursor-pointer'
                    )}
                >
                    Supplier	
                </NavLink>

                <NavLink to="/global/codes" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Prices</NavLink>{/* 2 */}
                <NavLink to="/global/transaction" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Discounts</NavLink>
                <NavLink to="/global/currencies" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Contacts</NavLink>
                <NavLink to="/global/gl_interface" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Credit Limit	</NavLink>
                <NavLink to="/global/message" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Docs</NavLink>
        
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer'>Activities</p>{/* 5 */}
                <NavLink to="/pos-customers/contacts" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>POs</NavLink>{/* 1 */}
             
        
             
            </div>
        </>
    )
}

export default SuppliesLayout