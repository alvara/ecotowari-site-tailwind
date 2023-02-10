import Link from 'next/link';

export default function NavMenu() {
  return (
    <>
      <li>
        <Link href="/blog">Articles</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
    </>
  );
}
