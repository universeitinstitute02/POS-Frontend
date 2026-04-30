import PosTransactionLayout from './PosTransactionLayout';

const PosTransCustomerOrder = () => {
    return (
        <>
            <PosTransactionLayout/>

            <div className="flex text-xs pt-5 gap-1">
                <p className='text-[#8C2C00] font-semibold'>Type</p>
                <select name="action" className="border border-black text-black">
                    <option value="summary">Summary</option>
                    <option value="details">Details</option>
                    <option value="sales-summary">Sales Summary</option>
                </select>
                <p className='text-[#8C2C00] font-semibold'> Customer Number</p>
                <input type="text" name="code" className='border border-black rounded px-1 focus:bg-focusColor'/>
                <p className='text-[#8C2C00] font-semibold'>From Date</p>
                <input type="date" name="" id="" className='border border-black'/>
                <p className='text-[#8C2C00] font-semibold'>To Date</p>
                <input type="date" name="" id="" className='border border-black'/>
                <p className='bg-blue-600 px-1 text-white'><span className='border-b border-white'>S</span>how</p>
                <p className='bg-blue-600 px-1 text-white'>-</p>
            </div>

        </>
    );
};

export default PosTransCustomerOrder;