import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Button from '../buttons/Button';
import NavMenu from '../navbar/NavMenu';

export interface IDrawerProps {
  id: string; // required to trigger the drawer
  children: React.ReactNode;
}

export default function Drawer({ id, children }: IDrawerProps) {
  function closeDrawer() {
    document.getElementById(id).click();
  }

  return (
    <div className="drawer drawer-end">
      {/* Hidden toggle for sidebar */}
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content scroll-smooth">
        {/* Page Content Goes Here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay"></label>
        {/* Sidebar Content */}
        <ul className="menu w-80 justify-center gap-8 bg-base-100 p-4 text-center align-middle text-base-content">
          <li className="menu-title">
            <span>Menu</span>
          </li>
          <li>
            <Link
              href="/"
              className="justify-center"
              onClick={() => closeDrawer()}
            >
              Home
            </Link>
          </li>
          <NavMenu closeDrawer={closeDrawer} />
          <li>
            <a
              href={`/#sticker`}
              className="justify-center"
              onClick={() => closeDrawer()}
            >
              <Button variant="contained">Get a sticker</Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
