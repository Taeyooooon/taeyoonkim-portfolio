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
    let context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: startRef.current,
            scrub: 1,
            pin: true,
            start: 'top top',
            end: '+=100%',
            markers: true,
            // TODO: progress bar 만들기
            // onUpdate: (self) => console.log('progress:', self.progress),
          },
        })
        .from('.firstFadeIn', {
          y: -100,
          opacity: 0,
        })
        .to('.underlineAnimation', {
          scrollTrigger: {
            trigger: '.underlineAnimation',
            toggleActions: 'play none none none',
          },
          backgroundImage: `linear-gradient(transparent 80%, #60a5fa 20%)`,
          backgroundSize: '100% 100%',
          duration: 0.6,
          ease: 'expo.out',
        })
        .from('.secondFadeIn', {
          x: -100,
          opacity: 0,
        })
        .from('.thirdFadeIn', {
          x: -100,
          opacity: 0,
        })
        .from('.fourthFadeIn', {
          x: -100,
          opacity: 0,
        })
        .from('.fifthFadeIn', {
          x: -100,
          opacity: 0,
        })
        .from('.sixthFadeIn', {
          opacity: 0,
        });
    }, startRef);
    return () => context.revert();
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
