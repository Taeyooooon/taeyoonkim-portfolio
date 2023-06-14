import React from 'react';
import PinnedScrollAnimation from '@/components/gsap/PinnedScrollAnimation';
import Gradient from '@/components/ui/Gradient';
import Link from 'next/link';

const Introduction = () => {
  return (
    <PinnedScrollAnimation>
      <section className='h-screen py-8 '>
        <div className='mockup-window border border-black bg-base-300 h-full w-full max-w-screen-xl mx-auto'>
          <div className='flex justify-center items-center h-full w-full bg-base-200'>
            <div className=' text-3xl text-center flex flex-col gap-12'>
              <div className='flex items-center justify-center gap-8'>
                <p className='firstFadeIn text-4xl leading-relaxed'>
                  안녕하세요<Gradient>!</Gradient> <br />
                  주니어 Frontend 개발자 <br />
                  <b className='underlineAnimation text-5xl underlineStyle'>
                    김태윤
                  </b>{' '}
                  입니다
                  <Gradient>.</Gradient>
                </p>
              </div>
              <div className='leading-normal pb-12'>
                <div className='secondFadeIn'>
                  <Gradient>계속 배우고 도전</Gradient>하는 것을 즐깁니다
                  <Gradient>.</Gradient>
                </div>
                <div className='thirdFadeIn'>
                  새로 학습할 지식이 있다면, 배움을 위해{' '}
                  <Gradient>적극적인 자세</Gradient>를 가지고 습득하려 합니다.
                </div>
                <div className='fourthFadeIn'>
                  새로운 지식을 습득하는 중{' '}
                  <Gradient>벽에 부딪히는 과정의 힘</Gradient>을 믿으며
                  <Gradient>,</Gradient>
                </div>
                <div className='fifthFadeIn'>
                  지속해서 도전하는 과정에 두려움이 없습니다
                  <Gradient>.</Gradient>
                </div>
              </div>
              <ul className='sixthFadeIn mb-16 flex justify-center gap-4'>
                {Link_MAP.map(({ name, link }) => {
                  return (
                    <Link href={link} key={link} target='_blank'>
                      <li className='btn lg:btn-wide bg-blue-200 text-2xl hover:bg-blue-400 hover:text-white dark:text-black dark:hover:text-white'>
                        <span>{name}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PinnedScrollAnimation>
  );
};
export default Introduction;

const Link_MAP = [
  {
    name: 'Mail',
    link: 'mailto:eric8401@gmail.com',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Taeyooooon',
  },
  {
    name: 'Blog',
    link: 'https://velog.io/@taeyooooon',
  },
];
