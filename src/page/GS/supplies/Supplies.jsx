import { useLocation } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';
import SuppliesLayout from './SuppliesLayout';

const GSSuppiles = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Global Setting Supplier";
    }, [location]);

    const datas = [1, 2, 3, 4]
    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Supplier Master</p>
                </div>
                <SuppliesLayout />

                <div className="flex">
                    <div className="w-4/5">
                        <div className="font-semibold border border-[#C0C0C0]">
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

                            <div className="grid grid-cols-3 gap-2 px-2 pb-2">
                                {/* Customer Number */}
                                <div className="flex gap-1">
                                    <div className="w-2/5">
                                        <div className="flex justify-end items-center text-xs text-labelBlue">
                                            <p>Supplier <br /> Number</p>
                                            <div className="text-lg">
                                                <FcSearch />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/5">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                                    </div>
                                </div>
                                {/* Short Name */}
                                <div className="flex gap-1">
                                    <div className="w-2/5">
                                        <div className="flex justify-end items-center text-xs text-labelBlue">
                                            <p>Short Name</p>
                                            <div className="text-lg">
                                                <FcSearch />
                                            </div>
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
                                            <p>Name</p>
                                            <div className="text-lg">
                                                <FcSearch />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/5">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Address 1 */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Address 1</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Address 2 */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Address 2</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* City */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>City</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* State/Province */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>State/Province</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Zip/Postal Code */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Zip/Postal <br /> Code</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Country */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Country</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="Bangladesh" selected>Bangladesh</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Saluation */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Saluation</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                                <option value="select" selected>Select</option>
                                                <option value="Dr">Dr</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Ms">Ms</option>
                                                <option value="Prof">Prof</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* First Name */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>First Name</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Middle Name */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Middle Name</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Last Name */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Last Name</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Title */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Title</p>
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
                                {/* Phone */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Phone</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                              
                                {/* Fax */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Fax</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Url */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Url</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Id */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Id</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Tax Number */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Tax Number</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Control Account-AR */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Control <br /> Account-AR</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="10204001" selected>10204001</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Customer Group */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Control  <br /> Account-GIT</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="control" id="control" className='border border-black rounded text-xs' required>
                                                <option value="20103005" selected>20103005</option>
                                                <option value="20105001">20105001</option>
                                                <option value="20105002">20105002</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Supply Group */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Supplier Group</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="suppliergroup" id="suppliergroup" className='border border-black rounded text-xs'>
                                                <option value="00005">00005</option>
                                                <option value="Trade Creditor">Trade Creditor</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Price Group */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Price Group</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                                <option value="Corporate Sales Price">Corporate Sales Price</option>
                                                <option value="Cost Price">Cost Price</option>
                                                <option value="Franchise Sales Price">Franchise Sales Price</option>
                                                <option value="Franchise Walking Sales Price">Franchise Walking Sales Price</option>
                                                <option value="Retails Sales Price">Retails Sales Price</option>
                                                <option value="Trade Price">Trade Price</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* SIC Code */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>SIC Code</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                                <option value="select1">Select1</option>
                                                <option value="select2">Select2</option>
                                                <option value="select3">Select3</option>
                                                <option value="select4">Select4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Tax Scope */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Tax Scope</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="Exempted" selected>Exempted</option>
                                                <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                                <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                 {/* Supplier Status */}
                                 <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Supplier <br /> Status</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <div className="">
                                                <input type="radio" name="stock_type" id="Held" value="Held" />
                                                <label for="Held"> Held</label><br />
                                                <input type="radio" name="stock_type" id="Legal" value="Legal" />
                                                <label for="Legal"> Legal</label><br />
                                                <input type="radio" name="stock_type" id="Open" value="Open" checked />
                                                <label for="Open"> Open</label><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Credit Limit</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Credit Available */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Credit Available</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                               
                                {/* Credit Terms */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Credit Terms</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                          
                               
                              
                                {/* Discount  */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Discount %</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Agent */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Agent</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Commission  */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Commission %</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>


                                 {/* *Currency */}
                                 <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>**Currency</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="bdt" selected>BDT</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                 {/* Location */}
                                 <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Location</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="Exempted" selected>Exempted</option>
                                                <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                                <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                               {/* License  */}
                               <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>License</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                               {/* Expiration Date  */}
                               <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Expiration Date</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="date" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>
                                {/* Permit Approval */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Permit  <br /> Approval</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <div className="">
                                                <input type="radio" name="permit_type" id="1-Automatic" value="1-Automatic" />
                                                <label for="1-Automatic"> 1-Automatic
                                                </label><br />
                                                <input type="radio" name="permit_type" id="2-Manual" value="2-Manual" />
                                                <label for="2-Manual"> 2-Manual</label><br />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               {/* Buyer  */}
                               <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-labelBlue'>Buyer</p>
                                    </div>
                                    <div className="w-2/3">
                                        <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                                    </div>
                                </div>

                                {/* Delivery Zone */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Delivery Zone</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="Exempted" selected>Exempted</option>
                                                <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                                <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Time Slot */}
                                <div className="flex gap-1">
                                    <div className="w-1/3">
                                        <p className='float-end text-xs text-customRed'>*Time Slot</p>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="flex">
                                            <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                                <option value="Exempted" selected>Exempted</option>
                                                <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                                <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Instructions */}
                                <div className="flex gap-1 col-span-2">
                                    <div className="w-1/4">
                                        <p className='float-end text-xs text-labelBlue'>Payment Instructions</p>
                                    </div>
                                    <div className="w-3/4">
                                        <textarea name="" id="" rows="1" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor'></textarea>
                                    </div>
                                </div>
                               
                            </div>

                        </div>
                    </div>
                    <div className="w-1/5">
                        <div className="bg-slate-100">
                            <div className="flex justify-between items-center p-2">
                                <div className="flex justify-start items-center">
                                    <div className="text-blue-600 border border-slate-300">|{"<"}</div>
                                    <div className="text-blue-600 border border-slate-300">{"<"}</div>
                                </div>
                                <div className="">
                                    <p className='text-xs font-semibold text-customBlue '>Suppliers</p>
                                </div>
                                <div className="flex justify-start items-center">
                                    <input type="number" value={20} className='w-10 border border-black rounded focus:bg-focusColor' />
                                    <div className="text-blue-600 border border-slate-300">{">"}</div>
                                    <div className="text-blue-600 border border-slate-300">{">"}|</div>
                                </div>
                            </div>
                            <div className="text-[10px]">
                                <table>
                                    <thead>
                                        <tr className='border border-white text-customBlue underline'>
                                            <th>Supplier Number</th>
                                            <th>Name</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((data) => (
                                            <tr key={data.id} className='border border-white'>
                                                <td className='text-customBlue bg-emerald-200 underline'>{data.customerCode || "SUP-000001"}</td>
                                                <td>{data.customerName || "Walk in Customer"}</td>
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

export default GSSuppiles;