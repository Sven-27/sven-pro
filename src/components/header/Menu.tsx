'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/img/spf-logo.png';
import { IoMdClose } from "react-icons/io";
import { navRoutes } from '@/data/routes';


type Props = {
  handleClick: () => void;
};

export default function Menu({ handleClick }: Props) {
  return (
    <menu className="absolute top-0 left-0 w-full h-full bg-black ">
      <div className="h-fit w-full flex items-center justify-between p-6 shadow-xl shadow-red-100/20">
        <Link href="/">
          <Image
            src={ logo }
            alt="Logo"
            width='80'
            className="mr-3"
          />
        </Link>
        <IoMdClose 
          className="text-red-100 text-4xl md:text-5xl animate-pulse lg:hidden" 
          onClick={ handleClick }
        />
      </div>
      <nav>
            <div
              className="px-8 py-8 text-red-100"
            >
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {
                navRoutes.map((route, index) => (
                  <li 
                    key={ index }
                    className="pb-4"
                  >
                    <Link href={ route.link }>
                      <span className="text-2xl text-red-100 transition hover:text-gray-100 md:p-4">
                        { route.name }
                      </span>
                    </Link>
                  </li>
                ))
              }
            </ul>
      </nav>
    </menu>
  );
}