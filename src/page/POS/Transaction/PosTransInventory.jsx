import PosTransactionLayout from './PosTransactionLayout';

const PosTransInventory = () => {
    return (
        <>
            <PosTransactionLayout />


            <div className="flex text-xs pt-3 gap-1">
                <p>Item Code</p>
                <input type="text" name ='code' className='border border-black rounded px-1 focus:bg-focusColor'/>
            </div>
            <div className="flex justify-center text-white mt-8">
                <p className='bg-[#CEB37F] px-2'>Refresh</p>
                <p className='bg-blue-400 px-1'>-</p>
            </div>
        </>
    );
};

export default PosTransInventory;