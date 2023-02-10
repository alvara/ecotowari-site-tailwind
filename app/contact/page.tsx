import Section from '@/components/Section';
import { Typography } from '@/components/Typography';

export default async function ContactPage() {
  return (
    <Section columns="md:grid-cols-2 lg:grid-cols-3" noMargins={true}>
      <div className="md:col-span-2 lg:col-span-3">
        <Typography variant="h2">Let&apos;s talk</Typography>
        <Typography variant="body1" lineBreak>
          Let&apos;s talk and discuss how I can help you and your business.
        </Typography>
        test
      </div>
    </Section>
  );
}
