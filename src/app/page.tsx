import Introduction from '@/components/Introduction';
import DarkModeButton from '@/components/ui/DarkModeButton';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

export default function Home() {
  return (
    <>
      <Introduction />
      <DarkModeButton />
      <ScrollTopButton />
    </>
  );
}
