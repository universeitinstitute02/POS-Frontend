import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FcSearch } from 'react-icons/fc';

const PosItems = () => {
    return (
        <>
            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Item Master</p>

                <div className="flex w-full gap-1.5 pt-5">

                    {/* LEFT FORM */}
                    <div className="w-2/5 border">

                        {/* ACTION BAR */}
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

                            {/* ITEM CODE */}
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
                                    <input name="parent_code" type="text" className='w-1/2 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>

                            {/* PRODUCT NAME */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Description</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="product_name" type="text" className='w-full px-1 text-sm rounded border border-black focus:bg-focusColor' required />
                                </div>
                            </div>

                            {/* LONG DESCRIPTION */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Long Description</p>
                                </div>
                                <div className="w-2/3">
                                    <textarea name="sort_discription" className='w-full h-20 px-1 text-sm rounded border border-black focus:bg-focusColor'></textarea>
                                </div>
                            </div>

                            {/* BARCODE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Bar Code</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="barcode" type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>

                            {/* STOCK TYPE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Stock Type</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <div>
                                            <input type="radio" name="stock_type" value="Non-Stock" defaultChecked />
                                            <label> Non-Stock</label><br />
                                            <input type="radio" name="stock_type" value="Indent" />
                                            <label> Indent</label><br />
                                        </div>
                                        <div>
                                            <input type="radio" name="stock_type" value="Manufactured" />
                                            <label> Manufactured</label><br />
                                            <input type="radio" name="stock_type" value="Online-Service" />
                                            <label> Online-Service</label><br />
                                        </div>
                                        <div>
                                            <input type="radio" name="stock_type" value="Stock-N-Sell" />
                                            <label> Stock-N-Sell</label><br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CATEGORY */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Item Category</p>
                                </div>
                                <div className="w-2/3">
                                    <select name="category" className='px-1 text-sm rounded border border-black' required>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>

                            {/* BRAND */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Brand</p>
                                </div>
                                <div className="w-2/3">
                                    <select name="brand" className='px-1 text-sm rounded border border-black'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>

                            {/* PURCHASE PRICE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Cost</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="product_purchase_price" type="number" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' defaultValue='0.000' />
                                </div>
                            </div>

                            {/* SELLING PRICE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Selling Price</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="price" type="number" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' defaultValue='0.000' />
                                </div>
                            </div>

                            {/* DISCOUNT PRICE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Discount Price</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="discount_price" type="number" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>

                            {/* META TITLE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Meta Title</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="meta_title" type="text" className='w-full px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>

                            {/* META KEYWORD */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Meta Keyword</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="meta_keyword" type="text" className='w-full px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>

                            {/* FLASH SALE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Flash Sale</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="flashsale_feature" type="checkbox" />
                                </div>
                            </div>

                            {/* FLASH DATE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Flash Expire</p>
                                </div>
                                <div className="w-2/3">
                                    <input name="flash_sale_add_and_expire_date" type="datetime-local" className='px-1 text-sm rounded border border-black' />
                                </div>
                            </div>

                            {/* KEY FEATURE */}
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Key Feature</p>
                                </div>
                                <div className="w-2/3">
                                    <textarea name="key_feature" className='w-full h-20 px-1 text-sm rounded border border-black focus:bg-focusColor'></textarea>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE (UNCHANGED) */}
                    <div className="w-3/5">
                        <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                            <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                            <div>Item List</div>
                            <div className="flex gap-1">
                                <input type="text" value='50' className='border border-black w-12 h-4' readOnly />
                                <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                            </div>
                        </div>

                        <div className="grid grid-cols-8 gap-0.5">
                            <p className='bg-[#C6DCDD]'>Items Code</p>
                            <p className='bg-[#C6DCDD]'>Descriptions</p>
                            <p className='bg-[#C6DCDD]'>Long Description</p>
                            <p className='bg-[#C6DCDD]'>Item Group</p>
                            <p className='bg-[#C6DCDD]'>Item Class</p>
                            <p className='bg-[#C6DCDD]'>Item Category</p>
                            <p className='bg-[#C6DCDD]'>Standard Cost</p>
                            <p className='bg-[#C6DCDD]'>Standard Selling Price</p>

                            {/* STATIC DATA */}
                            <p>110033</p><p>Mobile</p><p></p><p>Finished Goods</p><p></p><p></p><p>10000</p><p>12000</p>
                        </div>

                        <div className="grid grid-cols-8 gap-0.5">
                            <div className='flex items-center gap-1 bg-[#C6DCDD]'>Count<FaArrowRightLong /></div>
                            <p className='bg-[#C6DCDD]'>29000</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PosItems;