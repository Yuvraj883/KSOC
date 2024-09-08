'use client'
import React, { useEffect } from 'react'

interface Service
{
  description:string,
  img:string,
  title:string,
}

interface ServiceCardProps{
  service: Service
}

export default function ServiceCard({service}:ServiceCardProps) {

  useEffect(()=>{
    console.log(service?.description);
  },[]);
  return (
    <div className='p-4 flex flex-col justify-center items-center w-[400px] h-[400px] shadow-md rounded-md'>
        <img src={service.img} className='rounded-full h-32 w-32 mb-2 p-2' height={100} width={100} alt="Service icon"/>
        <h3 className='font-bold text-2xl p-2 text-gray-700'>{service.title}</h3>
        <p className='text-lg text-gray-700'>{service.description}</p>
    </div>
  )
}
