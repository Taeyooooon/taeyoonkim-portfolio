'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

const PinnedScrollAnimation = ({ children }: Props) => {
  const startRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(startRef.current, {
      scrollTrigger: {
        trigger: startRef.current,
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=100%',
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={startRef} className=' mt-[100vh] w-full h-full'>
        {children}
      </div>
    </>
  );
};
export default PinnedScrollAnimation;
