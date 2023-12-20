import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
    <Head>
      <title>About Page</title>
      <meta name="description" content="About Page" />
    </Head>
    <main className="bg-black h-screen">
      <h1 className="text-white">About Page</h1>
    </main>
    </>
  );
};

