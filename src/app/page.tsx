import Introduction from '@/components/Introduction';
import Background from '@/components/ui/Background';
import DarkModeButton from '@/components/ui/DarkModeButton';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

export default function Home() {
  return (
    <>
      <Background />
      <Introduction />
      <DarkModeButton />
      <div className='h-[500vh]' />
      <ScrollTopButton />
    </>
  );
}
