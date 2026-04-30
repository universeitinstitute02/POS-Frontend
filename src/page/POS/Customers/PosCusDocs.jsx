import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCusDocs = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers Docs";
    }, [location]);

    return (
        <div className="container mx-auto">
            <div className="pt-5 text-blue-500 font-semibold pb-2 text-center">
                Customer Docs
            </div>

            <PosCustomersLayout />

            <div className="font-semibold border border-[#C0C0C0] pb-2 mt-4">
                {/* Action Buttons */}
                <div className="flex justify-center text-sm gap-1 flex-wrap p-2">
                    {["Show", "Clear"].map(btn => (
                        <p key={btn} className="bg-[#8440A9] text-white px-2 py-1 font-semibold cursor-pointer">{btn}</p>
                    ))}
                    {["Top", "Previous", "Next", "Bottom"].map(btn => (
                        <p key={btn} className="bg-[#99A940] hover:bg-[#C7D276] text-black px-2 py-1 cursor-pointer">{btn}</p>
                    ))}
                    {["Add", "Update", "Delete"].map(btn => (
                        <p key={btn} className="bg-[#A98540] hover:bg-[#CEB37F] text-white px-2 py-1 cursor-pointer">{btn}</p>
                    ))}
                    <p className='bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 cursor-pointer'>+</p>
                </div>

                {/* Docs Form */}
                <div className="grid grid-cols-3 gap-4 p-4">
                    {/* Order Number */}
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-xs text-labelBlue flex items-center justify-end gap-1">
                            <p>Order <br /> Number</p>
                            <FcSearch className="text-lg" />
                        </div>
                        <div className="w-2/3">
                            <input type="text" value={0} autoFocus className="w-20 px-1 text-sm border border-black rounded focus:bg-focusColor" />
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-xs text-labelBlue text-right">File Name</div>
                        <div className="w-2/3">
                            <input type="file" className='w-full border text-sm border-black rounded focus:bg-focusColor' />
                        </div>
                    </div>

                    {/* Active */}
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Active</div>
                        <div className="w-2/3">
                            <input type="checkbox" id="activate" checked />
                            <label htmlFor="activate" className="ml-1">Activate?</label>
                        </div>
                    </div>

                    {/* Default Folder */}
                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-xs text-labelBlue text-right">Default Folder</div>
                        <div className="w-2/3">
                            <p>docs/x45645346/</p>
                        </div>
                    </div>

                    {/* Link */}
                    <div className="flex gap-2 items-center col-span-2">
                        <div className="w-1/6 text-xs text-labelBlue text-right">Link</div>
                        <div className="w-4/6">
                            <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCusDocs;