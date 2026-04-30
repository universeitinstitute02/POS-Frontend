import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SettingsLayout from './SettingsLayout';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const GL_Holiday = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Global Setting Holiday";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>General Settings for Cross Application</p>
                </div>
                <SettingsLayout />


                <div className="font-semibold border border-[#C0C0C0] pb-2 mt-4">
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
                    <div className="grid grid-cols-8 text-center text-xs mt-4">
                        <p className='px-2 text-red-500'>Locate</p>
                        <select name="" id="" className='border mx-2 h-5'>
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                        <p className='px-2 text-blue-500'>Date</p>
                        <input type="date" name="date" id="" className='border h-5'/>
                        {/* <input type="text" className='border h-5' value="01" /> */}
                        <p className='px-2  text-blue-500'>Available %</p>
                        <input type="number" name="" id=""  className='border h-5'/>
                        <p className='text-blue-500'>Notes</p>
                        <textarea name="" id="" className='border' value="Header message"></textarea>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default GL_Holiday;