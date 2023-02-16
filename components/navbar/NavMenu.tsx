import Link from 'next/link';

export default function NavMenu({ closeDrawer }: { closeDrawer?: () => void }) {
  return (
    <>
      <li>
        <Link
          href="/mission"
          className="justify-center"
          onClick={() => closeDrawer()}
        >
          Mission
        </Link>
      </li>
      <li>
        <Link
          href="/problem"
          className="justify-center"
          onClick={() => closeDrawer()}
        >
          The Problem
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="justify-center"
          onClick={() => closeDrawer()}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="justify-center"
          onClick={() => closeDrawer()}
        >
          Contact
        </Link>
      </li>
    </>
  );
}
