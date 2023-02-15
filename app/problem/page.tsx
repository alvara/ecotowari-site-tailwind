import HeroTitleOnly from '@/components/heroes/HeroTitleOnly';
import { getInstagram } from 'server/getInstagram';
import FollowUsSection from '@/features/Sections/FollowUsSection';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Image from 'next/image';
import flyerLifecycleImg from '@/assets/flyer-lifecycle-trimmy.png';
import mailBoxesSolution from '@/assets/mailboxes-ecotowari-solution.png';
import Button from '../../components/buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDroplet,
  faExclamation,
  faFlask,
  faLightbulb,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import FactCard from '@/components/card/FactCard';

export const revalidate = 30; // revalidate every 30 seconds

function BulletIcon() {
  return (
    <FontAwesomeIcon
      icon={faExclamation}
      className="mr-2 aspect-square rounded-full bg-accent p-1  text-white"
    />
  );
}

export default async function Page() {
  const instagram = await getInstagram();

  return (
    <>
      <HeroTitleOnly title="The Environment is in trouble" />

      {/* How is it in trouble? */}
      <Section className="grid-cols-2 !px-0 !pb-0 md:!pb-48">
        <div className="col-span-2">
          <Typography variant="h2" border className="text-center">
            How so?
          </Typography>
        </div>
        <div className="col-span-2 px-4 lg:col-span-2 lg:px-0">
          <Typography variant="p" lineBreak>
            Surveys have shown that most flyers are thrown away without being
            read. Apart from the annoyance of finding a lot of unsolicited
            flyers mixed with important mail, how are flyers bad for the
            environment? Below you can see the impact of paper manufacturing.
          </Typography>
          <Typography variant="p">
            As no official data is available on flyers, please note that the
            above only covers the paper manufacturing side of the operations.
            Printing requires further electricity and chemicals. Also, if thrown
            in the general bin as burnable trash, flyers will not be recycled.
            Recycling or burning also requires additional energy.
          </Typography>
        </div>
        <div className="col-span-2 mx-auto grid max-w-screen-lg grid-cols-2 gap-0">
          <FactCard
            icon={faDroplet}
            fact="1kg of paper requires up to 100L of water to make."
            source="Source: METI website"
            colored={true}
          />
          <div className="lg:order2 col-span-2 lg:col-span-1">
            <FactCard
              icon={faTree}
              fact="Most of the wood pulp in Japan is imported from Vietnam, Australia or South America."
              source="Source: WWF"
              colored={false}
            />
          </div>
          <div className="md:order3 order-last col-span-2 lg:order-none lg:col-span-1">
            <FactCard
              icon={faFlask}
              fact="About 200 individuals chemicals are typically used in the papermaking process."
              source="Source: paperonweb.com/chemical"
              colored={false}
            />
          </div>
          <div className="lg:order4 col-span-2  lg:col-span-1">
            <FactCard
              icon={faLightbulb}
              fact="It takes as much electricity to make 1kg of paper as it does to run a LED light for 631 hours."
              source="Source: Japan Paper "
              colored={true}
            />
          </div>
        </div>
      </Section>

      {/* Lifecycle of flyers */}
      <Section className="grid-cols-3 gap-2 " backgroundColor="bg-slate-50">
        <div className="col-span-3">
          <Typography variant="h2" border className="text-center">
            The lifecycle of flyers
          </Typography>
        </div>
        <div className="col-span-3 mx-auto xl:col-span-2">
          <Image
            src={flyerLifecycleImg}
            alt="Lifecycle of a flyer"
            className="rounded-lg xl:pr-32"
            quality={30}
            priority
          />
        </div>
        <div className="col-span-3 flex flex-col justify-start xl:col-span-1">
          <Typography variant="h3" lineBreak className="text-xl">
            The overall environmental footprint of a flyer can be decomposed as:
          </Typography>

          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Mining and extraction of raw materials
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Transport from the extraction place to the paper processing
                factory
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Paper manufacturing
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Transport of that paper to printers
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Printing
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Transport of the flyer from the printer to the distribution
                center
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Transport from the distributor to your mailbox
              </Typography>
            </div>
            <div className="flex justify-start">
              <BulletIcon />
              <Typography variant="p" className="m-0 p-0">
                Recycling or incinerating the flyers which requires energy
              </Typography>
            </div>
          </div>
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
            alt="What Makes ecotowari unique"
            className="rounded-lg"
            quality={12}
            priority
          />
        </div>
        <div className="col-span-2">
          <a href={'/#sticker'}>
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
