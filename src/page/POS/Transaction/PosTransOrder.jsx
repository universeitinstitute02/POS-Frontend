import { useEffect } from 'react';
import PosTransactionLayout from './PosTransactionLayout';
import { useLocation } from 'react-router-dom';

const PosTransOrder = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Transaction Order";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <PosTransactionLayout />

                <div className="">
                    <div className="flex text-[11px] gap-1 pt-2 text-[#C5522A] items-center">
                        <p className='text-white bg-blue-500  px-2'><span className='border-b border-white'>N</span>ew</p>
                        <div className="flex gap-1">
                            <p>Date</p>
                            <input type="date" name="date" id="" className='border-[1px] rounded border-black text-black' />
                        </div>
                        <div className="flex gap-1">
                            <p>Customer Number</p>
                            <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-28 px-1 focus:bg-focusColor' />
                        </div>
                        <div className="flex gap-1">
                            <p>Disc. Overall(%)</p>
                            <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-16 px-1 focus:bg-focusColor' value='0.0' />
                        </div>
                        <div className="flex gap-1">
                            <p>Disc. Overall- Fixed</p>
                            <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-16 px-1 focus:bg-focusColor' value='0.0' />
                        </div>
                        <p className='bg-[#DCDCDC] px-1 pb-[1px] text-sm  text-white'>Change</p>
                        <p className='bg-blue-500 px-1 pb-[1px] text-sm  text-white'>Initialize</p>
                        <p className='bg-blue-500 px-1 pb-[1px] text-sm  text-white'>Load_Item</p>
                        <p className='bg-blue-500 px-1 pb-[1px] text-sm  text-white'>Reset Discount</p>
                    </div>
                    <div className="text-xs flex pt-2">
                        <div className="w-4/5">
                            <div className="font-semibold border border-[#C0C0C0]">
                                <div className="flex justify-center">
                                    <p className='px-2 py-[2px] text-white bg-[#8440A9] hover:bg-[#BC90D5] cursor-pointer'>Clear</p>
                                    <p className='px-2 py-[2px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                                    <p className='px-2 py-[2px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                                    <p className='px-2 py-[2px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                                    <p className='px-2 py-[2px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                                    <p className='px-2 py-[2px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                                    <p className='px-2 py-[2px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Update</p>
                                    <p className='px-2 py-[2px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Delete</p>
                                    <p className='px-1 py-[2px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>-</p>
                                </div>
                                <div className="flex gap-2 px-2 pt-3">
                                    <p>Row</p>
                                    <p>0</p>
                                    <label for="Action">Action</label>
                                    <select name="action" className='rounded border border-black'>
                                        <option value="sales">Sales</option>
                                        <option value="return">Return</option>
                                    </select>
                                    <p>Items Code</p>
                                    <input type="text" className='rounded border border-black w-28 px-1 focus:bg-focusColor' autoFocus/>
                                    <p>Qty</p>
                                    <input type="text" className='rounded border border-black w-14 px-1 focus:bg-focusColor' value='1' />
                                    <p>Unit Price</p>
                                    <input type="text" className='rounded border border-black w-14 px-1 focus:bg-focusColor' value='0.000' />
                                    <p>Disc%</p>
                                    <input type="text" className='rounded border border-black w-14 px-1 focus:bg-focusColor' value='0.000' />
                                    <p>Fixed Disc</p>
                                    <input type="text" className='rounded border border-black w-14 px-1 focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="border text-2xl bg-[#FFC0CB] text-[#800021] font-bold">
                                <div className="flex justify-between border-[.5px]  border-black">
                                    <p>Rounded Total</p>
                                    <p className='bg-[#F5F5DC] px-1 focus:bg-focusColor'>0</p>
                                </div>
                                <div className="flex justify-between border-[.5px] border-t-0 border-black">
                                    <p>Tendered</p>
                                    <p className='bg-[#F5F5DC] px-1 focus:bg-focusColor'>0</p>
                                </div>
                                <div className="flex justify-between border-[.5px] border-t-0 border-black">
                                    <p>Change</p>
                                    <p className='bg-[#F5F5DC] px-1 focus:bg-focusColor'>0</p>
                                </div>
                                <div className="flex justify-between border-[.5px] border-t-0  border-black">
                                    <p>Due</p>
                                    <p className='bg-[#F5F5DC] px-1 focus:bg-focusColor'>0</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PosTransOrder;