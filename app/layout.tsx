import Footer from '../components/sections/Footer';
import '../styles/global.css';
import NavbarSimple from '../components/navbar/NavbarSimple';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-stretch justify-between">
          <NavbarSimple />
          <div className="grow items-stretch">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
