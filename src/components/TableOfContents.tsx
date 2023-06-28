'use client';

import React, { useEffect, useState } from 'react';
import { useHeadingObserver } from '@/hooks/useHeadingObserver';
import { GoDot, GoDotFill } from 'react-icons/go';

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
                    id === activeId && 'text-blue-400 scale-105'
                  } text-lg font-bold transition-all duration-200`}
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
                    id === activeId && 'text-blue-400 font-bold'
                  } text-sm transition-all duration-200`}
                >
                  {/* FIXME: next 13.4.5에서는 Link태그로 id이동 불가능한걸로 확인 */}
                  <a href={`#${id}`} className='flex gap-1 items-center'>
                    {id === activeId ? <GoDotFill className=' text-blue-400' /> : <GoDot />}

                    {text}
                  </a>
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
