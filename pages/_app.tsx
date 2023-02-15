import '../styles/global.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import NavbarSimple from '@/components/navbar/NavbarSimple';
import Footer from '@/components/sections/Footer';
import Drawer from '@/components/drawer/Drawer';
import { Nunito } from '@next/font/google';

export interface PageMeta {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageMeta?: PageMeta;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  title: string;
  requiredProp: boolean;
};

const nunito = Nunito({
  subsets: ['latin'],
});

// eslint-disable-next-line import/no-default-export
export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {router.pathname.replace('/', '').charAt(0).toUpperCase() +
            router.pathname.slice(2)}
        </title>
      </Head>
      <main className={`${nunito.className} `}>
        <Drawer id="my-drawer">
          <div className="flex min-h-screen flex-col items-stretch justify-between ">
            <NavbarSimple />
            <div className="grow items-stretch">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </Drawer>{' '}
      </main>
    </>
  );
}
