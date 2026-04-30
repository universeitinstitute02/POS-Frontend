import React from 'react'
import SettingsLayout from './SettingsLayout'

const Codes = () => {
    return (
        <>
            <p className='text-center text-blue-500 font-semibold'>General Settings for Cross Application</p>
            <SettingsLayout />
            <div className="text-xs">
                <p className='text-center text-xs text-blue-400 font-semibold'>
                    Click on a Parameter to make changes to it. Remember to click on the Save button after making changes or adding a new parameter.
                </p>
                <div className="border mx-10 mt-5 pb-3">
                    <div className="flex text-white text-sm justify-center">
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Save</p>
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Refresh</p>
                        <p className='bg-blue-400 px-1'>-</p>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        <p className='px-2 text-blue-500'>Code Type</p>
                        <p className='text-blue-500'>Code</p>
                        <p className='col-span-2 text-blue-500'>Detailed Description</p>
                        <p className='text-blue-500'>Alternate Code</p>
                        <p className='text-blue-500'>Active</p>
                        <select name="" id="" className='border mx-2'>
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
                        <textarea name="" id="" className='border col-span-4 w-full h-20'></textarea>
                    </div>
                </div>

                <p className='text-center text-lg text-red-500'>
                    No Codes for CA Found
                </p>
                
            </div>
        </>
    )
}

export default Codes
