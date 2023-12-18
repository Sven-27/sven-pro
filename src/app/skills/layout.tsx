import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Skills',
  description: 'Skills in web development',
}


export default function SkillsLayout({
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