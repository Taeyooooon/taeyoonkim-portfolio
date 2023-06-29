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
      '초기설정부터 직접 제작한 원페이지 프로젝트',
      'GSAP을 이용한 스크롤 기반 애니메이션 추가',
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
    projectId: 'openAI',
    title: '색조합 추천 사이트',
    type: '토이 프로젝트',
    date: '2023.04',
    skills: ['ReactJS', 'TypeScript', 'TailwindCSS', 'React Query'],
    github: 'https://github.com/Taeyooooon/openai_toypj',
    deployLink: 'https://openai-toypj.vercel.app/',
    notion:
      'https://www.notion.so/taeyooooon/ChatGPT-API-c49bae942b754305bb6ab38e596fb7ec?pvs=4',
    descriptions: [
      'ContextAPI를 이용한 다크모드 구현',
      'GPT 응답 대기시간 동안 사용자 이탈을 최소화 하기위해 로딩 스피너를 넣었습니다',
      'Prompt를 직접 작성하고 Request 파라미터들을 설정하여 최대한 일관적인 답변을 받을 수 있게끔 하였습니다',
    ],
  },
  {
    projectId: 'nextBlog',
    title: 'NextJS 블로그',
    type: '개인 프로젝트',
    date: '2023.03',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Taeyooooon/next-blog',
    deployLink: 'https://next-blog-mu-eight.vercel.app/',
    notion:
      'https://www.notion.so/taeyooooon/NextJS-13-fec058226f2646e986d654f913a291b7?pvs=4',
    descriptions: [
      'nodeMailer 라이브러리를 사용하여 메일보내기 기능 구현',
      'yup 라이브러리를 통한 메일 폼의 유효성 검사 및 에러핸들링',
    ],
  },
  {
    projectId: 'iceCream',
    title: 'ICECREAM',
    type: '팀 프로젝트',
    date: '2023.02~2023.03',
    skills: [
      'ReactJS',
      'TypeScript',
      'Styled Components',
      'AWS S3, CloudFront',
      'Github Actions',
      'Redux Toolkit',
    ],
    github: 'https://github.com/primers-e01/icecream-front',
    notion:
      'https://www.notion.so/taeyooooon/IceCream-d4409d91adbb400fbecffd2922ddd571?pvs=4',
    descriptions: [
      'JavaScript 프로젝트 TypeScript로 마이그레이션',
      '모바일 친화적인 반응형 레이아웃을 구현',
      'Github-Actions을 통해 CI/CD 파이프라인 구축',
      'Project Manerger 로서 팀원들의 블로커를 확인하며 프로젝트 일정 조율',
      '거래 내역에 대한 데이터 그래프로 시각화',
      '포트원(구 아임포트) 을 통한 결제 연동',
    ],
  },
  {
    projectId: 'internship',
    title: 'PAYAP 인턴쉽 프로젝트',
    type: '인턴',
    date: '2023.01',
    skills: ['ReactJS', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/Taeyooooon/payap-admin-internship',
    notion:
      'https://www.notion.so/taeyooooon/PAYAP-Internship-Project-2878f81dc3224dd7bc5e8a9b4acf24eb?pvs=4',
    descriptions: [
      '베트남 이커머스 스타트업의 프론트엔드 개발자로 참여',
      '어드민 페이지 제작 참여',
      '어드민 페이지 초기설정',
      '어드민 페이지에서 상품들을 조회 및 수정 가능한 테이블 제작',
    ],
  },
  {
    projectId: 'wekea',
    title: 'WeKea',
    type: '팀 프로젝트',
    date: '22.12.02~22.12.16 (2주)',
    skills: ['ReactJS', 'JavaScript', 'SCSS'],
    github: 'https://github.com/Taeyooooon/weKea',
    notion:
      'https://www.notion.so/taeyooooon/WeKea-3e5d74a6f74f4f2cba19a8b1671e8d78?pvs=4',
    descriptions: [
      '전반적인 초기설정 및 백엔드-프론트엔드 간의 API 통신',
      '반응형 레이아웃 구현',
      '상품 검색기능 구현',
      '상품 필터 및 정렬 기능 구현',
      '로그인 시 획득한 JWT를 통해 유저 검증후 장바구니 표출',
      '재활용 가능한 컴포넌트들 (GNB, Footer, Slide Modal)를 제작',
      '사용자의 액션에 피드백을 주는 토스트알림 구현',
    ],
  },
];
