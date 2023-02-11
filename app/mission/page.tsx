import HeroTitleOnly from '@/components/heroes/HeroTitleOnly';
import { getInstagram } from 'server/getInstagram';
import FollowUsSection from '@/features/Sections/FollowUsSection';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Link from 'next/link';
import Image from 'next/image';
import mailBoxesFullImg from '@/assets/mailboxes-full.jpeg';
import mailBoxesQuickFixImg from '@/assets/mailboxes-quick-fix.jpeg';
import mailBoxesSolution from '@/assets/mailboxes-ecotowari-solution.png';
import Button from '../../components/buttons/Button';

export const revalidate = 30; // revalidate every 30 seconds

export default async function Page() {
  const instagram = await getInstagram();

  return (
    <>
      <HeroTitleOnly title="Our Mission" />

      {/* Our Mission */}
      <Section className="grid-cols-2">
        <div className="col-span-2">
          <Typography variant="h2" border className="text-center">
            Our Mission
          </Typography>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Typography variant="p" lineBreak>
            While papermaking and printing companies have made efforts over the
            years, paper manufacturing still requires large quantities of water,
            wood, energy and chemical products. For more details about the
            extent of the problem, check out the{' '}
            <Link href={'/problem'}>dedicated section</Link> on the
            environmental impact of flyers.
          </Typography>
          <Typography variant="p">
            ecotowari is an initiative to tackle the waste generated by flyers
            through a mailbox sticker. The sticker indicates in positive, clear
            terms that you do not wish to receive flyers because you care about
            our planet. Simple as that.
          </Typography>
        </div>
        <div className="col-span-2 mx-auto lg:col-span-1">
          <Image
            src={mailBoxesFullImg}
            alt="Mailboxes full of flyers"
            className="rounded-lg"
            quality={40}
            placeholder="blur"
          />
        </div>
      </Section>

      {/* Our Story */}
      <Section className="grid-cols-2" backgroundColor="bg-slate-50">
        <div className="col-span-2">
          <Typography variant="h2" border className="text-center ">
            Our Story
          </Typography>
        </div>
        <div className="col-span-2 mx-auto lg:col-span-1">
          <Image
            src={mailBoxesQuickFixImg}
            alt="Mailboxes full of flyers"
            className="rounded-lg"
            quality={40}
            placeholder="blur"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Typography variant="p" lineBreak>
            The initiative was launched in January 2022 in a sharehouse in
            Nippori, Tokyo.
          </Typography>
          <Typography variant="p">
            Founder Rémy Millot recalls: “Ever since I settled into my new home
            in Tokyo, I found the number of flyers pouring into my mailbox quite
            overwhelming. As a quick fix that somehow became permanent (as all
            quick fixes tend to be?) I put together some paper tape and a note
            saying I didn’t want to receive flyers. And much to my surprise,
            that very homemade-looking sticker proved to be working.
          </Typography>
          <Typography variant="p">
            My other housemates would also complain about receiving too many
            flyers. They liked the idea of a sticker but didn’t want it to be
            some homemade paper tape. That’s when I realized we needed a
            “proper” sticker if we wanted this type of initiative to pick up and
            grow.ecotowari was born!”
          </Typography>
          <Typography variant="p">
            The name ecotowari is a new word bringing together the words eco and
            kotowari, Japanese word for “refusing”. ecotowari means turning down
            single-use items for environmental reasons.
          </Typography>
        </div>
      </Section>

      {/* Our Unique Proposition */}
      <Section className="grid-cols-2">
        <div className="col-span-2">
          <Typography variant="h2" border className="text-center ">
            What makes ecotowari unique?
          </Typography>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Typography variant="p" lineBreak>
            We didn&apos;t invent the “チラシお断り” (chirashi okotowari – no to
            flyers) stickers. They have indeed been around for a while and one
            can already see them on mailboxes here and there. However, we were
            unhappy with their design as no mention is made of the environment
            or waste reduction. They include very strong language such as
            &quot;you&apos;re being watched&quot; or &quot;we will report you to
            the police&quot;. We feel this type of wording is a barrier to a
            wider adoption and discourages people from putting them on their
            mailboxes.
          </Typography>
          <Typography variant="p">
            Our goal with ecotowari is to use a different kind of symbolism and
            language in order to create an inclusive and positive movement - for
            the planet - instead of the anti-anythingthatcomesnearmydoor
            approach.
          </Typography>
          <Typography variant="p">
            And the best thing about our stickers is that they’re just as
            efficient with over 99% reduction rates 😊
          </Typography>
          <Typography variant="p">
            Join the movement and brighten up your mailbox with an ecotowari
            sticker!
          </Typography>
        </div>
        <div className="col-span-2 mx-auto lg:col-span-1">
          <Image
            src={mailBoxesSolution}
            alt="Mailboxes full of flyers"
            className="rounded-lg"
            quality={40}
            placeholder="blur"
          />
        </div>
        <div className="col-span-2 ">
          <a href="/#sticker">
            <Button variant="contained" className="mx-auto w-60">
              Get a sticker
            </Button>
          </a>
        </div>
      </Section>
      <FollowUsSection instagram={instagram} />
    </>
  );
}
