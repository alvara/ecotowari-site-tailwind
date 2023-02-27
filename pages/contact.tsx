import HeroTitleOnly from '@/components/heroes/HeroTitleOnly';
import Section from '@/components/Section';
import { Typography } from '@/components/Typography';
import ContactForm from '@/features/forms/ContactForm';

export default function ContactPage() {
  return (
    <>
      <HeroTitleOnly title="Contact Us" />

      <Section className="grid-cols-5">
        <div className="col-span-5 md:col-span-3 md:col-start-2">
          <Typography variant="h2" border className="text-center">
            We are here for you!
          </Typography>
          <Typography variant="p" lineBreak>
            If you have any questions or comments and you&apos;d like to get in
            touch with the ecotowari team, please fill in the following form.
          </Typography>
          <Typography variant="p">
            We will do our best to get back to as soon as we can. Thank you!
          </Typography>
          <div className="m-2 lg:m-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
