import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Typewriter() {
    const [text] = useTypewriter({
    words: [
      '<p>Just a guy who loves to code</p>',
      'And create beautiful websites',
      'With React.js, Next.js and TailwindCSS',
      'If this is what you are looking for!',
      'Just contact me and find me on LinkedIn!',
    ],
    loop: false,
  })

  return (
    <div className="block text-center mt-2 text-gray-100">
      { text }
       <Cursor />
    </div>
  )
}