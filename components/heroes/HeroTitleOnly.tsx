import Section from '../Section';
import { Typography } from '../Typography';

interface HeroTitleOnlyProps {
  title: string;
}

export default function HeroTitleOnly({ title }: HeroTitleOnlyProps) {
  return (
    <div className="bg-hero bg-cover bg-fixed lg:bg-contain">
      <Section backgroundColor="bg-gradient-to-b from-primary/90 to-secondary/90">
        <Typography variant="h1" className="m-0 p-0 text-center text-white">
          {title}
        </Typography>
      </Section>
    </div>
  );
}
