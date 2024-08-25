import React from 'react'
import logoImage from '@/assets/images/logosaas.png'
import MenuIcon from '@/assets/icons/menu.svg'
import Image from 'next/image';
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='px-4'>
      <div className='py-4 flex justify-between items-center'>
        <div className='relative'>
          <div className='absolute w-full top-0 bottom-0
           bg-[linear-gradient(to_right,#2FD8FE,#C2F0B1,#FFDD9B,#FB92CF,#F87BFF)]
           blur-md'></div>
          <Image src={logoImage} alt='Saas Logo ' className='h-12 w-12 relative' />
        </div>
        <div className='border border-white border-opacity-30 h-10 w-10 inline-flex
        justify-center items-center rounded-lg sm:hidden'>
           <MenuIcon className='text-white' />
        </div>
        <nav className=' sm:flex gap-6 items-center hidden'>
          <a href='#' className='text-white text-opacity-60 hover:text-opacity-100'>About</a> 
          <a href='#' className='text-white text-opacity-60 hover:text-opacity-100'>Features</a> 
          <a href='#' className='text-white text-opacity-60 hover:text-opacity-100'>Update</a> 
          <a href='#' className='text-white text-opacity-60 hover:text-opacity-100'>Help</a> 
          <a href='#' className='text-white text-opacity-60 hover:text-opacity-100'>Customers</a> 
          <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
        </nav>
    </div> 
    </div>

    </div>
  )
}

export default Navbar