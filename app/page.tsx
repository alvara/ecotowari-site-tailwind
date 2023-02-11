import Header from '@/components/Header';
import IntroSection from '@/features/Sections/IntroSection';
import { GetStickerSection } from '@/features/Sections/GetStickerSection';
import StatisticsSection from '@/features/Sections/StatisticsSection';
import { getInstagram } from '@/services/repository/getInstagram';
import { getStickers } from '@/services/repository/getStickers';
import FollowUsSection from '@/features/Sections/FollowUsSection';

export const revalidate = 30; // revalidate every 30 seconds

export default async function Page() {
  const stickers = await getStickers();
  const instagram = await getInstagram();

  return (
    <>
      <Header />
      <IntroSection />
      <StatisticsSection stickers={stickers} />
      <GetStickerSection />
      <FollowUsSection instagram={instagram} />
    </>
  );
}
