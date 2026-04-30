import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { useEffect, useState } from 'react';

const PosCusPaymentMethods = () => {
    const location = useLocation();

    const [form, setForm] = useState({
        payment_method: '',
        account_name: '',
        phone: ''
    });

    useEffect(() => {
        document.title = "POS Customers Payment Methods";
    }, [location]);

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

        // TODO: API CALL HERE
    };

    return (
        <>
            <div className="container mx-auto">
                {/* Header */}
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Payment Method</p>
                </div>

                <PosCustomersLayout />

                {/* Navigation Bar (kept same design) */}
                <div className="bg-slate-100 mb-1">
                    <div className="flex justify-center items-center text-blue-600 gap-1 text-[13px] underline border border-slate-300">
                        {"None 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
                            .split(" ")
                            .map((item, i) => (
                                <span key={i} className="hover:text-customRed cursor-pointer">{item}</span>
                            ))}
                    </div>

                    <div className="flex justify-between items-center px-2 py-1">
                        <div className="flex items-center">
                            <div className="text-blue-600 border px-1">|{"<"}</div>
                            <div className="text-blue-600 border px-1">{"<"}</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                value={20}
                                readOnly
                                className='w-20 border border-black rounded focus:bg-focusColor'
                            />
                            <div className="text-blue-600 border px-1">{">"}</div>
                            <div className="text-blue-600 border px-1">{">"}|</div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="font-semibold border border-[#C0C0C0] pb-4">

                    {/* Action Buttons */}
                    <div className="flex justify-center text-sm pb-4 pt-2">
                        <button type="reset" className='bg-[#8440A9] px-2 text-white'>Clear</button>
                        <button type="button" className='px-2 bg-[#99A940] hover:bg-[#C7D276]'>Top</button>
                        <button type="button" className='px-2 bg-[#99A940] hover:bg-[#C7D276]'>Previous</button>
                        <button type="button" className='px-2 bg-[#99A940] hover:bg-[#C7D276]'>Next</button>
                        <button type="button" className='px-2 bg-[#99A940] hover:bg-[#C7D276]'>Bottom</button>
                        <button type="submit" className='px-2 text-white bg-[#A98540] hover:bg-[#CEB37F]'>Save</button>
                    </div>

                    {/* Fields */}
                    <div className="grid grid-cols-2 gap-4 px-4">

                        {/* Payment Method */}
                        <div className="flex gap-2 items-center">
                            <label className="w-1/3 text-xs text-labelBlue">Payment Method *</label>
                            <select
                                name="payment_method"
                                value={form.payment_method}
                                onChange={handleChange}
                                required
                                className="w-2/3 border border-black rounded text-sm"
                            >
                                <option value="">Select</option>
                                <option value="cash">Cash</option>
                                <option value="bkash">bKash</option>
                                <option value="nagad">Nagad</option>
                                <option value="card">Card</option>
                            </select>
                        </div>

                        {/* Account Name */}
                        <div className="flex gap-2 items-center">
                            <label className="w-1/3 text-xs text-labelBlue">Account Name</label>
                            <input
                                type="text"
                                name="account_name"
                                value={form.account_name}
                                onChange={handleChange}
                                className="w-2/3 border border-black rounded text-sm px-1"
                                placeholder="Optional"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex gap-2 items-center">
                            <label className="w-1/3 text-xs text-labelBlue">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-2/3 border border-black rounded text-sm px-1"
                                placeholder="Optional"
                            />
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default PosCusPaymentMethods;