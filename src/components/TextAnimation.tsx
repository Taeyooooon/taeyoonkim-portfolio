'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const startTrigger = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const borderText1 = useRef(null);
  const borderText2 = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: 'top top',
        toggleActions: 'play play play play',
        scrub: 1,
        // markers: true, // gsap devtool 같은
        toggleClass: 'toggled',
      },
      x: 1500,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(borderText1.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -1500,
    });
    gsap.to(borderText2.current, {
      ...config,
      x: -1500,
    });
  }, []);

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (innerHeight < scrollY) setIsShown(false);
      else setIsShown(true);
    });
  }, []);

  return (
    <div
      ref={startTrigger}
      className={` h-screen w-full flex items-center overflow-hidden text-blue-500 ${
        isShown ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div className={textContainerStyle}>
        <div className='text-[10rem]' ref={text1}>
          TAE YOON KIM
        </div>
        <div className={`text-[10rem] ${secondStyle}`} ref={text2}>
          FRONTEND
        </div>
      </div>

      <div className='w-full h-screen flex items-center justify-center'>
        <div className={circleStyle} />
      </div>

      <div className={textContainerStyle}>
        <div className='text-[10rem] text_stroke' ref={borderText1}>
          TAE YOON KIM
        </div>
        <div
          className={`text-[10rem] text_stroke ${secondStyle}`}
          ref={borderText2}
        >
          FRONTEND
        </div>
      </div>
    </div>
  );
};
export default TextAnimation;

const circleStyle = 'relative w-[35rem] h-[35rem] bg-white rounded-full';
const textContainerStyle = 'absolute top-[25vh] w-full';
const secondStyle = 'absolute left-auto right-0';
