
import { FcSearch } from 'react-icons/fc';
import ItemLayout from './ItemLayout';


const GSItem = () => {
    return (
        <>

            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Item Master</p>
                <ItemLayout />
                <div className="flex w-full gap-1.5 pt-5">
                    <div className="w-4/5 border">
                        <div className="flex w-full">
                            <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Show</p>
                            <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Top</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Previous</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Next</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Bottom</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Add</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Update</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Delete</p>
                            <p className='bg-customBlue px-1 text-white pb-1 font-semibold'>-</p>
                        </div>


                        <div className="pt-3">
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <div className="float-end flex px-2 text-labelBlue">
                                        <p>Item Code</p>
                                        <div className="text-lg">
                                            <FcSearch />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-1/2 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Description</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-full px-1 text-sm rounded border border-black focus:bg-focusColor' required />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Long Description</p>
                                </div>
                                <div className="w-2/3">
                                    <textarea name="" className='w-full h-20 px-1 text-sm rounded border border-black focus:bg-focusColor' id=""></textarea>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Bar Code</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Visibility</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <input type="checkbox" name="" id="hideitem" />
                                        <label for="hideitem" className='ml-1'> Hide Item?</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Stock Type</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <div className="">
                                            <input type="radio" name="stock_type" id="nonstock" value="Non-Stock" checked />
                                            <label for="nonstock"> Non-Stock</label><br></br>
                                            <input type="radio" name="stock_type" id="indent" value="Indent" />
                                            <label for="indent"> Indent</label><br></br>
                                        </div>
                                        <div className="">
                                            <input type="radio" name="stock_type" id="manufactured" />
                                            <label for="manufactured"> Manufactured</label><br></br>
                                            <input type="radio" name="stock_type" id="online-service" value="Online-Service" />
                                            <label for="online-service"> Online-Service</label><br></br>
                                        </div>
                                        <div className="">
                                            <input type="radio" name="stock_type" id="stock-n-sell" value="Stock-N-Sell" />
                                            <label for="stock-n-sell"> Stock-N-Sell</label><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Stocking Unit</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Item Group</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Item Class</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Item Category</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Brand</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Tax Category</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Opening Qty</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Cost</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Selling Price</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/5">
                    </div>
                </div>
            </div>

        </>
    );
};

export default GSItem;