import Icon05 from 'public/Vector.png'
import Icon06 from 'public/instagram-line 1.png'
import Icon07 from 'public/facebook-box-line 3.png'
import Icon08 from 'public/image 1.png'
import Icon09 from 'public/image 2.png'
import Image from 'next/image'
export default function Footer01() {
    return (
        <div>
            <footer className="relative bg-blue01 shadow md:py-8 dark:bg-gray-900">
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='w-[400px]'>
                        <a className="flex items-center mb-4 sm:mb-0">
                            <span className="pl-28 pb-12 pt-10 text-white text-xl font-bold whitespace-nowrap dark:text-white tracking-[.15em]">DAVENPORT</span>
                            </a>
                            <a className="pl-28 pb-4 flex items-center mb-4 sm:mb-0">
                                <span className="text-white text-xl whitespace-nowrap font-light dark:text-white tracking-[.15em]">Jl. Raya Tajur, Kp. Buntar, Kec. Bogor Sel, <br /> Kota Bogor, Jawa Barat</span>
                            </a>
                            <a className="pl-28 pb-4 flex items-center mb-4 sm:mb-0">
                                <span className="text-white text-xl whitespace-nowrap dark:text-white tracking-[.15em]">Download Our App!</span>
                            </a>
                            <div className='pl-28 pr-8 pb-1 w-[180%]'>
                                <Image src={Icon08} alt="" />
                            </div>
                            <div className='pl-28 pr-8 w-[180%]'>
                                <Image src={Icon09} alt="" />
                            </div>
                    </div>
                    <div className="text-white font-regular tracking-[.40em] top-4 right-8">
                        <p>DAVENPORT</p>
                    </div>
                    <div className='w-[400px]'>
                    <ul className=" items-center mb-8 text-sm text-white sm:mb-0 dark:text-gray-400">
                        <span className="text-white text-xl font-medium whitespace-nowrap dark:text-white tracking-[.15em]">More About Us</span>

                        <div className='pt-5 pb-2 pr-8 pl-1 flex items-center'>
                            <Image src={Icon05} alt="" />
                            <span className="pl-3 text-white text-xl whitespace-nowrap dark:text-white tracking-[.15em]">911</span>
                        </div>

                        <div className='pb-2 pr-8 flex items-center'>
                            <Image src={Icon06} alt="" />
                            <span className="pl-3 text-white text-xl whitespace-nowrap dark:text-white tracking-[.15em]">Instagram</span>
                        </div>

                        <div className='pb-2 pr-8 flex items-center'>
                            <Image src={Icon07} alt="" />
                            <span className="pl-3 text-white text-xl whitespace-nowrap dark:text-white tracking-[.15em]">Facebook</span>
                        </div>
                    </ul>
                    </div>
                </div>
                {/* bottom */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">Copyright © 2022 <a href="/" className="hover:underline tracking-[.15em]">DAVENPORT</a>.
                </span>
            </footer>
        </div>

    )

}

