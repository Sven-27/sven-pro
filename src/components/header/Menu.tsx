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
    <menu className="absolute top-0 bottom-0 flex flex-col left-0 w-full  bg-black">
      <div className="h-[6rem] w-full flex items-center justify-between px-6 md:px-12 shadow-xl shadow-white/20">
        <Link href="/">
          <Image
            src={ logo }
            alt="Logo"
            width='50'
            className="mr-3"
          />
        </Link>
        <IoMdClose 
          className="text-red-100 text-4xl md:text-5xl animate-pulse lg:hidden" 
          onClick={ handleClick }
        />
      </div>
      <nav className="flex justify-center h-full">
          <ul className="flex flex-col items-center pt-12 px-16 md:px-24 w-fit bg-red-200/40 border-x border-white">
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
                      text-md md:text-2xl transition hover:text-red-100 md:p-4`}
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