'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import star from '../../../public/img/star1.png';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from 'react';

export default function Menu() {
  const [close, setClose] = useState(false);

  return (
    <menu className="absolute top-0 left-0 w-full h-full bg-black p-6">
      <div className="h-fit w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src={ logo }
            alt="Logo"
            width='80'
            className="mr-3"
          />
        </Link>
        <IoMdClose 
          className="text-red-100 text-4xl" 
          
        />
      </div>
      <nav className="mt-6 z-[10]">
        <ul className="flex flex-col z-20 items-center gap-4">
          <li>
            <Link href="/">
              <span className="text-2xl focus text-red-100">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-2xl focus text-red-100">About</span>
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <span className="text-2xl focus text-red-100">Experience</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="text-2xl focus text-red-100">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <span className="text-2xl noSelect focus text-red-100">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-2xl focus text-red-100">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
}