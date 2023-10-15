export const PROJECTS_LIST = [
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

export const SKILLS_LIST = [
  'React',
  'NextJS',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'SCSS',
  'StyledComponent',
  'Git, GitHub',
];

export const SKILL_DETAIL_LIST = [
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

export const Link_LIST = [
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
