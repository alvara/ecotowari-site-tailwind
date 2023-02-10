import Image from 'next/image';
import { Typography } from './Typography';
import signature from '../public/signature-white.png';

// export interface IHeaderProps {}

export default function Header() {
  return (
    <div className="bg-hero bg-cover ">
      <div className="header  dark:bg-gray-900 ">
        <div className="inner-header opacity-65 flex w-full flex-col ">
          <Image
            src={signature}
            alt="Jesse Alvarado"
            className="w-34 sm:max-w-30 p-8 md:max-w-md lg:max-w-xl"
          />
          <h1 className="mx-12 text-4xl">Freelance Frontend Developer</h1>
          <Typography variant="h3" className="m-0 text-white">
            Reach your full potential through cutting-edge web technology.
          </Typography>
        </div>

        <div className=" ">
          <svg
            className="waves "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax ">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
