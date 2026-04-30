import { NavLink } from 'react-router-dom';

const PosCustomersLayout = () => {
    return (
        <>
            <div className="flex gap-[.10rem] font-semibold mb-4">
                <NavLink to="/pos-customers/customer" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Customer</NavLink>
                <NavLink to="/pos-customers/delivery-address" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Delivery Address</NavLink>{/* 2 */}

                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>MileStones</p>
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Prices</p>
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Discounts</p>

                <NavLink to="/pos-customers/payment-methods" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Payment Methods</NavLink>{/* 4 */}
                <NavLink to="/pos-customers/shipping-methods" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Shipping Methods</NavLink>{/* 5 */}
                <NavLink to="/pos-customers/contacts" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Contacts</NavLink>{/* 1 */}
                
                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Credit Limit</p>{/* 3 */}

                <NavLink to="/pos-customers/docs" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Docs</NavLink>{/* 6 */}

                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Activities</p>

                <NavLink to="/pos-customers/orders" className={({ isActive }) => (isActive ? 'border-t-[1px] border-l-[1px] border-r-[1px] px-1 border-[#4F4F4F] py-1 text-xs text-customRed': 'border-b-[1px] border-[#A52A2A] px-1 bg-[#DDDDDD] hover:bg-[#A52A2A]  py-1 text-xs text-blue-600 hover:text-white cursor-pointer')}>Orders</NavLink>{/* 7 */}

                <p className='border-b-[1px] border-[#A52A2A] px-1 bg-[#dddddd] py-1 text-xs text-[gray]'>Consignments</p>
            </div>
            
        </>
    );
};

export default PosCustomersLayout;