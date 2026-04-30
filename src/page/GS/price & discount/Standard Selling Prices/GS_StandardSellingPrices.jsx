import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GS_StandardSellingPrices = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Standard Selling Prices";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Standard Selling Prices by Unit Maintenance</p>
                </div>


                <div className="flex  justify-center">
                    <div className="font-semibold border border-[#C0C0C0] pb-2 max-w-2xl">
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
                        <div className="">
                            {/* Item Code */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <div className="float-end text-xs text-labelBlue flex px-2">
                                        <p>Item Code</p>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-64 px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                                </div>
                            </div>
                            {/* Selling Unit */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-xs text-labelBlue'>*Selling Unit</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                            <option value="[Selected]" selected>[Selected]</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Conv Factor-Selling */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <div className="float-end text-xs text-labelBlue flex px-2">
                                        <p>Conv Factor-Selling</p>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <input type="number" className='w-64 px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-xs text-labelBlue'>Currency of Price</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                            <option value="[Selected]" selected>[Selected]</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Standard List Price */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <div className="float-end text-xs text-labelBlue flex px-2">
                                        <p>Standard List Price</p>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <input type="number" className='w-64 px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GS_StandardSellingPrices;