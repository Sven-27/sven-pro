'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import Menu from './Menu';
import { navRoutes } from '@/data/routes';
import Link from 'next/link';

function Header() {
   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="fixed bg-black w-full h-[6rem] px-8 flex items-center">
      <div className="h-fit w-full flex items-center">
        <Image
          src={ logo }
          alt="Logo"
          width='50'
          className="mr-3"
        />
        <p className="uppercase font-rc text-3xl font-black text-gray-200 text-stroke">
          sven-pro
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-400 ">
      <nav>
            <RxHamburgerMenu className="text-red-100 text-4xl animate-pulse"  onClick={() => setIsNavOpen((prev) => !prev)}/>
        <section className="flex lg:none bg-black">
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> {/* if isNavOpen state is true, show the menu */}
            <Menu handleClick={() => setIsNavOpen((prev) => !prev)}  />
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header