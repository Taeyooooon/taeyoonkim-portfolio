import React from 'react';
import Intro from '@/components/Intro';
import Background from '@/components/ui/Background';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Background />
      <Intro />
      <Introduction />
      <Skills />
      <Projects />

      <div className='h-[1000vh]' />
    </>
  );
}
