import React, { useEffect, useState } from 'react';
import logo from '../../public/cashier.png'
import pos from '../../public/pos.png'
import { Link, NavLink, Outlet } from 'react-router-dom';

const BusinessLayout = () => {

   

 

    return (
        <>
            {/* <div className="container mx-auto lg:w-[65rem] w-full"> */}
            <div className="container mx-auto w-full">
                <div className="flex justify-between mt-3">
                    <div className="px-1">
                        <img src={pos} alt="" className='h-12 aspect-[2/1]' />
                        
                    </div>
                    <div className="">
                        <img src={logo} alt="" className='h-12 aspect-[1/1]' />
                    </div>
                </div>
                <div className="container mx-auto">
                     <Outlet />
                    {/* <div className="border-b border-black pt-4"></div> */}
                </div>
            </div>
        </>
    );
};

export default BusinessLayout;