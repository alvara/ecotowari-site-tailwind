import { Typography } from '../Typography';

export interface IInfoCardProps {
  title: string;
  content?: React.ReactNode;
}

export default function InfoCard({ title, content }: IInfoCardProps) {
  return (
    <div className="card border-slate-300 bg-white shadow-md">
      {/* <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure> */}
      <div className="card-body text-left text-slate-900">
        <Typography variant="h3" className="font-extrabold text-primary">
          {title}
        </Typography>
        {content}
      </div>
    </div>
  );
}
