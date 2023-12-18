import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Projects',
  description: 'Projects page',
}


export default function ProjectsLayout({
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
