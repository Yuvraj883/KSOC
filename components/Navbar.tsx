import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   setMounted(true); // Ensures that the component is mounted client-side
  // }, []);

  // if (!mounted) {
  //   return null; // Return null if rendering server-side to prevent router access
  // }

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
  ];

  return (
    <nav className='flex justify-between items-center px-8 py-4 bg-transparent text-white font-semibold'>
      <span>
        <Image src='/images/logo.png' className='h-20 w-full' height={80} width={80} alt='logo' />
      </span>
      <ul className='hidden md:flex gap-4 text-lg'>
        {navList.map((item) => (
          <li
            key={item.path}
            className={`cursor-pointer font-semibold ${currentPath === item.path ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
