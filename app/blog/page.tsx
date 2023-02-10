import Section from '@/components/Section';

export const revalidate = 3600; // revalidate every hour

export default async function Page() {
  return (
    <Section
      backgroundColor="bg-white"
      className="text-center"
      columns="md:grid-cols-2 lg:grid-cols-3"
      yMargins="py-16"
    >
      blog
    </Section>
  );
}
