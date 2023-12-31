import React from 'react';
import Providers from '@/app/providers';
import '@/styles/globals.scss';
import '@/styles/index.scss';
import { jua } from '@/app/font';
import { Analytics } from '@vercel/analytics/react';

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
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
