import React from 'react'
import {FaFacebook,FaInstagramSquare,FaTwitter,FaCopyright} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full bg-black h-full bottom-0 justify-center '>
        <h2 className='text-1xl text-[orange] font-bold text-2xl mt-4'>Follow cricScore on:
        </h2> 
        <div className='flex flex-row justify-center  text-5xl text-white mt-4 p-4 '>
            <a className='mx-8' href="/"> <FaFacebook/> </a>
            <a className='mx-8' href="/"> <FaInstagramSquare/> </a>
            <a className='mx-8' href="/"> <FaTwitter/> </a>
        </div>

        <h2 className='flex flex-row justify-center text-1xl text-white mt-2 p-1'> <span className='mt-1 mr-1'><FaCopyright/></span> cricScore
        </h2>

        <h2 className='text-white text-1xl mt-0'>
        2022
        </h2>
      
    </div>
  )
}

export default Footer