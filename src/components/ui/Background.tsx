'use client';

import React, { useEffect, useState } from 'react';

const Background = () => {
  const [bgColor, setBgColor] = useState<'black' | 'white'>('black');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (innerHeight * 4 < scrollY) setBgColor('white');
      else setBgColor('black');
    });
  }, []);

  return (
    <div
      className={`${
        bgColor === 'black' ? 'bg-backGround' : 'bg-white dark:bg-backGround'
      } fixed left-0 top-0 -z-20 h-full w-full transition-all duration-300`}
    >
      {bgColor === 'black' && (
        <>
          <div className='stars' />
          <div className='stars2' />
          <div className='stars3' />
        </>
      )}
    </div>
  );
};

export default Background;
