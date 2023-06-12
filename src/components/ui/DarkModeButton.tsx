'use client';

import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className='btn btn-outline fixed bottom-4 right-20'>
      {darkMode ? '다크' : '라이트'}
    </button>
  );
};
export default DarkModeButton;
