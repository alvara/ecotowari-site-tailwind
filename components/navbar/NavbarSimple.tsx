import Link from 'next/link';
import Button from '../buttons/Button';
import MainLogo from '../Icon';
import NavbarToggleButton from './NavbarToggleButton';
import NavMenu from './NavMenu';

export default function NavbarSimple() {
  return (
    <>
      <div className="container navbar mx-auto bg-base-100 py-4">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn-ghost btn text-xl normal-case text-zinc-900"
          >
            <MainLogo className="w-12" />
            ecotowari
            {/* <Image src={signature} className="w-32" alt="Jesse Alvarado" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-stone-500">
            <NavMenu />
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contact">
            <Button className="invisible lg:visible">Let&apos;s Talk</Button>
          </Link>
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
