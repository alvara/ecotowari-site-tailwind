import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Image from 'next/image';
import stickerImg from '@/assets/stickerv1.png';
import MailingListForm from '../forms/MailingListForm';

export function GetStickerSection() {
  return (
    <Section
      id="sticker"
      backgroundColor="bg-gradient-to-r from-primary to-secondary"
    >
      <Typography variant="h2" className="text-center text-white" border>
        You can help
      </Typography>
      <Image src={stickerImg} alt="sticker preview" className="mx-auto mb-8" />
      <Typography variant="body1" className="text-white">
        If you feel like your mailbox is being flooded with flyers and want to
        do yourself and the planet a favour, look no further.
      </Typography>
      <Typography variant="body1" className="text-white" lineBreak>
        Be an actor of change, adopt an ecotowari sticker and join a growing
        movement for climate action!
      </Typography>
      <Typography variant="body1" className="text-white" lineBreak>
        We will soon launch a crowdfunding campaign where you will be able to
        get your hands on the ecotowari stickers so stay tuned for more
        information. Leave your email below and you will be the first to know
        when it launches.
      </Typography>
      <MailingListForm />
    </Section>
  );
}
