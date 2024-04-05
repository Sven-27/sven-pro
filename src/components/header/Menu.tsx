'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { IoMdClose } from "react-icons/io";
import { navRoutes } from '@/data/routes';
import { motion } from 'framer-motion';

type Props = {
  handleClick: () => void;
  pathname: string;
};

export default function Menu({ handleClick, pathname }: Props) {
  return (
    <menu className="absolute top-0 right-0 bottom-0 left-0 bg-red-200">
      <header className="h-24 md:h-32 flex items-center justify-between px-6 md:px-12">
        <Link href="/">
          <Image
            src={ logo }
            alt="Logo"
            width='50'
            className="mr-3 md:h-32 md:w-32"
          />
        </Link>
        <IoMdClose 
          className="text-red-100 text-3xl md:text-4xl lg:hidden" 
          onClick={ handleClick }
        />
      </header>
      <nav className="flex justify-center h-[calc(100%-6rem)] md:h-[calc(100%-8rem)]">
          <ul className="flex flex-col items-center h-full pt-12 px-16 md:px-24">
            {
              navRoutes.map((route, index) => (
                <motion.li 
                  initial={{ 
                    opacity: 0,
                    y: 300 
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0
                  }}
                  transition={{ 
                    duration: 3,
                  }}
                  key={ index }
                  className="py-4 md:py-8"
                >
                  <Link 
                    href={ route.link }
                    onClick={ handleClick }
                  >
                    <span className={`
                      ${pathname === route.link ? 'active' : 'text-white' }
                      text-base md:text-lg transition hover:text-red-100 md:p-4`}
                    >
                      { route.name }
                    </span>
                  </Link>
                </motion.li>
              ))
            }
          </ul>
      </nav>
    </menu>
  );
}