import React from 'react';
import Link from 'next/link';
const Introduction = () => {
  return (
    <section className=' flex h-screen w-screen'>
      <aside className=' flex w-1/5 min-w-[160px] flex-col items-center justify-between bg-[#202224] py-24 text-white'>
        <ul className='flex flex-col gap-4'>
          {LINK_MAP.map(({ title, link }) => {
            return (
              <li key={link}>
                <Link href={link} target='_blank' className='text-3xl'>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <p>010-3336-0673</p>
          <Link href='mailto:eric8401@gmail.com'>eric8401@gmail.com</Link>
          {/* TODO: Constant값으로 관리하기 */}
          <p className=' text-neutral-400'>Last Updated : 123123</p>
        </div>
      </aside>
      <section className=' flex w-4/5 items-center justify-center'>
        Introduction
      </section>
    </section>
  );
};
export default Introduction;

const LINK_MAP = [
  { title: 'GitHub', link: 'https://github.com/Taeyooooon' },
  { title: 'Tech Blog', link: 'https://velog.io/@taeyooooon' },
];
