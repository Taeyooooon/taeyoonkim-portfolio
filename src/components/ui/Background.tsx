'use client';
import React, { useEffect, useState } from 'react';

const Background = () => {
  const [bgColor, setBgColor] = useState<'black' | 'white'>('black');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (innerHeight * 2.5 < scrollY) setBgColor('white');
      else setBgColor('black');
    });
  }, []);

  return (
    <div
      className={`${
        bgColor === 'black' ? 'bg-black' : 'bg-white'
      } fixed left-0 top-0 -z-10 h-full w-full transition-all duration-300`}
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

// const Container = styled.div<{ bgColor: string }>`
//   background-color: ${({ bgColor }) => bgColor};
//   transition: 0.2s;
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   z-index: -1;
//   top: 0;
//   left: 0;
// `;

export default Background;
