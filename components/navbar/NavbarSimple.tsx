import Link from 'next/link';
import Button from '../buttons/Button';
import DrawerTrigger from '../drawer/DrawerTrigger';
import NavMenu from './NavMenu';

export default function NavbarSimple() {
  return (
    <>
      <div className="container navbar mx-auto bg-base-100 py-4">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn-ghost btn text-4xl normal-case text-primary"
          >
            ecotowari
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-stone-500">
            <NavMenu />
          </ul>
        </div>
        <div className="navbar-end">
          <a href={`/#sticker`}>
            <Button
              variant="contained"
              className="invisible lg:visible"
              size="btn-md"
            >
              Get a sticker
            </Button>
          </a>

          <DrawerTrigger id="my-drawer" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </DrawerTrigger>
        </div>
      </div>
    </>
  );
}
