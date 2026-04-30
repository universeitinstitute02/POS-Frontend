import React, { useEffect } from 'react'
import SettingsLayout from './SettingsLayout'
import { useLocation } from 'react-router-dom';

const Transaction = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Global Setting Transaction";
    }, [location]);
    return (
        <>
            <p className='text-center text-blue-500 font-semibold'>General Settings for Cross Application</p>
            <SettingsLayout />
            <div className="">
                <p className='text-center text-xs text-blue-400 font-semibold'>

                    Click on a Transaction Code to make changes to it. Remember to click on the Save button after making the changes.

                </p>
                <div className="border mx-10 mt-5 pb-3 text-xs">
                    <div className="flex text-white text-sm justify-center">
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Save</p>
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Refresh</p>
                        <p className='bg-blue-400 px-1'>-</p>
                    </div>

                    <div className="grid grid-cols-11 gap-2">
                        <p className='px-2 col-span-2 text-blue-500'>Transaction Type</p>
                        <p className='text-blue-500'>Code</p>
                        <p className='px-2 col-span-2 text-blue-500' >Description</p>
                        <p className='text-blue-500'>Starting</p>
                        <p className='text-blue-500'>Increment</p>
                        <p className='text-blue-500'>Prefix</p>
                        <p className='text-blue-500'>Suffix</p>
                        <p className='text-blue-500'>Alternate Code</p>
                        <p className='text-blue-500'>Active</p>
                        <select name="" id="" className='border mx-2 col-span-2'>
                            <option value="region">Region</option>
                            <option value="role">Role</option>
                            <option value="siccode">SIC Code</option>
                            <option value="salespersion">Sales Persion</option>
                            <option value="section">Section</option>
                            <option value="shippingcode">Shipping Code</option>
                            <option value="shippingproduct">Shipping Product</option>
                        </select>


                        <input type="text" name="code" id="" className='border' />
                        <input type="text" name="code" id="" className='border col-span-2' />
                        <input type="text" name="code" id="" className='border' />
                        <input type="text" name="code" id="" className='border' />
                        <input type="text" name="code" id="" className='border' />
                        <input type="text" name="code" id="" className='border' />
                        <input type="text" name="code" id="" className='border' />

                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" className='' />
                            <p>Activate</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-2 mt-4">
                        <p className='px-2 text-blue-500'>Team</p>
                        <p className='col-span-4 place-items-end grid text-blue-500'>Property List</p>
                        <p></p>
                        <select name="" id="" className='border w-34 h-6 mx-2'>
                            <option value="region">Region</option>
                            <option value="role">Role</option>
                            <option value="siccode">SIC Code</option>
                            <option value="salespersion">Sales Persion</option>
                            <option value="section">Section</option>
                            <option value="shippingcode">Shipping Code</option>
                            <option value="shippingproduct">Shipping Product</option>
                        </select>
                        <textarea name="" id="" className='border col-span-4 w-full h-16'></textarea>
                    </div>
                </div>

                <p className='text-center text-lg text-red-500'>
                    Transaction Codes for CA
                </p>

                <div className="grid grid-cols-8 text-xs gap-2 mt-5">
                    <p className='col-span-2 text-red-600'>Customer Number</p>
                    <p></p>
                    <p>DRS</p>
                    <p className='col-span-2'></p>
                    <p>1 1 DRS, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'></p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'></p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>BOG</p>
                    <p>1 1 BOG,HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                    <p>DSM</p>
                    <p className='col-span-2'>Employee Purchase Scheme</p>
                    <p>1 1 DSM, HO</p>
                    <p className="text-orange-600 underline cursor-pointer">Delete</p>
                </div>


            </div>
        </>
    )
}

export default Transaction
