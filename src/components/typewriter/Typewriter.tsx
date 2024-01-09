import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Typewriter() {
    const [text] = useTypewriter({
    words: [
      'Software engineer',
      'Web developer',
      'Front-end developer',
      'Back-end developer',
      'Full-stack developer',
    ],
    loop: false,
  })

  return (
    <div className="text-white text-center">
      { text }
       <Cursor />
    </div>
  )
}