import React from 'react'
import SettingsLayout from './SettingsLayout'

const Default = () => {
    return (
        <>
            <p className='text-center text-blue-500 font-semibold'>General Settings for Cross Application</p>
            <SettingsLayout />


            <div className="">
                <p className='text-center text-xs text-blue-400 font-semibold'>
                    Click on a Parameter to make changes to it. Remember to click on the Save button after making changes or adding a new parameter.
                </p>
                <p className='text-center text-sm text-red-400 mt-5 font-semibold'>Defaults for CA</p>

                <div className="flex mt-5">
                    <div className="w-3/5">
                        <div className="grid grid-cols-5 text-xs">
                            <p className="text-left text-blue-500 underline">Default Document Format</p>
                            <p className="text-left col-span-2">PDF</p>
                            <p className="text-left col-span-2 text-blue-500 underline">Supplier Credit Limit</p>
                            <p></p>
                            <p className="col-span-2"></p>
                            <p className="col-span-2 text-blue-500 underline">No Auto-generation of Customer Numbers?</p>
                            <p className='text-blue-500 underline'>Batch Format	</p>
                            <p className="col-span-2 ">comp "| ";;xbatch00 caption(Markings) display(text);;xbatch01 caption(Pallet) display(text);;xbatch02 caption(Batch) display(text)</p>
                            <p className="col-span-2 text-blue-500 underline">No Auto-generation of Supplier Numbers?</p>
                            <p className='text-blue-500 underline'>Customer Credit Limit</p>
                            <p className="col-span-2">100000</p>
                        </div>

                    </div>

                    <div className="w-2/5">

                        <div className="grid grid-cols-6 text-xs">
                            <p>100000</p>
                            <p className='col-span-2 text-blue-400 underline'>Security Exempted Fields</p>
                            <p className='col-span-3'></p>
                            <p className=''><input type="checkbox" name="" id=""  className=''/></p>
                            <p className='col-span-2 text-blue-400 underline'>Suppress Description</p>
                            <p className='grid place-items-center col-span-3'><input type="checkbox" name="" id=""  className=''/></p>
                            <p className=''><input type="checkbox" name="" id=""  className=''/></p>
                            <p className='col-span-2 text-blue-400 underline'>Warehouse</p>
                            <p className='grid place-items-center col-span-3 text-blue-400 underline'>General Store</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Default
