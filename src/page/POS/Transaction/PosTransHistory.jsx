import PosTransactionLayout from './PosTransactionLayout';

const PosTransHistory = () => {
    return (
        <>
            <PosTransactionLayout />

            <div className="flex gap-1 text-xs pt-2">
                <input type="text" name="code" className='border border-black rounded px-1 focus:bg-yellow-400' />
                <p className='bg-blue-500 text-white px-1'>Search</p>
            </div>

            <div className="flex px-8 pt-5 text-xs">
                <div className="border border-black w-full px-2 py-2">

                    <div className="flex justify-center">

                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-[#319797]">No</th>
                                    <th>Customer Number</th>
                                    <th className="text-[#319797]">Date</th>
                                    <th className="text-[#319797]">Total</th>

                                    <th className="text-[#319797]">No</th>
                                    <th>Customer Number</th>
                                    <th className="text-[#319797]">Date</th>
                                    <th className="text-[#319797]">Total</th>

                                    <th className="text-[#319797]">No</th>
                                    <th>Customer Number</th>
                                    <th className="text-[#319797]">Date</th>
                                    <th className="text-[#319797]">Total</th>

                                    <th className="text-[#319797]">No</th>
                                    <th className="text-[#319797]">DUE</th>
                                    <th className="text-[#319797]">Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>20/3/4</td>
                                    <td>20,000</td>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>25/3/4</td>
                                    <td>25,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td className='px-4'> CUS-32</td>
                                    <td>10/3/4</td>
                                    <td>140,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td>6000</td>
                                    <td>140,000</td>
                                </tr>


                                <tr>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>20/3/4</td>
                                    <td>20,000</td>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>25/3/4</td>
                                    <td>25,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td className='px-4'> CUS-32</td>
                                    <td>10/3/4</td>
                                    <td>140,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td>7000</td>
                                    <td>140,000</td>
                                </tr>


                                <tr>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>20/3/4</td>
                                    <td>20,000</td>
                                    <td className="text-blue-500">POS-20</td>
                                    <td className='px-4'> CUS-31</td>
                                    <td>25/3/4</td>
                                    <td>25,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td className='px-4'> CUS-32</td>
                                    <td>10/3/4</td>
                                    <td>140,000</td>
                                    <td className="text-blue-500">POS-35</td>
                                    <td>8000</td>
                                    <td>140,000</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PosTransHistory;