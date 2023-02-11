import Footer from '../components/sections/Footer';
import '../styles/global.css';
import NavbarSimple from '../components/navbar/NavbarSimple';
import { Nunito } from '@next/font/google';
import Drawer from '@/components/drawer/Drawer';

const nunito = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} `}>
        <Drawer id="my-drawer">
          <div className="flex min-h-screen flex-col items-stretch justify-between ">
            <NavbarSimple />
            <div className="grow items-stretch">{children}</div>
            <Footer />
          </div>
        </Drawer>
      </body>
    </html>
  );
}
