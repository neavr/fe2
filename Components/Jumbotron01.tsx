import Jumbotron from 'public/Component - Jumbo Tron.png';
import Image from 'next/image'
export default function Jumbotron01() {
    return (
        <div>
            <div className='mt-6 ml-10'>
                <Image src={Jumbotron} alt="" />
            </div>
        </div>

    )

}

