'use client';
import React from 'react';
import Typewriter from '@/components/typewriter/Typewriter';
import { TiStar } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import image from '../../public/img/sven-small.jpg';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Image
        src={image}
        alt="Picture of the author"
        width={150}
        height={150}
        className="rounded-full border border-white mt-8" 
      />
      <h1 className="text-white font-bold text-center text-3xl pt-10">
        I am <span className="block text-4xl">Sven Notermans</span>
      </h1>
      <h2 className="w-screen text-center text-red-100 font-bold mt-2">Software engineer&nbsp;
        <symbol className="text-white">&#64;</symbol>
        &nbsp;Sven-Pro&nbsp;
        <symbol className="text-white">&#38;</symbol>
        &nbsp;<Link href="https://www.webmix.nl">Webmix</Link>
      </h2>
      <Typewriter />
      <Link href="https://www.linkedin.com/in/sven-notermans" className="flex justify-center mt-8">
        <TiStar className="text-[3rem] text-red-100 animate-pulse" />
        <p className='flex flex-col text-[2rem] text-white font-ks mx-3'>
          Let&#10076;s connect&#x21;
          <span className="flex justify-center items-center text-gray-100 font-ks text-[1rem]">
            <FaChevronLeft className="text-[1rem] text-red-100" />
            &nbsp;On LinkedIn
            <span className="text-red-100">&nbsp;/</span>
            <FaChevronRight className="text-red-100" />
          </span>
        </p>
        <TiStar className="text-[3rem] text-red-100 animate-pulse" />
      </Link>
      <Link 
        href="/contact" 
        className="flex justify-center mt-12 text-white font-semi-bold p-[1px] rounded-xl bg-to-bottom"
      >
        <span className="py-3 px-4 bg-black rounded-xl">
         Contact Me 
        </span>
      </Link>
    </main>
  )
}
