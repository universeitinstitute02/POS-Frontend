


const GSUtilities = () => {
    return (
        <>

            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Utilities</p>

                <div className="flex w-full gap-6 pt-5 justify-center">
                    <div className="text-blue-500 cursor-pointer">
                       
                        <p className='underline'>Load Items</p>
                        <p className='underline'>Update Items</p>
                        <p className='underline'>Load Stock</p>
                        <p className='underline'>Load Customers</p>
                        <p className='underline'>Load Supplierst</p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <p className='underline'>Load Chart of Account</p>
                        <p className='underline'>Load GL Interface</p>
                        <p className='underline'>Load Zones</p>
                        <p className='underline'>Remove Items</p>
                        <p className='underline'>PR Old to New</p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <p className='underline'>Miscellaneous</p>
                        <p className='underline'>Miscellaneous-Post</p>
                        <p className='underline'>Correct Tax</p>
                        <p className='underline'>Auto Allocate-AR</p>
                        <p className='underline'>Correct IMTRN-YW</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GSUtilities;