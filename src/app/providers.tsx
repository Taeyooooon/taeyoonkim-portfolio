'use client';

import React from 'react';
import { DarkModeProvider } from '@/context/DarkModeContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
export default Providers;
