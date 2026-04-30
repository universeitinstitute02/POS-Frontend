import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCusDeliveryAddress = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers Delivery Address";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Delivery Address</p>
                </div>

                <PosCustomersLayout />

                {/* TOP BAR SAME */}
                <div className="bg-slate-100 mb-1">
                    <div className="flex justify-center items-center text-blue-600 gap-1 text-[13px] underline border border-slate-300">
                        {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((i, idx) => (
                            <span key={idx} className="hover:text-customRed">{i}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center px-2 py-1">
                        <div className="flex">
                            <div className="text-blue-600 border border-slate-300">|{"<"}</div>
                            <div className="text-blue-600 border border-slate-300">{"<"}</div>
                        </div>
                        <div className="flex">
                            <input type="number" value={20} className='w-20 border border-black rounded' />
                            <div className="text-blue-600 border border-slate-300">{">"}</div>
                            <div className="text-blue-600 border border-slate-300">{">"}|</div>
                        </div>
                    </div>
                </div>

                <div className="font-semibold border border-[#C0C0C0] pb-2">

                    {/* ACTION BAR SAME */}
                    <div className="flex justify-center text-sm">
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1'>Clear</p>
                        <p className='bg-[#99A940] px-2'>Top</p>
                        <p className='bg-[#99A940] px-2'>Previous</p>
                        <p className='bg-[#99A940] px-2'>Next</p>
                        <p className='bg-[#99A940] px-2'>Bottom</p>
                        <p className='bg-[#A98540] px-2 text-white'>Add</p>
                        <p className='bg-blue-500 px-1 text-white'>-</p>
                    </div>

                    {/* CLEAN GRID */}
                    <div className="grid grid-cols-3 gap-2 px-2 pb-2">

                        {/* Address ID */}
                        <div className="flex gap-1">
                            <div className="w-2/5 flex justify-end items-center text-xs text-labelBlue">
                                <p>Address ID</p>
                                <FcSearch />
                            </div>
                            <div className="w-3/5">
                                <input type="text" value={0} className='w-full border border-black rounded' autoFocus />
                            </div>
                        </div>

                        {/* Name */}
                        <div className="flex gap-1">
                            <div className="w-2/5 flex justify-end text-xs text-labelBlue">
                                <p>Name *</p>
                            </div>
                            <div className="w-3/5">
                                <input type="text" className='w-full border border-black rounded' />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-1">
                            <div className="w-2/5 flex justify-end text-xs text-customRed">
                                <p>*Phone</p>
                            </div>
                            <div className="w-3/5">
                                <input type="text" className='w-full border border-black rounded' />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex gap-1 col-span-2">
                            <div className="w-1/4 flex justify-end text-xs text-labelBlue">
                                <p>Address</p>
                            </div>
                            <div className="w-3/4">
                                <input type="text" className='w-full border border-black rounded' />
                            </div>
                        </div>

                        {/* City */}
                        <div className="flex gap-1">
                            <div className="w-2/5 flex justify-end text-xs text-labelBlue">
                                <p>City</p>
                            </div>
                            <div className="w-3/5">
                                <input type="text" className='w-full border border-black rounded' />
                            </div>
                        </div>

                        {/* Delivery Note */}
                        <div className="flex gap-1 col-span-2">
                            <div className="w-1/4 flex justify-end text-xs text-labelBlue">
                                <p>Note</p>
                            </div>
                            <div className="w-3/4">
                                <input type="text" className='w-full border border-black rounded' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PosCusDeliveryAddress;