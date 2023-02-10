import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Image from 'next/image';
import profile from '../../public/profile.jpeg';

export default function IntroSection() {
  return (
    <Section backgroundColor="bg-base-100" columns={'grid-cols-2'}>
      <div className="col-span-2 text-center md:col-span-1">
        <Typography variant="h2">
          Hi, I{"'"}m Jesse. Nice to meet you.
        </Typography>

        <Typography variant="h3" lineBreak>
          I build software that makes an impact on people’s lives.
        </Typography>

        <Typography variant="p">
          Based in Tokyo, I am an <b>international freelancer</b> helping
          individuals reach their full potential. My focus is on projects that
          can help people improve their wellbeing, live healthier, and have a
          positive impact on the world.
        </Typography>
      </div>
      <div className="col-span-2 mx-auto flex justify-center text-center  md:col-span-1">
        <Image
          className="mx-auto w-full -scale-x-100 rounded-full"
          src={profile}
          alt="Profile Pic"
          width={150}
          height={150}
        />
      </div>
    </Section>
  );
}
