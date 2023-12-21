import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven-Pro | Contact',
  description: 'Send a message to Sven-Pro',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    { children }
    </section>
}