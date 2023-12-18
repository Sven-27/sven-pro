import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Experience',
  description: 'Work experience',
}


export default function Experienceayout({
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
