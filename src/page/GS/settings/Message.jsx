import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SettingsLayout from './SettingsLayout';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const GL_Message = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Global Setting Message";
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
                    <div className="grid grid-cols-6 gap-2 text-xs mt-4">
                        <p className='px-2 text-blue-500'>Code</p>
                        <p className='px-2  text-blue-500 col-span-4'>Long Description</p>
                        <p className='text-blue-500'>Message Type</p>
                        <input type="text" className='border h-5' value="01" />
                        <textarea name="" id="" className='border col-span-4' value="Header message"></textarea>
                        <select name="" id="" className='border mx-2 h-5'>
                            <option value="finishedgoal">Finished Goal</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                        <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                        <div className="flex gap-2">

                            <input type="text" name="" value='50' className='border border-black w-12 h-4' />
                            <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 pt-2 gap-1 bg-[#F4F6F8] text-xs">
                        <p className='bg-[#A6BDBD] px-2 text-blue-500'>Code ⇑</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Long Description</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Message Type</p>
                        <p className='bg-[#C6DCDD] px-2 text-blue-500'>Delete</p>

                        <p>01</p>
                        <p>Header message</p>
                        <p></p>
                        <p className='underline text-orange-400'>Delete</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GL_Message;