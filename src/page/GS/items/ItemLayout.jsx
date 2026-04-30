import React from 'react'
import { NavLink } from 'react-router-dom'
const ItemLayout = () => {
    return (
        <>
            <div className="flex gap-[.10rem] font-semibold mb-4">
                <NavLink
                    to="/global/item"
                    className={({ isActive }) => (
                        isActive
                            ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]'
                            : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A] py-1 text-xs text-blue-600 hover:text-white cursor-pointer'
                    )}
                >
                    Item		
                </NavLink>

                <NavLink to="/global/settings/codes" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Prices</NavLink>{/* 2 */}
                <NavLink to="/global/settings/transaction" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Kits</NavLink>
                <NavLink to="/global/settings/currencies" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Cross References</NavLink>
                <NavLink to="/global/settings/gl_interface" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Serial Numbers</NavLink>
                <NavLink to="/global/settings/message" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Docs</NavLink>
                <NavLink to="/global/settings/message" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-[#A52A2A]' : 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Bar Code</NavLink>
            </div>
        </>
    )
}

export default ItemLayout
