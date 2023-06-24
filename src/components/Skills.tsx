import React from 'react';
import Gradient from '@/components/ui/Gradient';
import SkillsAnimation from '@/components/gsap/SkillsAnimation';

const Skills = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-20'>
      <h2 className='text-8xl mb-20'>
        <Gradient>Skills.</Gradient>
      </h2>

      <ul className='flex items-center justify-between mb-16'>
        {SKILLS_LIST.map((skill) => {
          return (
            <div
              className='badge border-white text-white bg-transparent text-base py-4 px-2 md:px-4'
              key={skill}
            >
              {skill}
            </div>
          );
        })}
      </ul>

      <SkillsAnimation>
        <ul className='flex flex-col'>
          {SKILLDETAIL_LIST.map(({ name, details }, idx) => {
            return (
              <li
                key={name}
                className={`chat w-3/4 ${
                  idx % 2 === 0 ? ' chat-start self-start' : 'chat-end self-end'
                } fadeIn${idx}`}
              >
                <h4 className=' chat-header text-2xl text-white'>{name}</h4>
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

const SKILLS_LIST = [
  'React',
  'NextJS',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'SCSS',
  'StyledComponent',
  'Git, GitHub',
];

const SKILLDETAIL_LIST = [
  {
    name: 'Overall',
    details: [
      '개발자 이전에 사용자의 입장에서 고민합니다.',
      '깔끔하고 중복을 제거한 클린한 코드를 작성하려 합니다.',
      'UI를 체계적으로 설계하려 합니다.',
      '새로운 기술에 거부감이 없고 적극적으로 접근합니다.',
    ],
  },
  {
    name: 'HTML / CSS',
    details: [
      '시맨틱 마크업을 준수하려 노력합니다.',
      '무분별한 div 사용을 지양합니다.',
      '반응형 웹을 구현 할 수 있습니다.',
      'Flex, Grid, Position 등 레이아웃 잡는 것에 익숙합니다.',
      'Styled Components, Sass, TailwindCSS 등 Css 전처리기, 프레임워크, CSS in JS를 활용할 수 있습니다.',
    ],
  },
  {
    name: 'JavaScript / TypeScript',
    details: [
      'ES6 자바스크립트 문법에 익숙합니다.',
      'DOM, EVENT를 활용해서 웹페이지를 구현 할 수 있습니다.',
      'Fetch / Axios 등 HTTP 통신에 익숙합니다.',
      'TypeScript 를 통해 적절한 타입을 지정할 수 있습니다.',
    ],
  },
  {
    name: 'React (V18)',
    details: [
      '리액트의 기본 문법에 익숙하며, 컨벤션에 맞게 개발하기 위해 노력합니다.',
      '리덕스 툴킷, Context API을 활용한 전역 상태관리를 할 수 있습니다.',
      '필요한 라이브러리를 적절히 사용 할 수 있습니다.',
      'React의 컴포넌트를 적절히 분리하고 재사용 합니다.',
      'React-Hook-Form 라이브러리를 사용하여 복잡한 다차원 배열 input을 한번에 관리하고, validate를 할 수 있습니다.',
    ],
  },
  {
    name: 'NextJS (V13)',
    details: [
      'NextJS 13버전 App 디렉토리 방식에 익숙합니다.',
      'SSR, CSR, SSG, ISR 를 이해하고 있고, 적절한 상황에 활용할 수 있습니다.',
    ],
  },
  {
    name: 'Tool',
    details: [
      'Git을 사용 할 수 있으며, Git Flow 개발 방법에 익숙합니다.',
      'Git Hub을 통한 코드 공유 및 협업에 필요한 브랜치 활용이 가능합니다.',
      'AWS S3, Cloudfront를 활용할 수 있습니다.',
      'Github-Action을 통해 CI/CD 파이프라인 구축을 할 수 있습니다.',
      'Mac OS에 익숙하고 생산성에 관심이 많아 적절한 개발도구를 활용할 수 있습니다.',
      'Slack, Notion, Figma, Trello 등 협업 툴을 적극 활용 할 수 있습니다.',
    ],
  },
];
