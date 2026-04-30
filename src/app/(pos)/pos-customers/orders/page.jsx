"use client";

import { useEffect, useState } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';

const PosCusOrders = () => {
    useEffect(() => {
        document.title = "POS Customers Order";
    }, []);

    const [formData, setFormData] = useState({
        orderNumber: '',
        customerNumber: '',
        shortName: '',
        name: '',
        address1: '',
        address2: '',
        city: '',
        stateProvince: '',
        zip: '',
        country: 'Bangladesh',
        salutation: '',
        firstName: '',
        middleName: '',
        lastName: '',
        title: '',
        email: '',
        phone: '',
        fax: '',
        url: '',
        id: '',
        taxNumber: '',
        controlAccount: '',
        customerGroup: '',
        priceGroup: '',
        sicCode: '',
        taxScope: '',
        creditLimit: '',
        creditRating: '',
        creditTerms: '',
        discount: '',
        agent: '',
        commission: '',
        backorderType: 'None',
        phoneMobile: '',
        paymentInstructions: '',
        remarks: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4 text-center text-lg">
                Customer Orders
            </div>

            <PosCustomersLayout />

            <div className="font-semibold border border-gray-300 bg-white rounded shadow-sm pb-6 mt-6">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs border-b border-gray-200 py-1 mb-6 flex-wrap gap-px">
                    <button className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388] transition-colors border-r border-gray-200">Show</button>
                    <button className="bg-[#8440A9] text-white px-4 py-1 font-semibold hover:bg-[#6a3388] transition-colors border-r border-gray-200">Clear</button>
                    <button className="px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] border-r border-gray-200">Top</button>
                    <button className="px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] border-r border-gray-200">Previous</button>
                    <button className="px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] border-r border-gray-200">Next</button>
                    <button className="px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] border-r border-gray-200">Bottom</button>
                    <button className="px-4 py-1 text-white bg-[#A98540] hover:bg-[#8e6f35] border-r border-gray-200">Add</button>
                    <button className="px-4 py-1 text-white bg-[#A98540] hover:bg-[#8e6f35] border-r border-gray-200">Update</button>
                    <button className="px-4 py-1 text-white bg-[#A98540] hover:bg-[#8e6f35] border-r border-gray-200">Delete</button>
                    <button className="px-6 py-1 text-white bg-blue-600 hover:bg-blue-700 flex-grow md:flex-grow-0">+</button>
                </div>

                {/* FORM */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3 px-8 text-[11px]">
                    {[
                        { label: "Order Number", name: "orderNumber", type: "text", icon: <FcSearch /> },
                        { label: "Customer Number", name: "customerNumber", type: "text" },
                        { label: "Short Name", name: "shortName", type: "text" },
                        { label: "Name", name: "name", type: "text" },
                        { label: "Address 1", name: "address1", type: "text" },
                        { label: "Address 2", name: "address2", type: "text" },
                        { label: "City", name: "city", type: "text" },
                        { label: "State/Province", name: "stateProvince", type: "text" },
                        { label: "Zip/Postal Code", name: "zip", type: "text" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Phone", name: "phone", type: "text" },
                        { label: "Fax", name: "fax", type: "text" },
                        { label: "Url", name: "url", type: "url" },
                        { label: "Id", name: "id", type: "text" },
                        { label: "Tax Number", name: "taxNumber", type: "text" },
                        { label: "Credit Limit", name: "creditLimit", type: "text" },
                        { label: "Credit Terms", name: "creditTerms", type: "text" },
                        { label: "Discount %", name: "discount", type: "text" },
                        { label: "Agent", name: "agent", type: "text" },
                        { label: "Commission %", name: "commission", type: "text" },
                        { label: "Phone-Mobile", name: "phoneMobile", type: "text" },
                    ].map(({ label, name, type, icon }) => (
                        <div className="flex gap-2 items-center" key={name}>
                            <div className="w-1/3 text-right flex items-center justify-end gap-1 text-[#1B71A2] font-semibold">
                                <label>{label}</label>
                                {icon && <span className="text-sm">{icon}</span>}
                            </div>
                            <div className="w-2/3">
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-2 py-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor"
                                />
                            </div>
                        </div>
                    ))}

                    {[
                        { label: "Country", name: "country", options: ["Bangladesh"] },
                        { label: "Salutation", name: "salutation", options: ["Select", "Dr", "Mr", "Mrs", "Ms", "Prof"] },
                        { label: "Control Account-AR", name: "controlAccount", options: ["Select", "10204001"] },
                        { label: "Customer Group", name: "customerGroup", options: ["Select", "Corporate", "Franchise", "Retail"] },
                        { label: "Price Group", name: "priceGroup", options: ["Select", "Corporate Sales Price", "Cost Price", "Franchise Sales Price", "Franchise Walking Sales Price", "Retails Sales Price", "Trade Price"] },
                        { label: "SIC Code", name: "sicCode", options: ["Select", "Select1", "Select2", "Select3", "Select4"] },
                        { label: "Tax Scope", name: "taxScope", options: ["Select", "Exempted", "Mushak 11 ka-Local", "Mushak 11-Imported"] },
                        { label: "Credit Rating", name: "creditRating", options: ["Select", "A", "B", "C", "D", "E"] },
                        { label: "Backorder Type", name: "backorderType", options: ["Future Stock", "None", "Order Now"] },
                    ].map(({ label, name, options }) => (
                        <div className="flex gap-2 items-center" key={name}>
                            <div className="w-1/3 text-right text-[#1B71A2] font-semibold"><label>{label}</label></div>
                            <div className="w-2/3">
                                <select
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-2 py-1 border border-gray-400 rounded outline-none"
                                >
                                    {options.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}

                    {[
                        { label: "Payment Instructions", name: "paymentInstructions" },
                        { label: "Remarks", name: "remarks" },
                    ].map(({ label, name }) => (
                        <div className="flex gap-2 items-start" key={name}>
                            <div className="w-1/3 text-right text-[#1B71A2] font-semibold pt-1"><label>{label}</label></div>
                            <div className="w-2/3">
                                <textarea
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    rows={2}
                                    className="w-full px-2 py-1 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="flex gap-2 items-center">
                        <div className="w-1/3 text-right text-[#1B71A2] font-semibold"><label>Status</label></div>
                        <div className="w-2/3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Open</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosCusOrders;
