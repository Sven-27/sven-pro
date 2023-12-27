'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import html from '../../public/img/bg-image.png';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 relative">
      <motion.div
        initial={{ 
          opacity: 0,
        }}
        animate={{ 
          opacity: 1,
        }}
        transition={{ 
          duration: 2,
        }}
        className="flex items-center absolute top-0 left-0 w-full h-full translate-[-50%, -50%] justify-center"
        >
      <Image
        src={ html }
        alt="Logo"
        width="350"
        className="opacity-10"
      />
      </motion.div>
    </main>
  )
}
