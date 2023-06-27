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
    const headingElements = elements.map(({ nodeName, childNodes, id }) => {
      return { nodeName, id, text: childNodes[0].textContent };
    });
    setHeadings(headingElements);
  }, []);

  return (
    <aside className='sticky self-start top-20 w-1/5 mt-20'>
      <ul>
        {headings.map(({ nodeName, id, text }, index) => {
          switch (nodeName) {
            case 'H2':
              return (
                <li
                  key={index}
                  className={`${
                    id === activeId && 'text-blue-400 font-bold scale-105'
                  } text-base mt-4 mb-2 transition-all duration-200`}
                >
                  {/* FIXME: next 13.4.5에서는 Link태그로 id이동 불가능한걸로 확인 */}
                  <a href={`#${id}`}>{text}</a>
                </li>
              );
            case 'H3':
              return (
                <li
                  key={index}
                  className={`${
                    id === activeId && 'text-blue-400 font-bold scale-105'
                  } text-sm ml-4 transition-all duration-200`}
                >
                  {/* FIXME: next 13.4.5에서는 Link태그로 id이동 불가능한걸로 확인 */}
                  <a href={`#${id}`}>{text}</a>
                </li>
              );

            default:
              return '';
          }
        })}
      </ul>
    </aside>
  );
};
export default TableOfContents;
