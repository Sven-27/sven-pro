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
        className="rounded-full border border-white mt-8 md:mt-16 md:w-56 md:h-56" 
      />
      <h1 className="text-white font-bold text-center text-3xl md:text-6xl pt-10 md:pt-16">
        I am <span className="block md:inline text-4xl md:text-6xl">Sven Notermans</span>
      </h1>
      <h2 className="text-center text-red-100 font-bold mt-2 md:mt-3 md:text-3xl">Software engineer&nbsp;
        <symbol className="text-white">&#64;</symbol>
        &nbsp;Sven-Pro&nbsp;
        <symbol className="text-white">&#38;</symbol>
        &nbsp;<Link href="https://www.webmix.nl">Webmix</Link>
      </h2>
      <Typewriter />
      <Link href="https://www.linkedin.com/in/sven-notermans" className="flex justify-center mt-8">
        <TiStar className="star" />
        <p className='flex flex-col text-[2rem] md:text-5xl text-white font-ks mx-3'>
          Let&#10076;s connect&#x21;
          <span className="flex justify-center items-center text-gray-100 font-ks text-base md:text-2xl md:mt-2">
            <FaChevronLeft className="chevron" />
            &nbsp;On LinkedIn
            <span className="text-red-100">&nbsp;/</span>
            <FaChevronRight className="chevron" />
          </span>
        </p>
        <TiStar className="star" />
      </Link>
      <Link 
        href="/contact" 
        className="btn"
      >
        <span className="py-3 px-4 md:py-5 md:px-6 bg-black rounded-xl md:text-2xl">
         Contact Me 
        </span>
      </Link>
    </main>
  )
}
