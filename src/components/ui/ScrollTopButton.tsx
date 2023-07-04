'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Lottie from 'react-lottie';
import scroll from '../../../public/scroll.json';

const ScrollTopButton = () => {
  const [isScrollable, setIsScrollable] = useState(true);

  const scrollToTop = useCallback(
    () => window.scroll({ top: 0, behavior: 'smooth' }),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', () => {
      // 스크롤 가장 아래 위치하면 false
      if (innerHeight + scrollY >= document.body.offsetHeight) {
        setIsScrollable(false);
      } else setIsScrollable(true);
    });
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: scroll,
  };

  return (
    <button className='btn btn-circle dark:bg-white border-backGround fixed bottom-20 right-4 z-20'>
      {isScrollable ? (
        <Lottie options={lottieOptions} ariaRole='img' isClickToPauseDisabled />
      ) : (
        <AiOutlineArrowUp
          onClick={scrollToTop}
          className='text-2xl text-black'
        />
      )}
    </button>
  );
};
export default ScrollTopButton;
