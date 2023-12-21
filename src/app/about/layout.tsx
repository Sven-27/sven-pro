import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven-Pro | About',
  description: 'What is Sven-Pro about?',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    { children }
    </section>
}