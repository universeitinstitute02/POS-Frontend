import { useEffect, useState } from 'react';
import PosTransactionLayout from './PosTransactionLayout';
import { useLocation, useNavigate } from 'react-router-dom';

const PosTrans = () => {

    const location = useLocation();
    useEffect(() => {
        document.title = "POS Transaction";
    }, [location]);

    const navigate = useNavigate();

    const [showDiv, setShowDiv] = useState(false);
    const [hideDiv, setHideDiv] = useState(true);


    const handleClick = () => {
        // setShowDiv(true);
        // setHideDiv(false);
        navigate('/pos-transactions/pos-order');
    };
    return (
        <>
            <div className="container mx-auto">
                <PosTransactionLayout />

                {hideDiv && (
                    <>
                        <div className="pt-2">
                            <p className='bg-[#DDDDDD] px-2 w-16 text-sm text-white'>Change</p>
                            <div className="flex justify-center mt-10">
                                <div className="text-xs px-2 py-2 border-[1px] border-black text-blue-500">
                                    <div className="flex gap-3">
                                        <p>Location</p>
                                        <select name="action" className='border rounded border-black text-black'>
                                            <option value="chokoria">Chokoria</option>
                                            <option value="koria">Koria</option>
                                        </select>
                                        <p>Terminal Number</p>
                                        <select name="action" className="border rounded border-black text-black">
                                            <option value="p10">P10</option>
                                            <option value="p20">P20</option>
                                        </select>
                                        <p>Shift Code</p>
                                        <select name="action" className='border rounded border-black text-black'>
                                            <option value="1stshift">1st Shift</option>
                                            <option value="2ndshift">2nd Shift</option>
                                        </select>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <p className=' px-2 bg-[#C44C3B] hover:bg-[#C749B8] cursor-pointer text-white text-lg font-semibold' onClick={handleClick}>Continue</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="">
                    {showDiv && (
                        <>
                            <div className="flex text-[11px] gap-1 pt-2 text-[#C5522A] items-center">
                                <p className='text-white bg-blue-500  px-2'><span className='border-b border-white'>N</span>ew</p>
                                <div className="flex gap-1">
                                    <p>Date</p>
                                    <input type="date" name="date" id="" className='border-[1px] rounded border-black text-black' />
                                </div>
                                <div className="flex gap-1">
                                    <p>Customer Number</p>
                                    <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-28' />
                                </div>
                                <div className="flex gap-1">
                                    <p>Disc. Overall(%)</p>
                                    <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-16 px-1' value='0.0' />
                                </div>
                                <div className="flex gap-1">
                                    <p>Disc. Overall- Fixed</p>
                                    <input type="text" name="" id="" className='border-[1px] rounded border-black text-black w-16 px-1' value='0.0' />
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
                                            <select name="action" className='border! border-black'>
                                                <option value="sales">Sales</option>
                                                <option value="return">Return</option>
                                            </select>
                                            <p>Items Code</p>
                                            <input type="text" className='border border-black w-28' />
                                            <p>Qty</p>
                                            <input type="text" className='border border-black w-14 px-1' value='1' />
                                            <p>Unit Price</p>
                                            <input type="text" className='border border-black w-14 px-1' value='0.000' />
                                            <p>Disc%</p>
                                            <input type="text" className='border border-black w-14 px-1' value='0.000' />
                                            <p>Fixed Disc</p>
                                            <input type="text" className='border border-black w-14 px-1' value='0.000' />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/5">
                                    <div className="border text-2xl bg-[#FFC0CB] text-[#800021] font-bold">
                                        <div className="flex justify-between border-[.5px]  border-black">
                                            <p>Rounded Total</p>
                                            <p className='bg-[#F5F5DC] px-1'>0</p>
                                        </div>
                                        <div className="flex justify-between border-[.5px] border-t-0 border-black">
                                            <p>Tendered</p>
                                            <p className='bg-[#F5F5DC] px-1'>0</p>
                                        </div>
                                        <div className="flex justify-between border-[.5px] border-t-0 border-black">
                                            <p>Change</p>
                                            <p className='bg-[#F5F5DC] px-1'>0</p>
                                        </div>
                                        <div className="flex justify-between border-[.5px] border-t-0  border-black">
                                            <p>Due</p>
                                            <p className='bg-[#F5F5DC] px-1'>0</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default PosTrans;