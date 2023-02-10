import Image from 'next/image';
import { Typography } from './Typography';
import mailboxImg from '../assets/mailbox-split.png';
import Button from './buttons/Button';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-hero bg-contain bg-fixed">
      <div className="bg-gradient-to-b from-primary/90 to-secondary/90">
        <div className="min-h-60 container mx-auto flex flex-col-reverse py-16 text-center lg:flex-row lg:text-left ">
          <div className="flex flex-1 flex-col justify-center gap-6 text-left lg:pr-16">
            <Typography
              variant="h1"
              className="m-0 p-0 text-center text-white lg:text-left"
            >
              One sticker to reduce waste
            </Typography>
            <Typography
              variant="subtitle1"
              className="text-center text-white lg:text-left"
            >
              Free your mailbox from unsolicited flyers with this real-life spam
              filter!
            </Typography>
            <Link href={'/#sticker'}>
              <Button variant="contained" className="mx-auto lg:mx-0">
                Get a sticker
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <div className="mx-auto max-w-md lg:max-w-none">
              <Image
                src={mailboxImg}
                alt="Mailbox Improvement"
                className="mb-14 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
