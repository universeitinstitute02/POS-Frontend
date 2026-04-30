import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SettingsLayout from './SettingsLayout';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Currencies = () => {
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
                    <div className="grid grid-cols-9 gap-2 text-xs mt-4">
                        <p className='px-2 text-red-600'>Currency</p>
                        <p className='px-2 col-span-2 text-blue-500'>Short Name</p>
                        <p className='px-2 col-span-2 text-blue-500' >Name</p>
                        <p className='text-blue-500'>Cent</p>
                        <p className='text-blue-500'>Cents</p>
                        <p className='text-blue-500'>Decimal</p>
                        <p className='text-blue-500'>Active</p>
                        <select name="" id="" className='border mx-2'>
                            <option value="bdt">BDT</option>
                            <option value="role">Role</option>
                            <option value="siccode">SIC Code</option>
                            <option value="salespersion">Sales Persion</option>
                            <option value="section">Section</option>
                            <option value="shippingcode">Shipping Code</option>
                            <option value="shippingproduct">Shipping Product</option>
                        </select>


                        <input type="text" name="code" id="" className='border col-span-2' />
                        <input type="text" name="code" id="" value="Bangladeshi Taka" className='border col-span-2' />
                        <input type="text" name="code" id="" value="paisa" className='border' />
                        <input type="text" name="code" id="" value="paisa" className='border' />
                        <input type="number" name="code" id="" value="2" className='border' />


                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" className='' />
                            <p>Activate</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 text-xs place-items-center mt-5">
                        <p className='px-2 text-red-600'>*Exchange Rate</p>
                        <p className='text-blue-500'>Exchange Rate(Sell)</p>
                        <p className='text-blue-500'>Exchange Rate(Buy)</p>
                        <p className='col-span-2 text-blue-500'>Word Formula</p>
                        <p>Active</p>
                        <p>Effectivity Date</p>
                        <p>1.0000000000</p>
                        <input type="text" name="" id="" value='1.0000000000' className='px-2 border' />
                        <input type="text" name="" id="" value='1.0000000000' className='px-2 border' />
                        <input type="text" name="" id="" className='px-2 border col-span-2' />
                        <p>Activate</p>
                        <input type="date" name="" id="" className='border' />
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
                    <div className="grid grid-cols-11 pt-2 gap-1 bg-[#F4F6F8] text-xs">
                        <p className='bg-[#A6BDBD] px-2 text-blue-500'>Currency  ⇑</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Short Name</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Name</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Cent</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Cents</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Decimal Places</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Exchange Rate</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Exchange Rate(Sell)</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Exchange Rate(Buy)</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Word Formula</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Active</p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                        <p className="bg-[#D4D6D8] text-blue-600 px-2">BDT</p>
                        <p>POS402098</p>
                        <p>Bangladeshi Taka</p>
                        <p> paisa </p>
                        <p>paisas</p>
                        <p> 2 </p>
                        <p>1.0000000000	</p>
                        <p> 1.0000000000</p>
                        <p>1.0000000000</p>
                        <p></p>
                        <p className='text-center'><input type="checkbox" name="" id="" className='text-center' /></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Currencies;