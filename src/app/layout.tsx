import React from 'react';
import './globals.scss';
import './index.scss';
import { Jua } from 'next/font/google';
import Providers from '@/app/providers';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: '김태윤 포트폴리오',
  description: '김태윤 포트폴리오 사이트',
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
        </body>
      </html>
    </Providers>
  );
}
