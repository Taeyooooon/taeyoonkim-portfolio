'use client';

import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className='btn btn-circle btn-ghost bg-backGround bg-opacity-90 fixed top-4 right-4 '>
      <label className='swap swap-rotate w-12 h-12'>
        <input type='checkbox' onChange={toggleDarkMode} checked={darkMode} />
        <BsFillSunFill className=' text-xl text-white swap-on' />
        <BsFillMoonFill className='text-xl text-white swap-off' />
      </label>
    </button>
  );
};
export default DarkModeButton;
