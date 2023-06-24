import React from 'react';
import Providers from '@/app/providers';
import DarkModeButton from '@/components/ui/DarkModeButton';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import '@/styles/globals.scss';
import '@/styles/index.scss';
import { jua } from '@/app/font';

export const metadata = {
  title: '김태윤 포트폴리오',
  description: '김태윤 포트폴리오 사이트',
  openGraph: {
    title: `김태윤 포트폴리오`,
    description: `프론트엔드 김태윤 포트폴리오`,
    images: `/pingu.jpg`,
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
