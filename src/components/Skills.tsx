import React from 'react';
import Gradient from '@/components/ui/Gradient';
import SkillsAnimation from '@/components/gsap/SkillsAnimation';
import { SKILLS_LIST, SKILL_DETAIL_LIST } from '@/constants/constant';

const Skills = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-20'>
      <h2 className='text-8xl mb-20'>
        <Gradient>Skills.</Gradient>
      </h2>

      <ul className='flex items-center justify-between mb-16'>
        {SKILLS_LIST.map((skill) => {
          return (
            <li
              className='badge border-white text-white bg-transparent text-base py-4 px-2 md:px-4'
              key={skill}
            >
              {skill}
            </li>
          );
        })}
      </ul>

      <SkillsAnimation>
        <ul className='flex flex-col'>
          {SKILL_DETAIL_LIST.map(({ name, details }, idx) => {
            return (
              <li
                key={name}
                className={`chat w-3/4 ${
                  idx % 2 === 0 ? ' chat-start self-start' : 'chat-end self-end'
                } fadeIn${idx}`}
              >
                <p className=' chat-header text-2xl text-white'>{name}</p>
                <article className=' chat-bubble w-full leading-loose'>
                  {details.map((detail) => {
                    return <p key={detail}>{`- ${detail}`}</p>;
                  })}
                </article>
              </li>
            );
          })}
        </ul>
      </SkillsAnimation>
    </section>
  );
};
export default Skills;
