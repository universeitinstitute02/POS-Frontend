import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCustomer = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers";
    }, [location]);

    const datas = [1, 2, 3, 4];

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Master</p>
                </div>

                <PosCustomersLayout />

                <div className="flex">
                    {/* LEFT SIDE */}
                    <div className="w-4/5">
                        <div className="font-semibold border border-[#C0C0C0]">

                            {/* ACTION BAR (UNCHANGED) */}
                            <div className="flex justify-center text-sm mb-4">
                                <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Show</p>
                                <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                                <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Top</p>
                                <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Previous</p>
                                <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Next</p>
                                <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Bottom</p>
                                <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Add</p>
                                <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Update</p>
                                <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Delete</p>
                                <p className='bg-blue-600 px-1 text-white pb-1 font-semibold'>-</p>
                            </div>

                            {/* CLEANED FORM */}
                            <div className="grid grid-cols-3 gap-2 px-2 pb-2">

                                {/* Customer Number */}
                                <div className="flex gap-1">
                                    <div className="w-2/5">
                                        <div className="flex justify-end items-center text-xs text-labelBlue">
                                            <p>Customer <br /> Number</p>
                                            <FcSearch />
                                        </div>
                                    </div>
                                    <div className="w-3/5">
                                        <input type="text" value={0} className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' autoFocus />
                                    </div>
                                </div>

                                {/* Short Name */}
                                <div className="flex gap-1">
                                    <div className="w-2/5">
                                        <div className="flex justify-end items-center text-xs text-labelBlue">
                                            <p>Short Name</p>
                                            <FcSearch />
                                        </div>
                                    </div>
                                    <div className="w-3/5">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="flex gap-1">
                                    <div className="w-2/5">
                                        <div className="flex justify-end items-center text-xs text-labelBlue">
                                            <p>Name *</p>
                                            <FcSearch />
                                        </div>
                                    </div>
                                    <div className="w-3/5">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Phone</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Email</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="email" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex gap-1 col-span-2">
                                    <div className="w-1/4">
                                        <p className='float-end text-xs text-labelBlue'>Address</p>
                                    </div>
                                    <div className="w-3/4">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Customer Group */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Customer Group</p>
                                    </div>
                                    <div className="w-2/3">
                                        <select className='border border-black rounded text-xs w-full'>
                                            <option value="Retail">Retail</option>
                                            <option value="Corporate">Corporate</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Credit Limit */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Credit Limit</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="number" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Loyalty Points */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Points</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="number" defaultValue={0} readOnly className='w-full px-1 text-sm border border-black rounded bg-gray-100' />
                                    </div>
                                </div>

                                {/* Remarks */}
                                <div className="flex gap-1 col-span-2">
                                    <div className="w-1/4">
                                        <p className='float-end text-xs text-labelBlue'>Remarks</p>
                                    </div>
                                    <div className="w-3/4">
                                        <textarea rows="2" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor'></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (UNCHANGED) */}
                    <div className="w-1/5">
                        <div className="bg-slate-100">
                            <div className="flex justify-between items-center p-2">
                                <div className="flex items-center">
                                    <div className="text-blue-600 border border-slate-300">|{"<"}</div>
                                    <div className="text-blue-600 border border-slate-300">{"<"}</div>
                                </div>

                                <p className='text-xs font-semibold text-customBlue'>Customers</p>

                                <div className="flex items-center">
                                    <input type="number" value={20} className='w-10 border border-black rounded focus:bg-focusColor' />
                                    <div className="text-blue-600 border border-slate-300">{">"}</div>
                                    <div className="text-blue-600 border border-slate-300">{">"}|</div>
                                </div>
                            </div>

                            <div className="text-[10px]">
                                <table>
                                    <thead>
                                        <tr className='border border-white text-customBlue underline'>
                                            <th>Customer Number</th>
                                            <th>Name</th>
                                            <th>Short Name</th>
                                            <th>Customer Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((data, index) => (
                                            <tr key={index} className='border border-white'>
                                                <td className='text-customBlue bg-emerald-200 underline'>
                                                    CUS-000001
                                                </td>
                                                <td>Walk in Customer</td>
                                                <td></td>
                                                <td>Retail</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PosCustomer;