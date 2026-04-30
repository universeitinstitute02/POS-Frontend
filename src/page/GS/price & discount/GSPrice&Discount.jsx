import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GSPriceDiscount = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Price & Discounts";
    }, [location]);
    return (
        <>

            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Price & Discounts</p>

                <div className="flex w-full gap-6 pt-5 justify-center">
                    <div className="text-blue-500 cursor-pointer">

                        <p className='text-red-500'>Standard</p>
                        <Link to="/global/price&discount/standard-selling-prices" className='underline'>Standard Selling Prices</Link>
                        <p className='underline'>Standard Selling Discounts</p>
                        <Link to="/global/price&discount/sandard-bying-prices" className='underline'>Standard Buying Prices</Link>
                        <p><Link to='/global/price&discount/standard-buying-discounts' className='underline'>Standard Buying Discounts</Link></p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <Link to="/global/price&discount/standard-selling-rate-tables" className='underline'>Standard Selling Rate Tables</Link>
                        <p> <Link to="/global/price&discount/standard-buying-rate-tables" className='underline'>Standard Buying Rate Tables</Link>
                        </p>
                        <p className='text-red-500'>Promotions</p>
                        <Link to='/global/price&discount/special-promo-code-selling-prices' className='underline'>Special (Promo-Code) Selling Prices</Link>
                        <p>
                            <Link to="/global/price&discount/special-promo-code-buying-prices" className='underline'>Special (Promo-Code) Buying Prices</Link>
                        </p>
                    </div>
                    <div className="text-blue-500 cursor-pointer">
                        <p className='text-red-500'>Contractual</p>
                        <Link to="/global/price&discount/contract-selling-prices" className='underline'>Contract Selling Prices</Link>
                        <p>

                            <Link to='/global/price&discount/contract-selling-discounts' className='underline'>Contract Selling Discounts</Link>
                        </p>
                        <Link to='/global/price&discount/contract-buying-prices' className='underline'>Contract Buying Prices</Link>
                        <p>

                            <Link to="/global/price&discount/contract-buying-discounts" className='underline'>Contract Buying Discounts</Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GSPriceDiscount;