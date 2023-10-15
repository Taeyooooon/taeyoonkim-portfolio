import React from 'react';
import Link from 'next/link';
import Gradient from '@/components/ui/Gradient';
import { SiGithub, SiNotion } from 'react-icons/si';
import { BiLinkAlt } from 'react-icons/bi';
import { HiCheck } from 'react-icons/hi';
import { BsGlobe } from 'react-icons/bs';
import { FiTool } from 'react-icons/fi';
import { gothic_a1 } from '@/app/font';
import TableOfContents from '@/components/TableOfContents';
import FadeInAnimation from '@/components/gsap/FadeInAnimation';
import { PROJECTS_LIST } from '@/constants/constant';

const Projects = () => {
  return (
    <section className={`${gothic_a1.className} max-w-screen-xl mx-auto mt-20`}>
      <h2 id='projects' className='toc text-8xl mb-20'>
        <Gradient>Projects.</Gradient>
      </h2>
      <section className='flex relative'>
        <TableOfContents />
        <article className='flex flex-col gap-20 w-4/5'>
          {PROJECTS_LIST.map(
            (
              {
                projectId,
                title,
                type,
                date,
                skills,
                github,
                notion,
                deployLink,
                descriptions,
              },
              index
            ) => {
              return (
                <section key={index} className='flex flex-col gap-6'>
                  <FadeInAnimation>
                    <span className='text-xl'>{type}</span>
                  </FadeInAnimation>

                  <FadeInAnimation>
                    <h3 id={projectId} className='toc text-6xl font-bold'>
                      {title}
                    </h3>
                  </FadeInAnimation>

                  <FadeInAnimation>
                    <span className='text-lg'>{date}</span>
                  </FadeInAnimation>

                  <article>
                    {descriptions.map((description, index) => {
                      return (
                        <FadeInAnimation key={index}>
                          <p className='flex items-center gap-2 text-xl'>
                            <HiCheck className='text-blue-400 text-2xl' />
                            {description}
                          </p>
                        </FadeInAnimation>
                      );
                    })}
                  </article>

                  <FadeInAnimation>
                    <p className='flex items-center gap-2 text-2xl font-bold'>
                      <FiTool />
                      기술스택
                    </p>
                  </FadeInAnimation>

                  <FadeInAnimation>
                    <ul className='flex items-center gap-2 font-bold'>
                      {skills.map((skill, index) => {
                        return (
                          <li
                            key={index}
                            className=' badge badge-outline border-2 badge-lg'
                          >
                            <span className='text-lg'>{skill}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </FadeInAnimation>

                  <FadeInAnimation>
                    <p className='flex items-center gap-2 text-2xl font-bold'>
                      <BiLinkAlt className=' text-2xl' />
                      관련 링크들
                    </p>
                  </FadeInAnimation>

                  <FadeInAnimation>
                    <div className='flex flex-col gap-2'>
                      {github && (
                        <Link
                          href={github}
                          target='_blank'
                          className='flex items-center self-start gap-2 link text-xl'
                        >
                          <SiGithub className=' text-2xl' />
                          Github 링크
                        </Link>
                      )}

                      {notion && (
                        <Link
                          href={notion}
                          target='_blank'
                          className='flex items-center self-start gap-2 link text-xl'
                        >
                          <SiNotion className=' text-2xl' />
                          Notion에서 자세히 보기
                        </Link>
                      )}

                      {deployLink && (
                        <Link
                          href={deployLink}
                          target='_blank'
                          className='flex items-center self-start gap-2 link text-xl'
                        >
                          <BsGlobe className=' text-2xl' />
                          배포링크 확인하기
                        </Link>
                      )}
                    </div>
                  </FadeInAnimation>
                </section>
              );
            }
          )}
        </article>
      </section>
    </section>
  );
};
export default Projects;
