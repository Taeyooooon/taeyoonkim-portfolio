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

const Projects = () => {
  return (
    <section className={`${gothic_a1.className} max-w-screen-xl mx-auto mt-20`}>
      <h2 id='projects' className='toc text-8xl mb-20'>
        <Gradient>Projects.</Gradient>
      </h2>
      <section className='flex relative'>
        <TableOfContents />
        <article className='flex flex-col gap-20 w-4/5'>
          {PROJECTS_MAP.map(
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

const PROJECTS_MAP = [
  {
    projectId: 'portfolio',
    title: '포트폴리오 프로젝트',
    type: '개인 프로젝트',
    date: '2023.06 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'daisyUI', 'GSAP'],
    github: 'https://github.com/Taeyooooon/taeyoonkim-portfolio',
    deployLink: 'https://taeyoonkim-portfolio.vercel.app/',
    notion:
      'https://www.notion.so/taeyooooon/4c1637f9a9844781a6ccd41b8eb4ee23?pvs=4',
    descriptions: [
      '123123123',
      '프로젝트 설명2',
      '프로젝트 설명3',
      '프로젝트 설명4',
    ],
  },
  {
    projectId: 'bootstrap',
    title: '이력서 포맷 서비스',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
  {
    projectId: 'test',
    title: '테스트용1',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'ㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹㅁㄹ이ㅏ먼이ㅓ미라ㅓㅁㄹ',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
  {
    projectId: 'test2',
    title: '테스트용2',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
  {
    projectId: 'test3',
    title: '테스트용3',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
  {
    projectId: 'test4',
    title: '테스트용4',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
  {
    projectId: 'test5',
    title: '테스트용5',
    type: '팀 프로젝트',
    date: '2023.05 ~ 진행중',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'MaterialUI'],
    github: 'https://github.com/ratatat-io/bootstrap',
    notion:
      'https://www.notion.so/taeyooooon/Bootstrap-c9a4858c91794d9bb2237886cfafff34?pvs=4',
    descriptions: [
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
      'Github, Google OAuth 로그인 구현',
      'React Hook Form 을 이용한 복잡한 데이터 구조의 폼관리',
      'Focus된 인풋의 데이터가 표출될 부분으로 스크롤되면서 강조되는 기능 구현',
      'ISR 랜더링 방식을 적용해 초기 로딩속도가 빠른 페이지 구현',
      'SEO를 위한 meta태그 작성',
    ],
  },
];
