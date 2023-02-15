import HeroTitleOnly from '@/components/heroes/HeroTitleOnly';
import { getInstagram } from 'server/getInstagram';
import FollowUsSection from '@/features/Sections/FollowUsSection';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Image from 'next/image';
import inigochiImg from '@/assets/inogochi-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faPerson,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { getTeam } from 'server/getTeam';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const revalidate = 5; // revalidate every X seconds

export default async function Page() {
  const instagram = await getInstagram();
  const team = await getTeam();

  return (
    <>
      <HeroTitleOnly title="About Us" />

      {/* Our Values */}
      <Section className="grid-cols-3">
        <div className="col-span-3">
          <Typography variant="h2" border className="text-center">
            Our values
          </Typography>
        </div>

        <div className="col-span-3 mx-auto flex flex-col gap-0 align-middle lg:col-span-1">
          <FontAwesomeIcon icon={faPerson} size="3x" className="text-accent" />
          <Typography variant="h3" className="text-center">
            Every Individual Matters
          </Typography>
        </div>
        <div className="col-span-3 mx-auto flex flex-col gap-0 align-middle lg:col-span-1">
          <FontAwesomeIcon
            icon={faUserGroup}
            size="3x"
            className="text-accent"
          />
          <Typography variant="h3" className="text-center">
            United On A Collective Interest
          </Typography>
        </div>
        <div className="col-span-3 mx-auto flex flex-col gap-0 align-middle lg:col-span-1">
          <FontAwesomeIcon icon={faStar} size="3x" className="text-accent" />
          <Typography variant="h3" className="text-center">
            Less is More
          </Typography>
        </div>
        <div className="col-span-3 mx-auto lg:col-span-1"></div>

        <div className="col-span-3 lg:col-span-3">
          <Typography variant="p" lineBreak>
            Climate action is often seen as too big a task, something only
            governments or large corporations can undertake. At ecotowari, we
            believe every action matters. The multiplication of these individual
            actions can and will have a tangible impact and lead to sustainable
            change.
          </Typography>
          <Typography variant="p">
            Our initiative gives people an easy tool to tackle the waste
            problem, one flyer at a time. Ultimately, we hope for local
            governments and partner organizations to amplify this kind of
            initiative so we can collectively rise up to the challenges embodied
            in the United Nations&apos; Sustainable Development Goals.
          </Typography>
          <Typography variant="p">
            We also often hear that climate action implies sacrifices. It&apos;s
            just not true! Less can be more, especially when it comes to waste.
            Less waste, more realness!
          </Typography>
          <Typography variant="p">Let&apos;s all do what we can!</Typography>
        </div>
      </Section>

      {/* Meet Inigochi */}
      <Section className="grid-cols-1" backgroundColor="bg-slate-50">
        <Typography variant="h2" border className="text-center ">
          Meet Inigochi
        </Typography>
        <div className="mx-auto">
          <Image
            src={inigochiImg}
            alt="Inigochi mascot"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="col-span-1 ">
          <Typography variant="p" lineBreak>
            Inigo can be written as 1 2 5 in Japanese. Inigo’s parents picked
            this name in relation with the target 12.5 of the United Nations’
            Sustainable Development Goal 12 for sustainable consumption and
            production patterns. Target 12.5: “by 2030, substantially reduce
            waste generation through prevention, reduction, recycling, and
            reuse”.
          </Typography>
          <Typography variant="p" lineBreak>
            That SDG 12.5 target of waste reduction is ecotowari’s raison d’être
            so it’s only fitting that the mascot is named after it.
          </Typography>
          <Typography variant="p">
            Inigochi is Inigo’s cute nickname. We only want the best for
            Inigochi and the best would be for Inigochi to be adopted by as many
            people and families across Japan as possible. Share the love!
          </Typography>
        </div>
      </Section>

      {/* Meet The Team */}
      <Section className="grid-cols-3">
        <div className="col-span-3">
          <Typography variant="h2" border className="text-center ">
            Meet the Team
          </Typography>
        </div>
        {team.map((member) => (
          <div className="col-span-3 text-center lg:col-span-1" key={member.id}>
            <div
              className="mx-auto mb-4 text-center"
              style={{ height: 250, width: 250 }}
            >
              {member?.avatar?.[0].thumbnails ? (
                <Image
                  src={member.avatar[0].thumbnails.large.url}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="mx-auto aspect-square rounded-full"
                />
              ) : (
                <div
                  className="mx-auto flex aspect-square items-center justify-center rounded-full bg-gradient-to-bl from-primary to-secondary text-8xl text-white"
                  style={{ height: 250, width: 250 }}
                >
                  {member.name[0]}
                </div>
              )}
            </div>
            <Typography variant="h3" className="m-0 p-0 text-2xl">
              {member.name}
            </Typography>
            <Typography variant="p" className=" mb-4 text-slate-400">
              {member.role}
            </Typography>

            {/* SOCIALS */}
            <div className="mb-4 flex h-8 justify-center gap-3">
              {member.facebook && (
                <Link href={member.facebook} target={'_blank'}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="text-accent"
                  />
                </Link>
              )}

              {member.instagram && (
                <Link href={`${member.instagram}`} target={'_blank'}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="text-accent"
                  />
                </Link>
              )}

              {member.twitter && (
                <Link href={`${member.twitter}`} target={'_blank'}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="text-accent"
                  />
                </Link>
              )}

              {member.linkedin && (
                <Link href={`${member.linkedin}`} target={'_blank'}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="text-accent"
                  />
                </Link>
              )}

              {member.website && (
                <Link href={`${member.website}`} target={'_blank'}>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2x"
                    className="text-accent"
                  />
                </Link>
              )}
            </div>

            <Typography variant="p" lineBreak>
              {member.bio}
            </Typography>
          </div>
        ))}
      </Section>

      <Section className="pb-0" backgroundColor="bg-slate-50">
        <Typography variant="h2" border className="text-center ">
          To our dear supporters
        </Typography>
        <Typography variant="p" lineBreak>
          Our heartfelt gratitude to Ibaraki Kiyotaka from Studio Lucky for
          designing the sticker and the ecotowari mascot. Dear Lucky sensei,
          thank you for your friendship, your trust and for giving Inigochi a
          life! Follow Lucky Studio’s beautiful artwork here:
          <Link href={'https://lucky-lucky.jp/'} target={'_blank'}>
            https://lucky-lucky.jp/
          </Link>
        </Typography>
        <Typography variant="p" lineBreak>
          Our special thanks go out to Aska for bearing with Rémy’s 1,000 ideas
          for names and mascots, providing always great input and making phone
          calls so we could navigate statistics and data to gain insight into
          the world of papermaking and flyers.
        </Typography>
        <Typography variant="p" lineBreak>
          We also want to aknowledge the contributions of Ayumi and Chie who
          shared with us their insight on marketing and communication at a time
          where ecotowari was nothing but a tiny seed.
        </Typography>
        <Typography variant="p" lineBreak>
          And last but definitely not least, a massive thank you to all the
          early supporters who gathered flyers so we could have real-world data
          on flyer distribution and for sporting the ecotowari sticker on their
          mailbox before it was cool!
        </Typography>
      </Section>
      <FollowUsSection instagram={instagram} backgroundColor="bg-white" />
    </>
  );
}
