
const PosChangePassword = () => {
    return (
        <>
            <div className="text-center">
                <p className='text-customBlue font-semibold'>Change Password</p>
                <div className="flex justify-center text-xs pt-3">
                    <div className="border border-black">
                        <div className="flex justify-center">
                            <p className='bg-[#A98540] hover:bg-[#CEB37F] px-2 pb-1 text-white'>Save</p>
                        </div>

                        <div className="grid grid-cols-2 place-items-end pt-5 gap-x-5 space-y-2 pb-2 px-2">
                            <p className='text-sm font-semibold text-labelBlue'>Password</p>
                            <input type="password" name="" id="" className='text-sm rounded border border-black focus:bg-focusColor px-1' required />
                            <p className='text-sm font-semibold text-labelBlue'>Re-enter Password</p>
                            <input type="password" name="" id="" className='text-sm rounded border border-black focus:bg-focusColor px-1' required />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default PosChangePassword;