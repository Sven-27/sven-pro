'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import Menu from './Menu';
import { navRoutes } from '@/data/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

function Header() {
  const pathname = usePathname(); // get the current path name
  console.log(pathname);
   const [isNavOpen, setIsNavOpen] = useState<Boolean>(false); // initiate isNavOpen state with false

  return (
    <header className="fixed font-rw w-full min-h-[6rem] p-4 md:p-8 flex items-center justify-between z-20 bg-white ">
      <Link 
        href="/"
        className={`${pathname === '/' ? 'cursor-default' : 'text-white' } h-fit flex items-center`}
      >
        <Image
          src={ logo }
          alt="Logo"
          width='50'
          className="mr-3 md:mr-5 md:h-12 md:w-12"
        />
        <h3 className="uppercase font-ro text-xl md:text-2xl text-red-100">sven-pro</h3>
      </ Link>
      <nav
        className="flex items-center justify-between"
      >
            <RxHamburgerMenu className="text-red-100 text-3xl md:text-4xl lg:hidden"  onClick={() => setIsNavOpen((prev) => !prev)}/>
        <div className="flex lg:none bg-black">
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> {/* if isNavOpen state is true, show the menu */}
            <Menu 
              pathname={ pathname } 
              handleClick={() => setIsNavOpen((prev) => !prev)}  />
          </div>
        </div>
        <ul className="hidden space-x-8 lg:flex z-10 bg-transparent">
          {
            navRoutes.map((route, index) => (
              <li key={ index }>
                <Link 
                  href={ route.link } 
                  className={`${pathname === route.link ? 'active' : 'text-gray-300' } font-semibold text-sm transition hover:text-red-100`}
                >
                  { route.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    {/* </div> */}
    </header>
  )
}

export default Header