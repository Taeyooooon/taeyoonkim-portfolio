'use client';

import React, { useCallback } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
const ScrollTopButton = () => {
  const scrollToTop = useCallback(
    () => window.scroll({ top: 0, behavior: 'smooth' }),
    []
  );

  return (
    <button className='btn-circle btn btn-outline fixed right-4 bottom-4' onClick={scrollToTop}>
      <AiOutlineArrowUp className='text-2xl' />
    </button>
  );
};
export default ScrollTopButton;
