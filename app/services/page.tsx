import Button from '@/components/buttons/Button';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import Link from 'next/link';

export default async function ContactPage() {
  return (
    <Section columns="md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2 lg:col-span-3">
        <Typography variant="h2">Services</Typography>
        <Typography variant="h3" lineBreak>
          Sorry! I am not accepting any new projects at the moment. <br />
          <br />
          However, if there is a new opportunity, please feel free to reach out
          to me and we can discuss in detail. <br />
        </Typography>
        <Link href={'/contact'}>
          <Button>Contact</Button>
        </Link>
      </div>
    </Section>
  );
}
