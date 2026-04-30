import React, { useEffect } from 'react'
import SettingsLayout from './SettingsLayout'
import { useLocation } from 'react-router-dom';

const GL_Vehicles = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "Global Setting Vehicles";
    }, [location]);
    return (
        <>
            <p className='text-center text-blue-500 font-semibold'>General Settings for Cross Application</p>
            <SettingsLayout />
            <div className="">
                <p className='text-center text-xs text-red-400 font-semibold'>

                    Get:select xvehicle,xdesc,xtypeveh,xl,xw,xh,xbudcap from cavehicle where xvehicle='' and zid=650205 ORDER BY xvehicle
                    ERROR: relation "cavehicle" does not exist

                </p>
                <div className="border mx-10 mt-5 pb-3 text-xs">
                    <div className="flex text-white text-sm justify-center">
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Save</p>
                        <p className='bg-[#ac8a4c] px-2 hover:bg-[#CEB37F] cursor-pointer'>Refresh</p>
                        <p className='bg-blue-400 px-1'>-</p>
                    </div>

                    <div className="flex pt-4">
                        <div className="w-4/5  border-r px-2">
                            <div className="grid grid-cols-7 gap-2">
                                <p className='px-2 text-blue-500'>Vehicle</p>
                                <p className='px-2 text-blue-500' >Description</p>
                                <p className='text-blue-500'>Vehicle Type</p>
                                <p className='text-blue-500'>Length</p>
                                <p className='text-blue-500'>Width</p>
                                <p className='text-blue-500'>Height</p>
                                <p className='text-blue-500'>Budgeted Capacity</p>


                                <input type="text" name="vehicle" id="" className='border' />
                                <input type="text" name="description" id="" className='border' />
                                <select name="vehicletype" id="" className='border mx-2 h-5'>
                                    <option value="finishedgoal">Finished Goal</option>
                                </select>
                                <input type="number" name="length" id="" value='0.000' className='border' />
                                <input type="number" name="width" id="" value='0.000'  className='border' />
                                <input type="number" name="height" id="" value='0.000'  className='border' />
                                <input type="number" name="budgetedcapacity" id="" value='0.000'  className='border' />

                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex items-center text-sm px-2 justify-between text-blue-600 font-semibold">
                                <p>Team Assignment to</p>
                                <p className='bg-red-700 text-white p-1'>SAVE</p>
                            </div>
                        </div>
                    </div>


                </div>

                <p className='text-center text-sm font-semibold text-red-500'>
                    No Vehicles Found
                </p>




            </div>
        </>
    )
}

export default GL_Vehicles
