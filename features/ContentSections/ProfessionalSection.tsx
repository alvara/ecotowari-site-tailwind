import Button from '@/components/buttons/Button';
import InfoCard from '@/components/card/InfoCard';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Link from 'next/link';

export default function ProfessionalSection() {
  return (
    <Section
      backgroundColor="bg-gradient-to-r from-primary to-secondary"
      className="text-center lg:-mb-32 lg:pb-0"
      columns="md:grid-cols-3"
    >
      <span className="md:col-span-3">
        <Typography variant="h2" className="text-white">
          Unlock Your Potential
        </Typography>
        <Typography variant="body1" className="text-white" lineBreak>
          My mission is to help individuals and businesses with inspiring
          missions through technology.
          <br /> I blend my passion for health and technology to create new,
          unique solutions with each user in mind.
        </Typography>
        <Link href={'/projects'}>
          <Button color="white">See My Work</Button>
        </Link>
      </span>
      <InfoCard
        title="Development"
        content={
          <>
            <p>
              From idea to conception, I leverage my background as a software
              engineer to create new, unique solutions.
            </p>
            <i>NextJS・Material UI・Jamstack</i>
          </>
        }
      />
      <InfoCard
        title="Health Coach"
        content={
          <>
            <p>
              I train and educate people on how they can optimize their habits
              and lifestyle.
            </p>
            {/* TODO: add when get coach cert */}
            {/* <i>PN1 Coach Certified</i> */}
          </>
        }
      />
      <InfoCard
        title="Content Creator"
        content={
          <>
            <p>
              I regularly created advertisements for magazines and exhibits in
              the past. Along with photography as a hobby, I have a good eye for
              design and composition.
            </p>
            <i>Fujifilm X-T4・Luminar AI・Photoshop</i>
          </>
        }
      />
    </Section>
  );
}
