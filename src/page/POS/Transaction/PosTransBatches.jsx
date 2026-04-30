import { useEffect } from 'react';
import PosTransactionLayout from './PosTransactionLayout';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import cash_logo from '../../../../public/cashier.png'

const PosTransBatches = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Batches";
    }, [location]);
    return (
        <>
            <PosTransactionLayout />

            <div className="flex text-xs gap-1 pt-3">
                <p className='text-amber-900 font-semibold'>Date</p>
                <input type="date" className='border border-black rounded' />
                <p className='bg-blue-600 text-white px-1 hover:text-yellow-400 font-semibold cursor-pointer'>Create</p>
                <p className='text-amber-900 font-semibold'>POS Batches</p>
                <input type="text" className='border border-black rounded px-1 focus:bg-focusColor' />
                <p className='bg-[#DCDCDC] text-white px-1'>Submission</p>
                <p className='bg-[#DCDCDC] text-white px-1'>Collected</p>
                <p className='bg-[#DCDCDC] text-white px-1'>Received</p>
                <p className='bg-[#DCDCDC] text-white px-1'>Post</p>
                <p className='bg-[#DCDCDC] text-white px-1'>Undo</p>
            </div>
            <div className="pt-5 text-xs">
                <div className="flex mx-14 gap-x-1">
                    <div className="w-1/5">
                        <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                            <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                            <div className="-mt-0.5">
                                Batches
                            </div>
                            <input type="text" name="" value='50' className='border border-black w-12 h-4' />
                            <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                        </div>
                        <div className="grid grid-cols-4 pt-2 gap-1 bg-[#F4F6F8]">
                            <p className='bg-[#C6DCDD] px-2 text-blue-500'>Date</p>
                            <p className='col-span-2 bg-[#A6BDBD] px-2 text-blue-500'>POS Batches</p>
                            <p className='bg-[#C6DCDD] px-2 text-blue-500'>Flag</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                            <p>
                                12/2/12
                            </p>
                            <p className="bg-[#D4D6D8] text-blue-600 col-span-2 px-2">POS402098</p>
                            <p>Posted</p>
                        </div>
                    </div>

                    <div className="w-6/12">
                        <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                            <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                            <div className="-mt-0.5">
                                Receipts - for 17/12/2024
                            </div>
                            <div className="flex gap-1">
                                <input type="text" name="" value='50' className='border border-black w-12 h-4' />
                                <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-1 pt-2 bg-[#F4F6F8]">
                            <p className='bg-[#A6BDBD] text-blue-500 px-1'>Payment Code</p>
                            <p className='col-span-2 bg-[#C6DCDD] text-blue-500'>Name</p>
                            <p className='bg-[#C6DCDD] text-blue-500 text-end'>Amt</p>
                            <p className='bg-[#D4D6D8]'>Bkash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Cash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Due</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Change</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Discount</p>
                            <p className='col-span-2'>Mr. Ashikur Rahman</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Bkash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Bkash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Bkash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                            <p className='bg-[#D4D6D8]'>Bkash</p>
                            <p className='col-span-2'>Walk In Customer</p>
                            <p className='text-end'>6200,00</p>
                        </div>
                        <div className="grid grid-cols-4 gap-1">
                            <p className='bg-[#86ADAF]'>Total</p>
                            <p className='col-span-2 bg-[#AECDCF]'></p>
                            <p className='text-end bg-[#AECDCF]'>12,0000</p>
                        </div>
                        <div className="flex pt-2">
                            <p className='bg-[#8440A9] px-2.5 text-white pb-1 font-semibold'>Clear</p>
                            <p className='bg-[#8440A9] px-2.5 text-white pb-1 font-semibold'>Show</p>
                            <p className='bg-[#99A940] px-2.5 text-black pb-1 font-semibold'>Top</p>
                            <p className='bg-[#99A940] px-2.5 text-black pb-1 font-semibold'>Previous</p>
                            <p className='bg-[#99A940] px-2.5 text-black pb-1 font-semibold'>Next</p>
                            <p className='bg-[#99A940] px-2.5 text-black pb-1 font-semibold'>Bottom</p>
                            <p className='bg-[#A98540] px-3 text-white pb-1 font-semibold'>Refresh</p>
                            <p className='bg-[#DCDCDC] px-3 text-white pb-1 font-semibold'>Delete</p>
                            <p className='bg-blue-600 px-3 text-white pb-1 font-semibold'>-</p>
                        </div>

                        <div className="border">
                            <div className="flex justify-center py-4 gap-4 text-blue-600 font-semibold">
                                <p>GL Vouchar</p>
                                <p>Invoices</p>
                                <p>Money Receive</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <div className="border border-[#008000] font-semibold">
                            <div className="flex justify-between mx-6 pt-1">
                                <p>Daily Totals</p>
                                <p className='bg-slate-600 text-white px-2'>Print</p>
                            </div>
                            <div className="text-center space-y-1 pt-5">
                                <p>Date: 17/12/2024 </p>
                                <p>Terminal: Chokoria/P100/1st Shift</p>
                                <div className="flex justify-center pt-2">
                                    <img src={cash_logo} alt="cash_logo" className='h-20' />
                                </div>
                                <p>Gold Mark Shop</p>
                                <p>Thana Raster Matha, Gulsan, Dhaka</p>
                                <p>demosite@gmail.com</p>
                                <p>Telephone 01849590995</p>
                                <p>www.posdemo.com</p>
                                <p>GST Regn No:</p>
                                <p className='pt-5'>== R E C E I P T S ==</p>
                            </div>
                            <div className="mx-5 flex flex-col space-y-1">
                                <div className="flex justify-between">
                                    <p>Total Received</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Less: Amt Returned</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p>Net Receipts</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Rounded Off</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Unsettled</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p>Total</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p>Represented By</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Net Sales</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Tax Collected</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p>Total</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-center pt-5">
                                    <p>== S A L E S ==</p>
                                 
                                </div>
                                <div className="flex justify-between">
                                    <p>Number of Transactions</p>
                                    <p>0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Net Sales</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Cost of Sales</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Gross Profit</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Gross Margin</p>
                                    <p>0%</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Average Sale</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-center pt-5">
                                    <p>== D I S C O U N T S ==</p>
                                 
                                </div>
                                <div className="flex justify-between">
                                    <p>Net Sales</p>
                                    <p>0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Discount Allowed</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Gross Sales</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Profit before Discount</p>
                                    <p>BDT 0</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Margin before Discount</p>
                                    <p>0%</p>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p>Printed By: Admin Demo</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default PosTransBatches;