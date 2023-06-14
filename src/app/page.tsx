import React from 'react';
import Intro from '@/components/Intro';
import Background from '@/components/ui/Background';
import Introduction from '@/app/Introduction';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className=' overflow-x-hidden'>
      <Background />
      <Intro />
      <Introduction />
      <Skills/>
      

      <div className='h-[1000vh]' />
    </div>
  );
}
