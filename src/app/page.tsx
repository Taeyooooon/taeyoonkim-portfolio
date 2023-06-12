import React from 'react';
import Intro from '@/components/Intro';
import Background from '@/components/ui/Background';
import Introduction from '@/app/Introduction';

export default function Home() {
  return (
    <div className=' overflow-x-hidden'>
      <Background />
      <Intro />
      <Introduction />

      <div className='h-[500vh]' />
    </div>
  );
}
