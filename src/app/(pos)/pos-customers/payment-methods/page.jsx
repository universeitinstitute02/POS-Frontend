"use client";

import { useEffect, useState } from 'react';
import PosCustomersLayout from '@/components/PosCustomersLayout';

const PosCusPaymentMethods = () => {
    const [form, setForm] = useState({
        payment_method: '',
        account_name: '',
        phone: ''
    });

    useEffect(() => {
        document.title = "POS Customers Payment Methods";
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment Method Data:", form);
    };

    return (
        <div className="container mx-auto px-2">
            <div className="pt-5 text-blue-600 font-bold pb-4">
                <p className='text-center text-lg'>Customer Payment Method</p>
            </div>

            <PosCustomersLayout />

            {/* TOP BAR */}
            <div className="bg-gray-100 mb-2 border border-gray-300 rounded shadow-sm overflow-hidden">
                <div className="flex justify-center items-center text-blue-600 gap-1 text-[11px] font-medium underline py-1 border-b border-gray-200 bg-white flex-wrap px-2">
                    {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((item, i) => (
                        <span key={i} className='hover:text-red-600 cursor-pointer p-0.5'>{item}</span>
                    ))}
                </div>

                <div className="flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-1">
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">|&lt;</button>
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&lt;</button>
                    </div>

                    <div className="flex items-center gap-1">
                        <input type="number" defaultValue={20} className='w-16 border border-gray-400 rounded px-2 py-0.5 focus:bg-focusColor outline-none' readOnly />
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;</button>
                        <button className="text-blue-600 border border-gray-300 px-2 py-0.5 bg-white hover:bg-gray-50 rounded shadow-sm">&gt;|</button>
                    </div>
                </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="font-semibold border border-gray-300 bg-white rounded shadow-sm pb-6">
                {/* ACTION BAR */}
                <div className="flex justify-center text-xs border-b border-gray-200 py-1 mb-6 flex-wrap gap-1">
                    <button type="reset" className='px-4 py-1 text-white bg-[#8440A9] hover:bg-[#6a3388] rounded transition-colors'>Clear</button>
                    <button type="button" className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Top</button>
                    <button type="button" className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Previous</button>
                    <button type="button" className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Next</button>
                    <button type="button" className='px-4 py-1 text-black bg-[#99A940] hover:bg-[#7e8c33] rounded transition-colors'>Bottom</button>
                    <button type="submit" className='px-4 py-1 text-white bg-[#A98540] hover:bg-[#8e6f35] rounded transition-colors font-bold'>Save</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-8 text-xs">
                    <div className="flex gap-2 items-center">
                        <label className="w-1/3 text-right text-[#1B71A2] font-semibold">Payment Method *</label>
                        <select
                            name="payment_method"
                            value={form.payment_method}
                            onChange={handleChange}
                            required
                            className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="cash">Cash</option>
                            <option value="bkash">bKash</option>
                            <option value="nagad">Nagad</option>
                            <option value="card">Card</option>
                        </select>
                    </div>

                    <div className="flex gap-2 items-center">
                        <label className="w-1/3 text-right text-[#1B71A2] font-semibold">Account Name</label>
                        <input
                            type="text"
                            name="account_name"
                            value={form.account_name}
                            onChange={handleChange}
                            className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor"
                            placeholder="Optional"
                        />
                    </div>

                    <div className="flex gap-2 items-center">
                        <label className="w-1/3 text-right text-[#1B71A2] font-semibold">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-2/3 border border-gray-400 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500 focus:bg-focusColor"
                            placeholder="Optional"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PosCusPaymentMethods;
