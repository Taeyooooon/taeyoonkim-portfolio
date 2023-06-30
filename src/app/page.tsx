import React from 'react';
import Intro from '@/components/Intro';
import Background from '@/components/ui/Background';
import Introduction from '@/components/Introduction';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import DarkModeButton from '@/components/ui/DarkModeButton';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <Intro />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
      <DarkModeButton />
      <ScrollTopButton />
    </>
  );
}
