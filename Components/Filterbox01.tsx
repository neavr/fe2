
export default function Filterbox01() {
    return (
        <div>
            <div className="bg-white shadow-xl mx-auto w-[80%] p-5 -mt-20 relative rounded-xl">
                <div className="flex">
                    <div className="w-[30%]">
                        <label className="block mb-3" htmlFor="checkin">Check-in</label>
                        <input type="date" name='tipe' placeholder='Tipe' className='border-[.3em] px-3 py-1 rounded-2xl border-slate-400' />
                    </div>
                    <div className="w-[30%]">
                        <label className="block mb-3" htmlFor="chekcout">Check-out</label>
                        <input type="date" name='tipe' placeholder='Tipe' className='border-[.3em] px-3 py-1 rounded-2xl border-slate-400' />
                    </div>
                    <div className="w-[30%]">
                        <label className="block mb-3" htmlFor="number">How Many People</label>
                        <input type="number" name='tipe' placeholder='' className='border-[.3em] px-3 py-1 rounded-2xl border-slate-400' />
                    </div>
                    <div className="w-[30%] mt-11">
                        <a href="" className='bg-blue01 py-2 px-8 rounded-2xl text-white hover:bg-blue01'>Check Room</a>
                    </div>
                </div>
            </div>
        </div>

    )

}

