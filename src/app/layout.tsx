import React from 'react';
import { Jua } from 'next/font/google';
import Providers from '@/app/providers';
import DarkModeButton from '@/components/ui/DarkModeButton';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import './globals.scss';
import './index.scss';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: '김태윤 포트폴리오',
  description: '김태윤 포트폴리오 사이트',
  openGraph: {
    title: `김태윤 포트폴리오`,
    description: `프론트엔드 김태윤 포트폴리오`,
    images: `/public/pingu.jpg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang='ko'>
        <body className={jua.className}>
          <main>{children}</main>
          <DarkModeButton />
          <ScrollTopButton />
        </body>
      </html>
    </Providers>
  );
}
