import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCusContacts = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers Contacts";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Contacts</p>
                </div>

                <PosCustomersLayout />

                {/* TOP BAR (UNCHANGED) */}
                <div className="bg-slate-100 mb-1">
                    <div className="flex justify-center items-center text-blue-600 gap-1 text-[13px] font-[400] underline border border-slate-300">
                        {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((item, i) => (
                            <span key={i} className='hover:text-customRed'>{item}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center px-2 py-1">
                        <div className="flex items-center">
                            <div className="text-blue-600 border border-slate-300">|{"<"}</div>
                            <div className="text-blue-600 border border-slate-300">{"<"}</div>
                        </div>

                        <div className="flex items-center">
                            <input type="number" value={20} className='w-20 border border-black rounded focus:bg-focusColor' />
                            <div className="text-blue-600 border border-slate-300">{">"}</div>
                            <div className="text-blue-600 border border-slate-300">{">"}|</div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="font-semibold border border-[#C0C0C0] pb-2">

                    {/* ACTION BAR (UNCHANGED) */}
                    <div className="flex justify-center text-sm">
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                        <p className='px-1 py-[1px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>-</p>
                    </div>

                    {/* CLEANED GRID */}
                    <div className="grid grid-cols-2 p-4">

                        {/* Contact Row */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <div className="float-end text-xs text-labelBlue flex px-2">
                                    <p>Contact Row</p>
                                    <FcSearch />
                                </div>
                            </div>
                            <div className="w-2/3">
                                <input type="text" value={0} className='w-20 px-1 text-sm border border-black rounded focus:bg-focusColor' autoFocus />
                            </div>
                        </div>

                        {/* Full Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Name *</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-customRed'>*Phone</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Email</p>
                            </div>
                            <div className="w-2/3">
                                <input type="email" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex gap-1 space-y-2 col-span-2">
                            <div className="w-1/6 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Address</p>
                            </div>
                            <div className="w-5/6">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>

                        {/* City */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>City</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PosCusContacts;