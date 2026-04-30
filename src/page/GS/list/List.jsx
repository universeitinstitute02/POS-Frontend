import { Link } from "react-router-dom";



const GSList = () => {
    return (
        <>

            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Listings</p>

                <div className="flex w-full gap-6 pt-5 justify-center">
                    <div className="text-blue-500 cursor-pointer">
                        <p className='text-red-600'>Customers</p>
                        <Link to='/global/price&discount/contract-list' className='underline'>Customer List</Link>
                        <p className='underline'>By Customer Group By Customer</p>
                        <p className='underline'>By Price Group By Customer</p>
                        <p className='underline'>Alphabetical List</p>
                        <p className='underline'>Customer Price List</p>
                        <p className='text-red-600'>Suppliers</p>
                        <p className='underline'>Supplier List</p>
                        <p className='underline'>By Supplier Group By Supplier</p>
                        <p className='underline'>By Price Group By Supplier</p>
                        <p className='underline'>Alphabetical List</p>
                        <p className='underline'>Supplier List by Product</p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <p className='underline'>Supplier Price List</p>
                        <p className='text-red-600'>Items</p>
                        <p className='underline'>Item Master List</p>
                        <p className='underline'>Service Item List</p>
                        <p className='underline'>Item list by Group</p>
                        <p className='underline'>By Item Brand By Item</p>
                        <p className='underline'>By Item Category By Item</p>
                        <p className='underline'>By Item Class By Item</p>
                        <p className='underline'>By Item Origin By Item</p>
                        <p className='underline'>By Item Supplier By Item</p>
                        <p className='underline'>By Item Group By Item</p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <p className='underline'>By Item Kit By Item</p>
                        <p className='underline'>By Item Code By Item</p>
                        <p className='underline'>By Item CrossReference By Item</p>
                        <p className='underline'>Prices</p>
                        <p className='underline text-red-600'>Codes</p>
                        <p className='underline'>Codes List</p>
                        <p className='underline'>Transaction Codes List</p>
                        <p className='underline'>GL Interface Table</p>
                        
                    </div>
                </div>
            </div>

        </>
    );
};

export default GSList;