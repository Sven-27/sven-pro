'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <header className="fixed w-full h-[6rem] px-8 flex items-center">
      <div className="h-fit w-full flex items-center">
      <Image
        src={logo}
        alt="Logo"
        width='50'
        className="mr-3"
      />
      <p className="uppercase font-rc text-3xl font-black text-gray-200 text-stroke">
        sven-pro
      </p>
      </div>
      <div className="">
        <RxHamburgerMenu 
          className="text-3xl text-red-100"
        />
      </div>
    </header>
  )
}

export default Header