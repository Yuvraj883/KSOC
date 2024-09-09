'use client'
import React from 'react'
import ServiceCard from './ServiceCard'

interface Service
{
  description:string,
  img:string,
  title:string,
}

export default function Services() {

const services: Service[] = [
  {
    description:"Access a wealth of study materials, practice tests, and resources designed to prepare you thoroughly for your board exams.",
    title:"Comprehensive Study Materials",
    img:"/images/books.jpg"
  },
  {
    description:"Our online classes are available at times that work for you, making it easy to fit study sessions into your busy schedule.",
    title:"Flexible Scheduling",
    img:"/images/boy.webp"
  },
  {
    description:"Learn from highly qualified teachers who understand the board exam curriculum and know how to help you succeed.",
    title:"Experienced Tutors",
    img:'/images/tutor.webp'
  }
]

  return (

    <div>
      <span className='flex flex-col justify-center items-center'>
      <h1 className='text-6xl text-[#EDEADE] font-bold'>Services</h1>
    <hr className='w-[40%] h-4 '></hr>
      </span>
      <div className='md:flex md:flex-row flex flex-col items-center justify-center gap-8 p-4 mb-4'>
        {
          services.map((service)=>(
            <ServiceCard service = {service}/>
          ))
        }
      </div>
    </div>
  )
}

