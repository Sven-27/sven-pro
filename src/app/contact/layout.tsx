import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Contact',
  description: 'Contact me',
}


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}