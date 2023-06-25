'use client';

import React, { useEffect, useState } from 'react';
import { useHeadingObserver } from '@/hooks/useHeadingObserver';

interface HeadingType {
  nodeName: string;
  text: string | null;
  id: string;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  const { activeId } = useHeadingObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.toc'));
    const headingElements = elements.map((element) => {
      const { nodeName, childNodes, id } = element;
      return { nodeName, id, text: childNodes[0].textContent };
    });
    setHeadings(headingElements);
  }, []);

  return (
    <aside className='sticky self-start top-20 w-1/5'>
      <ul>
        {headings.map(({ nodeName, id, text }, index) => {
          // console.log('nodeName : ', nodeName); //TODO: nodeName 에 들어오는 태그별로 스타일 지정가능

          return (
            <li
              key={index}
              className={`${
                id === activeId && 'text-blue-400 scale-105'
              } transition-all duration-200`}
            >
              {/* <Link href={`/#${id}`}>{text}</Link> */}
              {/* TODO: nextjs에서 Link태그로 id 이동 가능한지 확인, 우선 공식문서에는 안보임 */}
              <a href={`#${id}`}>{text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default TableOfContents;
