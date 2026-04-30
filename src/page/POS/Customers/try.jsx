import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect, useRef } from 'react';

const PosCusOrders = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Customers Order";
    }, [location]);

    const datas = [
        { label: "Order Number", type: "input", value: 0 },
        {
            label: "Newsletter",
            type: "checkbox",
        },
        { label: "Customer Number", type: "input" },
        { label: "Short Name", type: "input" },
        { label: "Name", type: "input" },
        { label: "Address 1", type: "textarea" },
        { label: "City", type: "input" },
        { label: "State/Province", type: "input" },
        { label: "Zip/Postal Code", type: "input" },
        {
            label: "Country",
            type: "select",
            options: ["Bangladesh", "India", "USA"],
        },
        {
            label: "Newsletter",
            type: "checkbox",
        },
    ]

    const fieldRefs = useRef([]);

    const handleKeyDown = (e, index) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (index < fieldRefs.current.length - 1) {
                fieldRefs.current[index + 1]?.focus();
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (index > 0) {
                fieldRefs.current[index - 1]?.focus();
            }
        }
    };
    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Orders</p>
                </div>
                <PosCustomersLayout />

                <div className="font-semibold border border-[#C0C0C0] pb-2">
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
                    <div className="grid grid-cols-2 p-4">
                        {datas.map((field, index) => (
                            <div className="flex gap-1 space-y-2" key={field.label}>
                                <div className="w-1/3 pt-2">
                                    <div className={`flex float-end text-xs ${field.type === "select" ? "text-customRed" : "text-labelBlue"
                                        }`}>
                                        <p>{field.label}</p>
                                        {index === 0 && (
                                            <div className="text-lg">
                                                <FcSearch />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    {field.type === "input" && (
                                        <input
                                            type="text"
                                            className="w-full px-1 text-sm border border-black rounded focus:bg-focusColor"
                                            defaultValue={field.value || ""}
                                            ref={(el) => (fieldRefs.current[index] = el)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                        />
                                    )}
                                    {field.type === "textarea" && (
                                        <textarea
                                            className="w-full px-1 text-sm border border-black rounded focus:bg-focusColor"
                                            ref={(el) => (fieldRefs.current[index] = el)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                        />
                                    )}
                                    {field.type === "select" && (
                                        <select
                                            className="border border-black rounded text-xs"
                                            ref={(el) => (fieldRefs.current[index] = el)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                        >
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {field.type === "checkbox" && (
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            ref={(el) => (fieldRefs.current[index] = el)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Order Number */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <div className="float-end text-xs text-labelBlue flex px-2">
                                    <p>Order Number</p>
                                    <div className="text-lg">
                                        <FcSearch />
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-20 px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                            </div>
                        </div>
                        {/* Customer Number */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Customer Number</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Short Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Short Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'> Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Address 1 */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Address 1</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Address 2 */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Address 2</p>
                            </div>
                            <div className="w-2/3">
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
                        {/* State/Province */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>State/Province</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Zip/Postal Code */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Zip/Postal Code</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Country */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
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
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
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
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>First Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Middle Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Middle Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Last Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Title */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Title</p>
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
                        {/* Phone */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Phone</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Fax */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Fax</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Url */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Url</p>
                            </div>
                            <div className="w-2/3">
                                <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Id */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Id</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Tax Number */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Tax Number</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Control Account-AR */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Control Account-AR</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="10204001">10204001</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Customer Group */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Customer Group</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Franchise">Franchise</option>
                                        <option value="Retail">Retail</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Price Group */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Price Group</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
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
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>SIC Code</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Tax Scope */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Tax Scope</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="Exempted">Exempted</option>
                                        <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                        <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Customer Status */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-3">
                                <p className='float-end text-xs text-labelBlue'>Customer Status</p>
                            </div>
                            <div className="w-2/3">
                                <p>Open</p>
                            </div>
                        </div>
                        {/* Credit Limit */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Credit Limit</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Credit Rating */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Credit Rating</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Credit Terms */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Credit Terms</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Discount % */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Discount %</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Agent */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Agent</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Commission % */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Commission %</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Backorder Type */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Backorder Type</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Future Stock">Future Stock</option>
                                        <option value="None" selected>None</option>
                                        <option value="Order Now">Order Now</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Phone-Mobile */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Phone-Mobile</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        <div className=""></div>
                        {/* Payment Instructions */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Payment Instructions</p>
                            </div>
                            <div className="w-2/3">
                                <textarea name="" id="" rows="2" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor'></textarea>
                            </div>
                        </div>
                        {/* Remarks */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Remarks</p>
                            </div>
                            <div className="w-2/3">
                                <textarea name="" id="" rows="2" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor'></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PosCusOrders;