import type { Metadata } from 'next';
import { 
  Raleway,
  Roboto_Condensed, 
  Reggae_One,
  Kaushan_Script
} from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/header/Header';
import Particles from '@/components/particles/Particles';

const raleway = Raleway({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--raleway',
 })

export const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
});
 
export const reggaeOne = Reggae_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--reggae',
});

export const kaushanScript = Kaushan_Script({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--kaushan',
});

export const metadata: Metadata = {
  title: 'Sven-Pro | Home',
  description: 'All about Sven-Pro and his work as a software developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-transparent relative flex flex-col min-h-screen ${raleway.className} ${robotoCondensed.variable} ${reggaeOne.variable} ${kaushanScript.variable}` }>
        <Particles /> 
        <Header />
        { children }
      </body>
    </html>
  )
}
