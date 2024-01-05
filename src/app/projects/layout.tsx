import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven-Pro | Projects',
  description: 'Projects Sven-Pro has worked on',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>
    { children }
    </main>
}