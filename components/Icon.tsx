import Image from 'next/image';
import logo from '../public/brillberg-logo.png';

export interface IMainLogoProps {
  className?: string;
}

export default function MainLogo({ className }: IMainLogoProps) {
  return <Image src={logo} alt="logo" className={className} />;
}
