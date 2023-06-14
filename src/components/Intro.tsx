import React from 'react';
import dynamic from 'next/dynamic';

const TextAnimation = dynamic(() => import('./gsap/TextAnimation'));

const Intro = () => {
  return (
    <section className=' flex items-center justify-center h-screen w-full fixed top-0 left-0'>
      <TextAnimation />
    </section>
  );
};
export default Intro;
