import Image from 'next/image';
import { Typography } from './Typography';
import mailboxImg from '../assets/mailbox-split.png';

export default function Header() {
  return (
    <div className="bg-hero bg-contain bg-fixed">
      <div className="bg-gradient-to-b from-primary to-secondary opacity-90">
        <div className="min-h-60 container mx-auto flex flex-col-reverse py-16 text-center lg:flex-row lg:text-left ">
          <div className="flex-1 text-left lg:pr-16">
            <Typography
              variant="h1"
              className="text-center text-white lg:text-left"
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
