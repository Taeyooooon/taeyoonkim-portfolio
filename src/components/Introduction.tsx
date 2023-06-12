import React from 'react';
import Link from 'next/link';
const Introduction = () => {
  return (
    <section className=' flex h-screen w-screen '>
      <aside className=' my-20 flex w-1/5 flex-col items-center justify-between'>
        <ul className='flex flex-col'>
          {LINK_MAP.map(({ title, link }) => {
            return (
              <li key={link}>
                <Link href={link} target='_blank' className='text-2xl'>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <p>010-3336-0673</p>
          <Link href='mailto:eric8401@gmail.com'>eric8401@gmail.com</Link>
        </div>
      </aside>
      <section className=' w-4/5'>Introduction</section>
    </section>
  );
};
export default Introduction;

const LINK_MAP = [
  { title: 'GitHub', link: 'https://github.com/Taeyooooon' },
  { title: 'Tech Blog', link: 'https://velog.io/@taeyooooon' },
];
