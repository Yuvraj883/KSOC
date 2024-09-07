import React from 'react'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <div className='bg-[url(../public/images/HeroImage.jpg)] h-screen w-screen '>
      <Navbar/>
      <div className='flex flex-col justify-center  h-[70%] w-[70%] md:w-[45%] font-bold text-white  p-8'>
        <h1 className='md:text-8xl text-4xl'>Achieve Your Best Grades</h1>
        <hr className='text-black font-bold w-[70%] h-4'></hr>
        <p className='text-white'>Affordable online classes for exam success.</p>
      </div>

    </div>
  )
}
