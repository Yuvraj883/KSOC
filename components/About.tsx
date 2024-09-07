import React from 'react';
import Image from 'next/image';  // Use the Next.js Image component

export default function About() {
  return (
    <div className="flex  p-8 items-center justify-center w-[100%] ">
      <section>
        {/* Use Next.js Image component */}
        <Image
          src="/images/about2.jpg"  // Path relative to the 'public/' folder
          alt="about-img"
          className='h-[500px] '
          width={500}  // Set the width
          height={800}  // Set the height
        />
      </section>
      <section className='flex flex-col justify-center items-center  w-[50%] p-8'>
        <h1 className='font-bold text-4xl text-[#EDEADE]'>About Us</h1>
        <p className='text-lg font-regular w-[80%] font-semibold text-gray-700'>Our mission is to offer affordable and effective online classes designed to help students excel in their board exams. With experienced teachers and a flexible learning environment, we strive to ensure every student has the tools they need for academic success.</p>
      </section>
    </div>
  );
}
