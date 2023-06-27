'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

const SkillsAnimation = ({ children }: Props) => {
  const startRef = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: startRef.current,
            scrub: 1,
            start: 'top 70%',
            end: '+=100%',
            // markers: true,
          },
        })
        .from('.fadeIn0', {
          x: -100,
          opacity: 0,
        })
        .from('.fadeIn1', {
          x: 100,
          opacity: 0,
        })
        .from('.fadeIn2', {
          x: -100,
          opacity: 0,
        })
        .from('.fadeIn3', {
          x: 100,
          opacity: 0,
        })
        .from('.fadeIn4', {
          x: -100,
          opacity: 0,
        })
        .from('.fadeIn5', {
          x: 100,
          opacity: 0,
        });
    }, startRef);
    return () => context.revert();
  }, []);

  return <div ref={startRef}>{children}</div>;
};
export default SkillsAnimation;
