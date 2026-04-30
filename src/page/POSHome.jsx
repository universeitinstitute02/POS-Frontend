
const Poshome = () => {
    // Function to set the activeMenu in sessionStorage and trigger a state change in Layout
    const toggleVisibility = (value) => {
        sessionStorage.setItem("activeMenu", value);
        // console.log('value==========', value)
        // Trigger a layout update by firing the storage event
        window.dispatchEvent(new Event('storage'));
    };


    // const toggleVisibility = (value) => {
    //     sessionStorage.setItem("activeMenu", value);
    //     window.location.reload();
    // };


    return (
        <>
            <div className="w-full flex mt-5 text-xs">
                <div className="w-[70%]">
                    <div className="flex justify-between mt-4 px-2 text-blue-700 underline">
                        <p className='cursor-pointer hover:text-blue-300'>Dashboard</p>
                        <p className='cursor-pointer hover:text-blue-300'>Change Password</p>
                        <p className='cursor-pointer hover:text-blue-300'>Suppress Descriptions</p>
                    </div>
                    <div className="text-center text-2xl pt-10 text-blue-600 font-semibold">
                        Select The Module You want work with Now!
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs px-3 pt-2">
                        <div className='space-y-1'>
                            <p className='text-[#D05C5C] text-sm font-semibold'>Common</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('systemadministration')}
                            >System Administration</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('globalsetting')}
                            >Global Setting</p>
                            <p>This is a mandatory module that provides the general infrastructure for all other modules. It covers general setup, system security, maintenance of essential master data for customers, suppliers and products.</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('messaging')}
                            >Messaging</p>
                            <p>This is a module that provides the general infrastructure for messaging. It facilitates creation and management of messages and addresses responses to the same.</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-[#D05C5C] text-sm font-semibold'>Accounts</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('generalledger')}
                            >General Ledger</p>
                            <p>You want to ensure that all your transactions from various modules to be reflected in your accounts. You want to maintain the books and generate financial statements.</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('accountspayable')}
                            >Accounts Payable</p>
                            <p>You want to make payment to supplier and allocate bill.</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('expensemanagement')}
                            >Expense Management</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-[#D05C5C] text-sm font-semibold'>Distribution</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('inventory')}
                            >Inventory</p>
                            <p>You want to keep track of your inventory by unit as well as by cost. You are keen to monitor your supply commitments and take action to meet those commitments.</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('pointofsale')}>Point of Sale</p>
                            <p>You need to manage retail sales in a heavy traffic environment using industry standard terminals and yet keep the base system up to date on these transaction</p>
                            <p className='text-blue-500 underline cursor-pointer hover:text-blue-300'
                                onClick={() => toggleVisibility('reports')}
                            >Reports</p>
                        </div>

                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="text-center bg-[#F3F0F3]  border-t border-black mb-1">
                        <p className='text-red-700 font-semibold py-1'>New Messages</p>
                    </div>
                    <div className="border-[1px] border-[#4F4F4F]">
                        <div className="">
                            <div className="text-center bg-[#F3F0F3]  border-t ">
                                <p className='text-red-700 font-semibold py-1'>My Favoites</p>
                            </div>
                        </div>
                        <div className="flex justify-center py-5 bg-[#EFEFEF] mt-1">
                            <div className="grid grid-cols-2 gap-4 text-blue-500 ">
                                <p className="underline cursor-pointer hover:text-blue-300">General Settings for</p>
                                <p className="underline cursor-pointer hover:text-blue-300">Purchase Order</p>
                                <p className="underline cursor-pointer hover:text-blue-300">POS Transactions</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-[2px] border-[#4F4F4F] mt-3 bg-[#FFFFE0]">
                        <div className='p-5'>
                            <p className='pt-2 text-center text-xl font-bold text-[#A52A2A]'>What if I get lost?</p>
                            <p className='pt-3 text-sm font-bold'>POS is organized hierarchically, and you should be able to go back, step by step, or directly, following the breadcrumbs on the top left corner. And you can always click on Home and that will bring you back to this home page.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Poshome;