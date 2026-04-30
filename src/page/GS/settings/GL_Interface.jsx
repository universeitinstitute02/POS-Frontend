import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SettingsLayout from './SettingsLayout';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const GL_interface = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Customers Docs";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Docs</p>
                </div>
                <SettingsLayout />
                <p className='text-center text-xs text-blue-400 font-semibold'>
                    Click on a Transaction Code to make changes to it. Remember to click on the Save button after making the changes.
                </p>

                <div className="font-semibold border border-[#C0C0C0] pb-2 mt-4">
                    <div className="flex justify-center text-sm">
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Show</p>
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Update</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Delete</p>
                        <p className='px-1 py-[1px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>+</p>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-xs mt-4">
                        <p className='px-2 text-blue-500 col-span-2'>GL Interface Type</p>
                        <p className='px-2  text-blue-500'>items Group</p>
                        <p className='px-2 col-span-2 text-blue-500' >Customer/Supplier/Agent Group Retail</p>
                        <p className='text-blue-500'>Warehouse</p>
                        
                        
                        <p className='text-blue-500'>Active</p>
                        <select name="" id="" className='border mx-2  '>
                            <option value="costofsale">Cost Of Sale</option>
                            <option value="discount">Discount</option>
                            <option value="returns">Returns</option>
                            <option value="sales">Sales</option>
                            <option value="work_in_progress_fg">Work In Progress-FG</option>
                            <option value="work_in_progress_rm">Work In Progress-RM</option>
                            <option value="commission">Commission</option>
                        </select>
                        <select name="" id="" className='border mx-2  col-span-2'>
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                        <select name="" id="" className='border mx-2  col-span-2'>
                            <option value="retail">Retail</option>
                            <option value="00005">00005</option>
                            <option value="corpoate">Corpoate</option>
                            <option value="salespersion">Sales Persion</option>
                        </select>


                        <select name="" id="" className='border mx-2'>
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                       
                        


                       <input type="text" name="account" className='border' value="40101002" />
                    </div>
                </div>

                <div className="">
                    <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                        <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                        <div className="flex gap-2">
                           
                        <input type="text" name="" value='50' className='border border-black w-12 h-4' />
                        <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 pt-2 gap-1 bg-[#F4F6F8] text-xs">
                        <p className='bg-[#A6BDBD] px-2 text-blue-500'>GL Interface Type  ⇑</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Item Group</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Customer/Supplier/Agent Group</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Warehouse</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Account</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Delete</p>
               
                        <p>Cost of Sales</p>
                        <p>Finished Goods</p>
                        <p>Retail</p>
                        <p>General Store</p>
                        <p> 40101002 </p>
                        <p>Delete</p>
                        <p>Cost of Sales</p>
                        <p>Finished Goods</p>
                        <p>Retail</p>
                        <p>General Store</p>
                        <p> 40101002 </p>
                        <p>Delete</p>
                        <p>Cost of Sales</p>
                        <p>Finished Goods</p>
                        <p>Retail</p>
                        <p>General Store</p>
                        <p> 40101002 </p>
                        <p>Delete</p>
                        <p>Cost of Sales</p>
                        <p>Finished Goods</p>
                        <p>Retail</p>
                        <p>General Store</p>
                        <p> 40101002 </p>
                        <p>Delete</p>
                       
                       
                       
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default GL_interface;