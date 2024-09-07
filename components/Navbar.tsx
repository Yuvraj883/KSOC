"use client"
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures that the component is mounted client-side
  }, []);

  if (!mounted) {
    return null; // Return null if rendering server-side to prevent router access
  }

  // const router = useRouter();

  const currentPath = '/about';
  const navList = [
    {
      path: '/',
      text: 'Home',
      icon: '',
    },
    {
      path: '/about',
      text: 'About',
      icon: '',
    },
    {
      path: '/services',
      text: 'Services',
      icon: '',
    },
    {
      path: '/testimonials',
      text: 'Testimonials',
      icon: '',
    },
    {
      path: '/contact',
      text: 'Contact',
      icon: '',
    },
    {
      path: '/team',
      text: 'Team',
      icon: '',
    },
  ]

  return (
    <nav className='flex justify-between px-8 py-4 bg-black font-semibold '>
      <span className='font-bold text-xl '>KS Online Classes</span>
      <ul className='flex gap-4'>
        {navList.map((item) => (
          <li className={currentPath===item.path?'text-blue-500 cursor-pointer':'hover:text-blue-500 cursor-pointer'}>{item?.text}</li>
        ))}
      </ul>
    </nav>
  )
}
