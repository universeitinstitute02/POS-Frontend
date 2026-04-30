import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect, useState } from 'react';

const PosCusOrders = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "POS Customers Order";
    }, [location]);

    // State for form fields
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

    // Placeholder button handlers
    const handleAdd = () => console.log('Add', formData);
    const handleUpdate = () => console.log('Update', formData);
    const handleDelete = () => console.log('Delete', formData);

    return (
        <div className="container mx-auto">
            <div className="pt-5 text-blue-500 font-semibold pb-2 text-center">
                Customer Orders
            </div>

            <PosCustomersLayout />

            <div className="font-semibold border border-[#C0C0C0] pb-2">
                {/* Action Buttons */}
                <div className="flex justify-center text-sm gap-1">
                    <button className="bg-[#8440A9] px-2 py-1 text-white font-semibold">Show</button>
                    <button className="bg-[#8440A9] px-2 py-1 text-white font-semibold">Clear</button>
                    <button className="px-2 py-1 text-black bg-[#99A940] hover:bg-[#C7D276]">Top</button>
                    <button className="px-2 py-1 text-black bg-[#99A940] hover:bg-[#C7D276]">Previous</button>
                    <button className="px-2 py-1 text-black bg-[#99A940] hover:bg-[#C7D276]">Next</button>
                    <button className="px-2 py-1 text-black bg-[#99A940] hover:bg-[#C7D276]">Bottom</button>
                    <button onClick={handleAdd} className="px-2 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F]">Add</button>
                    <button onClick={handleUpdate} className="px-2 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F]">Update</button>
                    <button onClick={handleDelete} className="px-2 py-1 text-white bg-[#A98540] hover:bg-[#CEB37F]">Delete</button>
                    <button className="px-2 py-1 text-white bg-blue-500 hover:bg-blue-300">+</button>
                </div>

                {/* Customer Form */}
                <div className="grid grid-cols-2 p-4 gap-y-2 gap-x-4">
                    {/* Reusable Input Row */}
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
                        <div className="flex gap-1" key={name}>
                            <div className="w-1/3 pt-2">
                                <label className="float-end text-xs text-labelBlue">{label}</label>
                                {icon && <span className="ml-1">{icon}</span>}
                            </div>
                            <div className="w-2/3">
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-1 text-sm border border-black rounded focus:bg-focusColor"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Select Fields */}
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
                        <div className="flex gap-1" key={name}>
                            <div className="w-1/3 pt-2">
                                <label className="float-end text-xs text-labelBlue">{label}</label>
                            </div>
                            <div className="w-2/3">
                                <select
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="border border-black rounded text-xs w-full"
                                >
                                    {options.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}

                    {/* Textareas */}
                    {[
                        { label: "Payment Instructions", name: "paymentInstructions" },
                        { label: "Remarks", name: "remarks" },
                    ].map(({ label, name }) => (
                        <div className="flex gap-1" key={name}>
                            <div className="w-1/3 pt-2">
                                <label className="float-end text-xs text-labelBlue">{label}</label>
                            </div>
                            <div className="w-2/3">
                                <textarea
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    rows={2}
                                    className="w-full px-1 text-sm border border-black rounded focus:bg-focusColor"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Customer Status */}
                    <div className="flex gap-1">
                        <div className="w-1/3 pt-3">
                            <label className="float-end text-xs text-labelBlue">Customer Status</label>
                        </div>
                        <div className="w-2/3">
                            <p>Open</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PosCusOrders;