import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GS_customer_controler from './GS_customer_controler';
const GS_CustomerList = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Customer List";
    }, [location]);

    const {fields}=GS_customer_controler();

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>
                    Customer List
                    </p>
                </div>
                <div className="flex  justify-center">
                    <div className="font-semibold border border-[#C0C0C0] pb-2 max-w-2xl">
                        {fields.map((field, index) => (
                            <div className="flex gap-1 space-y-2" key={index}>
                                <div className="w-1/3 pt-2">
                                    <p className={`float-end text-xs ${field.className || "text-labelBlue"}`}
                                    >{field.label}</p>
                                </div>
                                <div className="w-2/3">
                                    {field.type === 'select' ? (
                                        <div className="flex">
                                            <select name={field.name} id={field.name} className="border border-black rounded text-xs" required>
                                                {field.options.map((option, i) => (
                                                    <option key={i} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <input
                                            type={field.inputType || 'text'}
                                            className="w-64 px-1 text-sm border border-black rounded focus:bg-focusColor"
                                            name={field.name}
                                            defaultValue={0}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GS_CustomerList;