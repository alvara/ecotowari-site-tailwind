import Link from 'next/link';
import Button from '../buttons/Button';
import NavbarToggleButton from './NavbarToggleButton';
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
          <a href="/#sticker">
            <Button
              variant="contained"
              className="invisible lg:visible"
              size="btn-md"
            >
              Get a sticker
            </Button>
          </a>

          <div className="dropdown-end dropdown">
            <NavbarToggleButton />
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 text-slate-900 shadow"
            >
              <NavMenu />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
