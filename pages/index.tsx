import type { NextPage } from 'next'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icon05 from 'public/Vector.png'
import Icon06 from 'public/instagram-line 1.png'
import Icon07 from 'public/facebook-box-line 3.png'
import Icon08 from 'public/image 1.png'
import Icon09 from 'public/image 2.png'
import Icon10 from 'public/btn_sign_in.png'
import Navbar01 from 'Components/Navbar01';
import Navbar02 from 'Components/Navbar02';
import Jumbotron01 from 'Components/Jumbotron01';
import Filterbox01 from 'Components/Filterbox01';
import Cardmain01 from 'Components/Cardmain01';
import Carditem01 from 'Components/Carditem01';
import Footer01 from 'Components/Footer01';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Davenport</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

      </Head>
      {/* navbar */}
        <Navbar01/>
        <Navbar02/>
      <main>
        {/* jubotron */}
          <Jumbotron01/>
        {/* filter */}
          <Filterbox01/>
            {/* card main */}
            <Cardmain01/>
            {/* item cards */}
            <Carditem01/>
        {/* footer */}
          <Footer01/>
      </main>
    </div>

  )
}

export default Home