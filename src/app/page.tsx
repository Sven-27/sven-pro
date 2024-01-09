'use client';
import React from 'react';
import Typewriter from '@/components/typewriter/Typewriter';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-white font-bold stroke text-center text-3xl pt-10 z-10">
        I am <span className="block text-4xl">Sven Notermans</span>
      </h1>
      <section>
        <h2 className="text-red-100 font-bold mt-2">Software engineer&nbsp;
          <symbol className="text-white">&#64;</symbol>
          &nbsp;Sven-Pro&nbsp;
          <symbol className="text-white">&#38;</symbol>
          &nbsp;Webmix</h2>
          <Typewriter />
      </section>
    </main>
  )
}
