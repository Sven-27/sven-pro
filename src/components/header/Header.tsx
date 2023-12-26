'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import Menu from './Menu';
import { navRoutes } from '@/data/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname(); // get the current path name
  console.log(pathname);
   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="static font-rw bg-black w-full h-[6rem] px-8 flex items-center shadow-xl shadow-white/20">
      <div className="h-fit w-full flex items-center">
        <Image
          src={ logo }
          alt="Logo"
          width='50'
          className="mr-3"
        />
        <h3 className="uppercase rw text-3xl font-black text-gray-200 text-stroke">
          sven-pro
        </h3>
      </div>
      <div className="flex items-center justify-between">
      <nav>
            <RxHamburgerMenu className="text-red-100 text-4xl animate-pulse lg:hidden"  onClick={() => setIsNavOpen((prev) => !prev)}/>
        <div className="flex lg:none bg-black">
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> {/* if isNavOpen state is true, show the menu */}
            <Menu 
              pathname={ pathname } 
              handleClick={() => setIsNavOpen((prev) => !prev)}  />
          </div>
        </div>
        <ul className="hidden space-x-8 lg:flex bg-black">
          {
            navRoutes.map((route, index) => (
              <li key={ index }>
                <Link 
                  href={ route.link } 
                  className={`${pathname === route.link ? 'active' : 'text-red-100' } text-md transition hover:text-gray-100`}
                >
                  { route.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header