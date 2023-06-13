import PinnedScrollAnimation from '@/components/PinnedScrollAnimation';
import React from 'react';
const Introduction = () => {
  return (
    <PinnedScrollAnimation>
      <section className='h-screen py-8 '>
        <div className='mockup-window border border-black bg-base-300 h-full w-full max-w-6xl mx-auto'>
          <div className='flex justify-center items-center h-full w-full bg-base-200'>
            Hello!
          </div>
        </div>
      </section>
    </PinnedScrollAnimation>
  );
};
export default Introduction;
