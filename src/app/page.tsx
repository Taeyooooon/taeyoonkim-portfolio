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
      <div className=' bg-red-300'>그다음</div>

      <div className='h-[1000vh]' />
    </div>
  );
}
