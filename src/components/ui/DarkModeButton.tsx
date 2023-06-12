'use client';

import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className='btn'>
      {darkMode ? '다크' : '라이트'}
    </button>
  );
};
export default DarkModeButton;
