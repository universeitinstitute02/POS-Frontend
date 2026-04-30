import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCusShippingMethods = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers Shipping Methods";
    }, [location]);

    return (
        <div className="container mx-auto">
            <div className="pt-5 text-blue-500 font-semibold pb-2">
                <p className='text-center'>Customer Shipping Method</p>
            </div>

            <PosCustomersLayout />

            {/* Pagination */}
            <div className="bg-slate-100 mb-1">
                <div className="flex justify-center items-center text-blue-600 gap-1 text-[13px] underline border border-slate-300">
                    {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
                        .split(" ")
                        .map((item, i) => (
                            <span key={i} className="hover:text-customRed cursor-pointer">{item}</span>
                        ))}
                </div>

                <div className="flex justify-between items-center px-2 py-1">
                    <div className="flex">
                        <div className="text-blue-600 border px-1">|{"<"}</div>
                        <div className="text-blue-600 border px-1">{"<"}</div>
                    </div>

                    <div className="flex items-center">
                        <input type="number" value={20} className='w-20 border border-black rounded focus:bg-focusColor' readOnly />
                        <div className="text-blue-600 border px-1">{">"}</div>
                        <div className="text-blue-600 border px-1">{">"}|</div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="font-semibold border border-[#C0C0C0] pb-2">

                {/* Actions */}
                <div className="flex justify-center text-sm pb-4">
                    <p className='bg-[#8440A9] px-2 text-white cursor-pointer'>Clear</p>
                    <p className='px-2 bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                    <p className='px-2 bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                    <p className='px-2 bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                    <p className='px-2 bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                    <p className='px-2 text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                    <p className='px-2 text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>-</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-2 px-2 pb-2">

                    {/* Shipping Method */}
                    <div className="flex gap-1">
                        <div className="w-2/5 flex justify-end items-center text-xs text-labelBlue">
                            <p>Shipping Method</p>
                            <FcSearch />
                        </div>
                        <div className="w-3/5">
                            <input type="text" className='w-full border border-black rounded text-sm px-1 focus:bg-focusColor' autoFocus />
                        </div>
                    </div>

                    {/* Shipping Code */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Shipping Code</div>
                        <div className="w-2/3">
                            <select className='border border-black rounded text-xs w-full'>
                                <option>Select</option>
                                <option>DHL</option>
                                <option>Pickup</option>
                                <option>Van</option>
                            </select>
                        </div>
                    </div>

                    {/* Shipping Product */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Shipping Product</div>
                        <div className="w-2/3">
                            <select className='border border-black rounded text-xs w-full'>
                                <option>Select</option>
                            </select>
                        </div>
                    </div>

                    {/* Contact Name */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Contact Name</div>
                        <div className="w-2/3">
                            <input type="text" className='w-full border border-black rounded text-sm px-1 focus:bg-focusColor' />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Phone</div>
                        <div className="w-2/3">
                            <input type="text" className='w-full border border-black rounded text-sm px-1 focus:bg-focusColor' />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Email</div>
                        <div className="w-2/3">
                            <input type="email" className='w-full border border-black rounded text-sm px-1 focus:bg-focusColor' />
                        </div>
                    </div>

                    {/* Country */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-customRed text-right">*Country</div>
                        <div className="w-2/3">
                            <select className='border border-black rounded text-xs w-full'>
                                <option>Bangladesh</option>
                            </select>
                        </div>
                    </div>

                    {/* Residence */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Residence?</div>
                        <div className="w-2/3 flex items-center">
                            <input type="checkbox" /> <span className="ml-1 text-xs">Yes</span>
                        </div>
                    </div>

                    {/* Saturday Delivery */}
                    <div className="flex gap-1">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Saturday Delivery?</div>
                        <div className="w-2/3 flex items-center">
                            <input type="checkbox" /> <span className="ml-1 text-xs">Yes</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PosCusShippingMethods;