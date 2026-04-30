import React from 'react';
import { NavLink } from 'react-router-dom';

const PosTransactionLayout = () => {
    return (
        <>
            <div className="pt-5 text-blue-500 font-semibold ">
                <p className='text-center'>Location: <span className='text-green-500'>Chokoria</span> Terminal: <span className='text-green-500'>P100 </span>Shift: <span className='text-green-500'>1st Shift</span></p>
                <p className='text-center'>New POS Transaction</p>
            </div>


            <div className="flex gap-[.10rem] font-semibold">
                <NavLink to="/pos-transactions/pos-order" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Order</NavLink>
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Receipt</p>
                <NavLink to="/pos-transactions/pos-unsetteled" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Unsettled</NavLink>
                <NavLink to="/pos-transactions/inventory-pos" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Inventory/Prices</NavLink>
                <NavLink to="/pos-transactions/pos-history" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>History</NavLink>
                <NavLink to="/pos-transactions/pos-batches" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Batches</NavLink>
                <NavLink to="/pos-transactions/pos-customer" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Customer Orders</NavLink>
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Batches History</p>
            </div>
        </>
    );
};

export default PosTransactionLayout;