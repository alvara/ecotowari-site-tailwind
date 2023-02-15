import Hero2Column from '@/components/heroes/Hero2Column';
import FollowUsSection from '@/features/Sections/FollowUsSection';
import { GetStickerSection } from '@/features/Sections/GetStickerSection';
import IntroSection from '@/features/Sections/IntroSection';
import StatisticsSection from '@/features/Sections/StatisticsSection';
import { getInstagram } from 'server/getInstagram';
import { getStickers } from 'server/getStickers';

export const getStaticProps = async () => {
  const stickers = await getStickers();
  const instagram = await getInstagram();

  return {
    props: {
      stickers,
      instagram,
    },
    revalidate: 30, // revalidate every 30 seconds
  };
};

export default function RootLayout({ stickers, instagram }) {
  return (
    <>
      <Hero2Column />
      <IntroSection />
      <StatisticsSection stickers={stickers} />
      <GetStickerSection />
      <FollowUsSection instagram={instagram} />
    </>
  );
}
