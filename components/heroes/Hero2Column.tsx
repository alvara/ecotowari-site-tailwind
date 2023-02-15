import Image from 'next/image';
import { Typography } from '../Typography';
import mailboxImg from '@/assets/mailbox-split.png';
import Button from '@/components/buttons/Button';

export default function Hero2Column() {
  return (
    <div className="bg-hero bg-cover bg-fixed lg:bg-contain">
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
            <a href={'/#sticker'}>
              <Button
                variant="contained"
                className="relative mx-auto w-60 lg:mx-0"
              >
                Get a sticker
              </Button>
            </a>
          </div>
          <div className="flex-1">
            <div className="mx-auto max-w-md lg:max-w-2xl">
              <Image
                src={mailboxImg}
                alt="Mailbox Improvement"
                className="mb-14 "
                quality={30}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
