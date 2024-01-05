import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven-Pro | Skills',
  description: 'Technical skills Sven-Pro has',
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>
    { children }
    </main>
}