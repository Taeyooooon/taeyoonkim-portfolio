'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

const FadeInAnimation = ({ children }: Props) => {
  const startTrigger = useRef(null);

  useLayoutEffect(() => {
    gsap.from(startTrigger.current, {
      scrollTrigger: {
        trigger: startTrigger.current,
        toggleActions: 'play reverse play reverse',

        scrub: 1,
        start: 'top 95%',
        end: '+=100',
      },
      opacity: 0,
    });
  }, []);

  return <div ref={startTrigger}>{children}</div>;
};
export default FadeInAnimation;
