import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IInstagram } from '../../type';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import Section from '@/components/Section';

interface FollowUsSectionProps {
  instagram: IInstagram[];
  backgroundColor?: string;
}
export default function FollowUsSection({
  instagram,
  backgroundColor,
}: FollowUsSectionProps) {
  // filter instagram posts only if have large thumbnail url
  const instagramWithUrl = instagram.filter(
    (item) => item.image[0].thumbnails.large.url
  );

  return (
    <Section
      backgroundColor={backgroundColor ? backgroundColor : 'bg-slate-50'}
      columns="grid-cols-4"
    >
      <div className="col-span-4 lg:col-span-4">
        <Typography variant="h2" className="text-center" border>
          Follow us
        </Typography>

        <div className="mx-auto mb-4 flex justify-center text-center ">
          <Link href="https://www.instagram.com/ecotowari/" target="_window">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="mx-2 w-14 rounded-full bg-accent p-3 text-4xl text-white"
            />
          </Link>

          <Link href={`https://www.facebook.com/ecotowari`} target="_window">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className="mx-2 w-14 rounded-full bg-accent p-3 text-4xl text-white"
            />
          </Link>
        </div>
      </div>
      {instagramWithUrl.length > 0 &&
        instagramWithUrl?.map((item) => (
          <div key={item.id} className="col-span-2 md:col-span-1">
            <Link href={item.url} target="_blank">
              <Image
                src={item.image[0].thumbnails.large.url}
                width="400"
                height="400"
                alt="Instagram post"
                quality={10}
                className="mx-auto aspect-square rounded-lg"
              />
            </Link>
          </div>
        ))}
    </Section>
  );
}
