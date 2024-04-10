'use client';
import React from 'react';
import Typewriter from '@/components/typewriter/Typewriter';
import { TiStar } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import image from '../../public/img/sven-small.jpg';
import SvenPro from '../../public/img/sven-20231.jpg';

export default function Home() {
  return (
    <div className="flex flex-row">
    <main className="flex flex-col items-center w-[55%] h-screen justify-center xl:justify-evenly xl:flex-grow bg-red-100 relative diagonal">
      <Image
        src={image}
        alt="Picture of the author"
        width={120}
        height={120}
        className="rounded-full border border-white mt-8 md:mt-16 md:w-44 md:h-44" 
      />
      <div>
      <h1 className="text-white font-bold text-center text-3xl md:text-5xl xl:text-7xl mt-12 md:mt-16 xl:mt-0">
        I am Sven Notermans
      </h1>
      <h2 className="text-center text-red-100 font-bold mt-2 md:mt-3 text-base md:text-xl xl:text-3xl">Software engineer&nbsp;
        <symbol className="text-white">&#64;</symbol>
        &nbsp;Sven-Pro&nbsp;
        <symbol className="text-white">&#38;</symbol>
        &nbsp;<Link href="https://www.webmix.nl">Webmix</Link>
      </h2>
      <Typewriter />
      <Link href="https://www.linkedin.com/in/sven-notermans" className="flex justify-center mt-16">
        <TiStar className="star" />
        <p className='flex flex-col text-3xl md:text-4xl text-white font-ks mx-3'>
          Let&#10076;s connect&#x21;
          <span className="flex justify-center items-center text-gray-100 font-ks text-base md:text-xl mt-1 md:mt-2">
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
        <span className="py-3 px-4 md:py-5 md:px-6 bg-white rounded-xl text-sm md:text-lg tracking-widest">
         Contact Me 
        </span>
      </Link>
      </div>
    </main>
    <section className="w-[45%] h-screen bg-red-200">
       <Image
        src={image}
        alt="Picture of the author"
        width={120}
        height={120}
        className="rounded-full border border-white mt-8 md:mt-16 md:w-44 md:h-44" 
      />
      </section>
      </div>
  )
}
