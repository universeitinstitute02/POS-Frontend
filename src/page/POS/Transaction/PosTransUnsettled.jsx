import { useEffect } from 'react';
import PosTransactionLayout from './PosTransactionLayout';
import { useLocation } from 'react-router-dom';

const PosTransUnsettled = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Unsettled Transactions";
    }, [location]);
    return (
        <>
            <PosTransactionLayout />

            <div className="text-xs">
                <div className="flex gap-1 pt-3">
                    <p>Customer Number</p>
                    <input type="text" value="CUS-000001" className='w-28 px-1 border border-black rounded focus:bg-focusColor' />
                    <p>Walk in Custome</p>
                    <p className='px-1 bg-cyan-500 text-white'>-</p>
                </div>
                <div className="flex px-8">
                    <div className="border border-black w-full px-2 py-2">
                            <p className='text-red-800 font-semibold text-lg mb-2'>Unsettled Transactions</p>
                        <div className="flex justify-center">

                            <div className="grid grid-cols-12 place-content-between gap-8 gap-y-1 px-2">
                                <p className='text-[#319797]'>No</p>
                                <p className='text-[#319797]'>Date</p>
                                <p className='text-[#319797]'>Total</p>
                                <p className='text-[#319797]'>Due</p>
                                <p className='text-[#319797]'>No</p>
                                <p className='text-[#319797]'>Date</p>
                                <p className='text-[#319797]'>Total</p>
                                <p className='text-[#319797]'>Due</p>
                                <p className='text-[#319797]'>No</p>
                                <p className='text-[#319797]'>Date</p>
                                <p className='text-[#319797]'>Total</p>
                                <p className='text-[#319797]'>Due</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>20/3/4</p>
                                <p>20,000</p>
                                <p>10,000</p>
                                <p className="text-blue-500">POS-20</p>
                                <p>25/3/4</p>
                                <p>25,000</p>
                                <p>10,000</p>
                                <p className='text-blue-500'>POS-35</p>
                                <p>10/3/4</p>
                                <p>70,000</p>
                                <p>140,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PosTransUnsettled;