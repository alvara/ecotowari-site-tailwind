'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IInstagram } from '../../services/type';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import Section from '@/components/Section';

interface IFollowUs {
  instagram: IInstagram[];
  backgroundColor?: string;
}
export default function FollowUsSection({
  instagram,
  backgroundColor,
}: IFollowUs) {
  return (
    <Section
      backgroundColor={backgroundColor ? backgroundColor : 'bg-slate-50'}
      className=""
      columns=" lg:grid-cols-4"
    >
      <div className="col-span-2 lg:col-span-4">
        <Typography variant="h2" className="text-center" border>
          Follow us
        </Typography>

        <div className="mx-auto mb-4 text-center ">
          <Link href="https://www.instagram.com/ecotowari/" target="_window">
            <FontAwesomeIcon
              icon={faInstagram as any}
              size="lg"
              className="mx-2 rounded-full bg-accent p-6 text-4xl text-white"
            />
          </Link>

          <Link href={`https://www.facebook.com/ecotowari`} target="_window">
            <FontAwesomeIcon
              icon={faFacebook as any}
              size="lg"
              className="mx-2 rounded-full bg-accent p-6 text-4xl text-white"
            />
          </Link>
        </div>
      </div>
      {instagram.map((item) => (
        <div key={item.id}>
          <Link href={item.url} target="_blank">
            <Image
              src={item.image[0].thumbnails.large.url}
              width="400"
              height="400"
              alt="Instagram post"
              quality={30}
              className="mx-auto aspect-square rounded-lg"
            />
          </Link>
        </div>
      ))}
    </Section>
  );
}
