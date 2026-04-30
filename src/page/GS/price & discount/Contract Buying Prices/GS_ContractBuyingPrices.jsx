import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GS_ContractBuyingPrices = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Supplier Contract Prices Maintenance";
    }, [location]);

    const fields = [
        {
            label: 'Item Code',
            type: 'input',
            inputType: 'text',
            name: 'itemCategory',
        },
        {
            label: 'Purchase Unit',
            type: 'select',
            options: ['[Selected]'], 
            name: 'unit',
        },
        {
            label: 'Supplier Number',
            type: 'input',
            inputType: 'number',
            name: 'minQty',
        },
        {
            label: 'Project',
            type: 'input',
            inputType: 'number',
            name: 'minQty',
        },
       
        {
            label: 'Currency',
            type: 'select',
            options: ['[Selected]'], 
            name: 'currencyPrice',
            className: "text-customRed"
        },
        {
            label: 'Unit Price',
            type: 'input',
            inputType: 'number',
            name: 'unitPrice',
        },
        {
            label: 'Effectivity Date',
            type: 'input',
            inputType: 'date',
            name: 'effectivityDate',
        },
        {
            label: 'Expiration Date',
            type: 'input',
            inputType: 'date',
            name: 'expirationDate',
        },
    ];
    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>
                    Supplier Contract Prices Maintenance</p>
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

export default GS_ContractBuyingPrices;