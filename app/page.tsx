import Header from '@/components/Header';
import Section from '@/components/Section';
import IntroSection from '@/features/ContentSections/IntroSection';
import ProfessionalSection from '@/features/ContentSections/ProfessionalSection';

export const revalidate = 30; // revalidate every 30 seconds

export default async function Page() {
  return (
    <>
      <Header />
      <IntroSection />
      <ProfessionalSection />
      <Section
        className="text-center lg:mb-0 lg:pb-0"
        columns="md:grid-cols-2 lg:grid-cols-3"
      ></Section>

      <Section
        backgroundColor="bg-white"
        className="text-center"
        columns="md:grid-cols-2 lg:grid-cols-3"
      ></Section>
    </>
  );
}
