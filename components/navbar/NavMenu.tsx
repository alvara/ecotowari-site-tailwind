import Link from 'next/link';

export default function NavMenu() {
  return (
    <>
      <li>
        <Link href="/mission" className="justify-center">
          Mission
        </Link>
      </li>
      <li>
        <Link href="/problem" className="justify-center">
          The Problem
        </Link>
      </li>
      <li>
        <Link href="/about" className="justify-center">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/contact" className="justify-center">
          Contact
        </Link>
      </li>
    </>
  );
}
