import React from 'react'
import logo from '../../../public/GM.jpeg'
import { Link } from 'react-router-dom'
const Businesspage = () => {
    return (
        <>
            <div className="border-t border-b border-black mt-5">
                <p className='text-lg font-semibold text-center text-blue-400'>Directory of Sites</p>
                <p className='text-center text-blue-40 text-xs text-blue-400 font-semibold'>To list your sites in this directory, go to portal administration and check the 'Featured' or 'Listed' box.</p>

                <div className="flex my-5 gap-1">
                    <div className="w-1/4">
                        <div className="border border-[#A52A2A] py-5">
                            <p className='text-center text-2xl text-[#A52A2A] font-bold'>Featured Sites</p>
                            <div className="px-8">
                                <div className="border-t border-[#A52A2A]"></div>

                                <div className="flex flex-col mt-5">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>
                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="flex flex-col  mt-5">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="border border-[#A52A2A] py-3 px-4">
                            <p className='text-[#A52A2A] text-sm font-bold'>Private Sites</p>
                            <p className='text-[#A52A2A] text-xs font-semibold'>You'll need valid user-id/password pairs to access these sites</p>

                            <div className="grid grid-cols-3 space-y-3 gap-5 mt-5">
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                                <div className="">
                                    <div className="flex justify-items-center">
                                        <img src={logo} alt="Logo" className="h-16" />
                                    </div>
                                    <p className="text-[#A52A2A]">Business Name</p>
                                    <Link to='/login' className='text-blue-500 underline cursor-pointer'>POS</Link>

                                    <p className='text-xs'>This is an integrated ERP site which allows the users to run the entire operation from anywhere, anytime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Businesspage
