import Hotel02 from 'public/kamar 3 1.png'
import Image from 'next/image'
export default function Carditem01() {
    return (
        <div>

            {/* <!--Card 1--> */}
            <div className="p-[8em] grid xl:grid-cols-3 gap-3">
                <div className="rounded overflow-hidden shadow-xl">
                    <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-8   ">
                        <div className="font-bold text-xl mb-2">Single Bed Room</div>
                        <p className="text-gray01 text-base">
                            Suitable for singgle person who sleept alone and like quiet place to live in.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 ml-8">
                        <span className='italic font-semibold'>$99 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                {/* card 2 */}
                <div className="rounded overflow-hidden shadow-xl">
                <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">Double Bed Room</div>
                        <p className="text-gray01 text-base">
                            a double room will generally be 1 bed for two people, the bed will either be a Double, Queen or King size bed, if you are traveling with friends and want to share a room you need to book a twin room which will have to single beds in.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='italic font-semibold'>$149 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                {/* card 3 */}
                <div className="rounded overflow-hidden shadow-xl">
                <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">Triple Bed Room</div>
                        <p className="text-gray01 text-base">
                            A triple room accommodates up to 3 people with either one double and a single bed or a combination of beds and roll-aways.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='italic font-semibold'>$219 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                {/* card 4 */}
                <div className="rounded overflow-hidden shadow-xl py-6">
                <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">Queen Bed Room</div>
                        <p className="text-gray01 text-base">
                        A queen-size bed is like a full bed only larger. The average measurement of a queen bed is sixty inches by eighty inches, making it is six inches wider and six inches longer than a full bed.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='italic font-semibold'>$279 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                {/* card 5 */}
                <div className="rounded overflow-hidden shadow-xl py-6">
                <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">King Bed Room</div>
                        <p className="text-gray01 text-base">
                        King-size beds are the widest of all the bed styles. The standard measurement for this size bed is seventy-six inches wide and eighty inches long. Obviously the space offered by a king size bed is plentiful..
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='italic font-semibold'>$299 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                {/* card 6 */}
                <div className="rounded overflow-hidden shadow-xl py-6">
                <div className='relative w-full h-60'>
                        <Image layout='fill' src={Hotel02} alt="" />
                    </div>
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">Suite Bed Room</div>
                        <p className="text-gray01 text-base">
                        A suite is a much larger accommodation. It usually has an attached bathroom, a living area, and most times, includes a dining area as well.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className='italic font-semibold'>$219 / Night </span>
                        <a href="" className='bg-blue01 py-2 px-6 text-white hover:bg-blue01 rounded-xl'>Book</a>
                    </div>
                </div>
                </div>
                <div>
            </div>

        </div>




    )

}
