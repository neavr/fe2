import Hotel01 from 'public/kamar 4.png'
import Icon01 from 'public/Icon Wifi.png'
import Icon02 from 'public/Icon Swimming.png'
import Icon03 from 'public/Icon Food.png'
import Icon04 from 'public/Icon Movie.png'
import Image from 'next/image'
export default function Cardmain01() {
    return (
        <div>
                    <div className="bg-white mx-auto w-[100%] max-w-[90%] rounded-3xl overflow-hidden shadow-2xl mt-20">
          <div className="flex">
            <Image src={Hotel01} alt="" />
            <div className="px-20 py-4">
              <div className="font-medium text-2xl text-[46px] mb-8">Deluxe Bed Room</div>
              <p className="text-gray01 text-base">
                Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.
              </p>
              <div className="flex">
                <p className="text-black font-medium italic text-[32px] text-base mt-10">
                  Facility :
                </p>
                <div className='ml-2  py-4 scale-75'>
                  <Image src={Icon01} alt="" />
                  <Image src={Icon02} alt="" />
                  <Image src={Icon03} alt="" />
                  <Image src={Icon04} alt="" />
                </div>
              </div>
              <div>
                <div className="ml py-4">
                  <div>
                    <span className='italic font-semibold'>$349 / Night </span>
                    <a href="" className='bg-blue01 py-3 px-8 text-white hover:bg-blue01 rounded-xl'>Book</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

    )

}

