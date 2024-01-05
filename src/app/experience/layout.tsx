import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven-Pro | Experience',
  description: 'Companies and projects Sven-Pro has worked on',
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>
    { children }
    </main>
}